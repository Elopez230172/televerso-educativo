export const PERMISSION_CATALOG = {
  escuela:["ver","editar"], ciclos:["ver","crear","editar","activar","eliminar","promover"],
  alumnos:["ver","crear","editar","eliminar","documentos","expediente"],
  asistencias:["ver","capturar","editar","eliminar","reportes"],
  actividades:["ver","crear","editar","eliminar"],
  calificaciones:["ver","capturar","editar","eliminar","reportes"],
  docentes:["ver","crear","editar","eliminar"], grupos:["ver","crear","editar","eliminar"],
  documentos:["ver","crear","editar","eliminar","generar_pdf"],
  respaldos:["ver","crear","restaurar"], usuarios:["ver","crear","editar","eliminar","permisos"],
  papelera:["ver","restaurar","eliminar"], configuracion:["ver","editar","mantenimiento"]
};

const roleGrants = {
  "Administrador":"*",
  "Control Escolar":[
    "escuela.ver","escuela.editar","ciclos.ver","ciclos.crear","ciclos.editar","ciclos.activar","ciclos.promover",
    "alumnos.ver","alumnos.crear","alumnos.editar","alumnos.eliminar","alumnos.documentos","alumnos.expediente",
    "asistencias.ver","asistencias.reportes","actividades.ver","calificaciones.ver","calificaciones.reportes",
    "docentes.ver","docentes.crear","docentes.editar","docentes.eliminar","grupos.ver","grupos.crear","grupos.editar","grupos.eliminar",
    "documentos.ver","documentos.crear","documentos.editar","documentos.eliminar","documentos.generar_pdf",
    "papelera.ver","papelera.restaurar","configuracion.ver"
  ],
  "Docente":[
    "escuela.ver","ciclos.ver","alumnos.ver","alumnos.crear","alumnos.editar","alumnos.eliminar","alumnos.documentos","alumnos.expediente",
    "asistencias.ver","asistencias.capturar","asistencias.editar","asistencias.reportes",
    "actividades.ver","actividades.crear","actividades.editar","actividades.eliminar",
    "calificaciones.ver","calificaciones.capturar","calificaciones.editar","calificaciones.eliminar","calificaciones.reportes",
    "grupos.ver","documentos.ver","documentos.crear","documentos.editar","documentos.generar_pdf"
  ],
  "Tutor":["escuela.ver","ciclos.ver","alumnos.ver","asistencias.ver","calificaciones.ver","calificaciones.reportes","documentos.ver","documentos.generar_pdf"],
  "Finanzas":["escuela.ver","ciclos.ver","alumnos.ver","documentos.ver"]
};

export function roleDefaults(role){
  const out={};
  Object.entries(PERMISSION_CATALOG).forEach(([m,acts])=>acts.forEach(a=>out[`${m}.${a}`]=false));
  if(roleGrants[role]==="*"){Object.keys(out).forEach(k=>out[k]=true);return out;}
  (roleGrants[role]||[]).forEach(k=>out[k]=true);return out;
}

export function effectivePermissions(profile){
  const result=roleDefaults(profile?.role);
  Object.entries(profile?.permissions||{}).forEach(([key,value])=>{ if(key in result) result[key]=Boolean(value); });
  return result;
}

export function can(profile, permission){
  if(profile?.role==="Administrador") return true;
  return effectivePermissions(profile)[permission]===true;
}

export function canAccessGroup(profile, groupId){
  if(!groupId) return false;
  if(["Administrador","Control Escolar"].includes(profile?.role)) return true;
  return Array.isArray(profile?.allowedGroupIds) && profile.allowedGroupIds.includes(groupId);
}
