# AulaControl Web · GitHub + Firebase

Migración web del sistema de escritorio AulaControl. El frontend usa HTML/CSS/JavaScript estático y puede publicarse desde GitHub Pages; Firebase proporciona autenticación, Firestore, Storage, Cloud Functions y persistencia local del navegador.

## Alcance implementado

- Inicio de sesión con Firebase Authentication.
- Roles compatibles con el sistema original: Administrador, Control Escolar, Docente, Tutor y Finanzas.
- Catálogo granular de permisos equivalente al original.
- Restricción de docentes por grupos asignados.
- Plantel y CCT.
- Ciclos escolares y selección de ciclo activo.
- Alumnos, docentes y grupos.
- Asistencia diaria por grupo.
- Actividades y calificaciones por actividad.
- Bitácora de incidencias y citatorios.
- Usuarios mediante Cloud Functions, evitando altas privilegiadas desde el navegador.
- Papelera y auditoría como base de recuperación y trazabilidad.
- Licenciamiento centralizado por Firebase, vinculado a CCT y límite de equipos.
- Caché persistente de Firestore para continuar leyendo/escribiendo temporalmente sin conexión; al volver Internet, Firestore sincroniza cambios.

## Diferencia importante respecto al sistema Python

La versión original sincroniza varias computadoras mediante un servidor LAN local y puede operar entre equipos aun sin Internet. Firebase conserva datos localmente en cada navegador cuando se pierde la conexión, pero dos computadoras sin Internet no pueden sincronizarse entre sí hasta recuperar acceso a Firebase. Si necesitas sincronización puramente LAN, hay que conservar un gateway/servidor local híbrido.

## Estructura

```text
index.html
css/app.css
js/
  app.js
  data.js
  firebase.js
  firebase-config.js
  permissions.js
  ui.js
firestore.rules
firestore.indexes.json
storage.rules
firebase.json
functions/
  index.js
  package.json
```

## Configuración Firebase

1. Crea o selecciona un proyecto Firebase y registra una aplicación Web.
2. Activa **Authentication > Email/Password**.
3. Crea Firestore en modo producción y activa Storage.
4. Edita `js/firebase-config.js` y reemplaza los valores `REEMPLAZAR` con la configuración de tu aplicación Web.
5. Instala Firebase CLI e inicia sesión.
6. Desde esta carpeta ejecuta:

```bash
firebase use --add
firebase deploy --only firestore:rules,firestore:indexes,storage,functions
```

La configuración pública de Firebase puede estar en el frontend; la seguridad real se aplica con Authentication, reglas y Cloud Functions. Nunca publiques una cuenta de servicio, una clave privada de licenciamiento o secretos administrativos.

## Primer plantel y administrador

Crea el primer usuario desde Firebase Console > Authentication. Después crea manualmente el documento `users/{UID}`:

```json
{
  "schoolId": "plantel_14DTV0001Z",
  "displayName": "Administrador",
  "email": "admin@escuela.mx",
  "role": "Administrador",
  "active": true,
  "allowedGroupIds": [],
  "permissions": {}
}
```

Crea también `schools/plantel_14DTV0001Z`:

```json
{
  "name": "Nombre del plantel",
  "cct": "14DTV0001Z",
  "address": "",
  "phone": "",
  "email": "",
  "activeCycleId": null
}
```

Después de entrar como Administrador, el resto de usuarios puede crearse desde el módulo **Usuarios**.

## Licencias

Las claves de licencia no se crean en el navegador ni se guardan en código público. El backend calcula SHA-256 del código introducido y busca `licenseKeys/{hash}`. Esos documentos deben generarse con una herramienta administrativa privada. Ejemplo conceptual:

```json
{
  "cct": "14DTV0001Z",
  "plan": "Profesional",
  "maxDevices": 10,
  "devices": [],
  "revoked": false,
  "expiresAt": "Firestore Timestamp"
}
```

## GitHub Pages

Esta versión vive en `aulacontrol-firebase/` para no alterar el sistema existente del repositorio. Si GitHub Pages publica la rama principal desde la raíz, una vez fusionada podrá abrirse como una subruta del sitio. También puede moverse a un repositorio separado si se desea que AulaControl sea el sitio principal.

## Paridad restante con el programa Python

La base funcional ya está migrada. Para llegar a paridad completa todavía conviene incorporar como módulos web: expediente digital con Storage, fotografías, credenciales QR/PDF, boletas y reportes PDF, horarios, promoción de alumnos, respaldos exportables, restauración visual de papelera, archivos de expediente, fichas de inscripción, relatorías diarias, pagos y configuración institucional avanzada.
