const {onCall,HttpsError}=require("firebase-functions/v2/https");
const {initializeApp}=require("firebase-admin/app");
const {getAuth}=require("firebase-admin/auth");
const {getFirestore,FieldValue}=require("firebase-admin/firestore");
const crypto=require("crypto");
initializeApp();
const db=getFirestore();

async function caller(req){
  if(!req.auth) throw new HttpsError("unauthenticated","Debes iniciar sesión.");
  const snap=await db.doc(`users/${req.auth.uid}`).get();
  if(!snap.exists||snap.data().active===false) throw new HttpsError("permission-denied","Perfil no autorizado.");
  return {uid:req.auth.uid,...snap.data()};
}
function requireAdmin(user){if(user.role!=="Administrador")throw new HttpsError("permission-denied","Se requiere rol Administrador.");}

exports.adminCreateUser=onCall(async req=>{
  const user=await caller(req);requireAdmin(user);const d=req.data||{};
  if(!d.email||!d.password||!d.role)throw new HttpsError("invalid-argument","Faltan correo, contraseña o rol.");
  const rec=await getAuth().createUser({email:String(d.email).trim().toLowerCase(),password:String(d.password),displayName:String(d.displayName||"")});
  await db.doc(`users/${rec.uid}`).set({schoolId:user.schoolId,displayName:d.displayName||"",email:rec.email,role:d.role,active:true,allowedGroupIds:Array.isArray(d.allowedGroupIds)?d.allowedGroupIds:[],permissions:{},createdAt:FieldValue.serverTimestamp(),createdBy:user.uid});
  return {uid:rec.uid};
});

exports.listSchoolUsers=onCall(async req=>{
  const user=await caller(req);if(!["Administrador","Control Escolar"].includes(user.role))throw new HttpsError("permission-denied","Sin permiso.");
  const snap=await db.collection("users").where("schoolId","==",user.schoolId).get();
  return {users:snap.docs.map(d=>({id:d.id,...d.data()}))};
});

function normalizeCode(v){return String(v||"").trim().replace(/\s+/g,"");}
exports.activateLicense=onCall(async req=>{
  const user=await caller(req);requireAdmin(user);const code=normalizeCode(req.data?.code);const deviceId=String(req.data?.deviceId||"").trim();
  if(!code||!deviceId)throw new HttpsError("invalid-argument","Código y equipo son obligatorios.");
  const hash=crypto.createHash("sha256").update(code).digest("hex");
  const ref=db.doc(`licenseKeys/${hash}`);const licSnap=await ref.get();if(!licSnap.exists)throw new HttpsError("not-found","Licencia no válida.");
  const lic=licSnap.data();if(lic.revoked)throw new HttpsError("failed-precondition","Licencia revocada.");
  const schoolSnap=await db.doc(`schools/${user.schoolId}`).get();const school=schoolSnap.data()||{};
  if(String(lic.cct||"").toUpperCase()!==String(school.cct||"").toUpperCase())throw new HttpsError("failed-precondition","La licencia pertenece a otro CCT.");
  if(lic.expiresAt&&lic.expiresAt.toMillis()<Date.now())throw new HttpsError("failed-precondition","La licencia está vencida.");
  const devices=new Set(Array.isArray(lic.devices)?lic.devices:[]);devices.add(deviceId);if(devices.size>Number(lic.maxDevices||1))throw new HttpsError("resource-exhausted","Se alcanzó el límite de equipos.");
  await ref.update({devices:[...devices],lastActivatedAt:FieldValue.serverTimestamp()});
  await db.doc(`schools/${user.schoolId}/settings/license`).set({licenseHash:hash,plan:lic.plan||"Estándar",expiresAt:lic.expiresAt||null,maxDevices:Number(lic.maxDevices||1),active:true,activatedAt:FieldValue.serverTimestamp()},{merge:true});
  return {message:"Licencia activada correctamente."};
});

exports.getLicenseStatus=onCall(async req=>{
  const user=await caller(req);const snap=await db.doc(`schools/${user.schoolId}/settings/license`).get();if(!snap.exists)return {active:false};
  const s=snap.data();let active=s.active===true;if(s.expiresAt&&s.expiresAt.toMillis()<Date.now())active=false;
  let devicesUsed=0;if(s.licenseHash){const key=await db.doc(`licenseKeys/${s.licenseHash}`).get();devicesUsed=key.exists?(key.data().devices||[]).length:0;}
  return {active,plan:s.plan||"",expiresAt:s.expiresAt?s.expiresAt.toDate().toISOString().slice(0,10):null,maxDevices:s.maxDevices||0,devicesUsed};
});
