import {
  collection, doc, getDoc, getDocs, addDoc, setDoc, deleteDoc,
  query, where, orderBy, limit, onSnapshot, serverTimestamp, writeBatch
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { db } from "./firebase.js";

let sessionProfile=null;
let activeCycleId=null;

export function setSessionContext(profile, cycleId=null){sessionProfile=profile;activeCycleId=cycleId;}
export function setActiveCycleId(cycleId){activeCycleId=cycleId;}
export function profile(){return sessionProfile;}
export function cycleId(){return activeCycleId;}
export function schoolId(){return sessionProfile?.schoolId||null;}
export function schoolDoc(){return doc(db,"schools",schoolId());}
export function schoolCol(name){return collection(db,"schools",schoolId(),name);}
export function schoolDocIn(name,id){return doc(db,"schools",schoolId(),name,id);}

export async function getUserProfile(uid){
  const snap=await getDoc(doc(db,"users",uid));
  return snap.exists()?{id:snap.id,...snap.data()}:null;
}
export async function getSchool(){const s=await getDoc(schoolDoc());return s.exists()?{id:s.id,...s.data()}:null;}
export async function list(name, opts={}){
  const constraints=[];
  if(opts.cycle && activeCycleId) constraints.push(where("cycleId","==",activeCycleId));
  if(opts.where) constraints.push(...opts.where.map(x=>where(x[0],x[1],x[2])));
  if(opts.orderBy) constraints.push(orderBy(opts.orderBy[0],opts.orderBy[1]||"asc"));
  if(opts.limit) constraints.push(limit(opts.limit));
  const snap=await getDocs(query(schoolCol(name),...constraints));
  return snap.docs.map(d=>({id:d.id,...d.data()}));
}
export function listen(name, callback, opts={}){
  const constraints=[];
  if(opts.cycle && activeCycleId) constraints.push(where("cycleId","==",activeCycleId));
  if(opts.where) constraints.push(...opts.where.map(x=>where(x[0],x[1],x[2])));
  if(opts.orderBy) constraints.push(orderBy(opts.orderBy[0],opts.orderBy[1]||"asc"));
  return onSnapshot(query(schoolCol(name),...constraints),s=>callback(s.docs.map(d=>({id:d.id,...d.data()}))));
}
export async function create(name,data){
  const payload={...data,createdAt:serverTimestamp(),createdBy:sessionProfile?.uid||null,updatedAt:serverTimestamp(),updatedBy:sessionProfile?.uid||null};
  if(activeCycleId && !payload.cycleId && !["cycles","settings"].includes(name)) payload.cycleId=activeCycleId;
  const ref=await addDoc(schoolCol(name),payload);await audit(name,"crear",ref.id,data);return ref.id;
}
export async function save(name,id,data){
  const payload={...data,updatedAt:serverTimestamp(),updatedBy:sessionProfile?.uid||null};
  if(activeCycleId && !payload.cycleId && !["cycles","settings"].includes(name)) payload.cycleId=activeCycleId;
  await setDoc(schoolDocIn(name,id),payload,{merge:true});await audit(name,"editar",id,data);
}
export async function remove(name,id,description=""){
  const old=await getDoc(schoolDocIn(name,id));
  if(old.exists()) await addDoc(schoolCol("trash"),{entity:name,recordId:id,description,data:old.data(),deletedAt:serverTimestamp(),deletedBy:sessionProfile?.uid||null,cycleId:old.data().cycleId||activeCycleId||null});
  await deleteDoc(schoolDocIn(name,id));await audit(name,"eliminar",id,{description});
}
export async function audit(module,action,recordId,detail={}){
  try{await addDoc(schoolCol("audit"),{module,action,recordId,detail,userId:sessionProfile?.uid||null,userName:sessionProfile?.displayName||sessionProfile?.email||"",createdAt:serverTimestamp()});}catch(e){console.warn("Audit unavailable",e);}
}
export async function bulkUpsert(name, rows){
  const batch=writeBatch(db);
  rows.forEach(({id,data})=>batch.set(schoolDocIn(name,id),{...data,updatedAt:serverTimestamp(),updatedBy:sessionProfile?.uid||null},{merge:true}));
  await batch.commit();await audit(name,"captura_masiva","batch",{count:rows.length});
}
export async function setActiveCycle(cycle){
  const all=await list("cycles");const batch=writeBatch(db);
  all.forEach(c=>batch.set(schoolDocIn("cycles",c.id),{active:c.id===cycle.id,updatedAt:serverTimestamp()},{merge:true}));
  batch.set(schoolDoc(),{activeCycleId:cycle.id},{merge:true});await batch.commit();await audit("ciclos","activar",cycle.id,{name:cycle.name});
}
