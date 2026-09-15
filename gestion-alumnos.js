/* TeleVerso Educativo · Gestión de alumnos
   - Permite editar el nombre de un alumno ya registrado sin cambiar su ID, QR ni progreso.
   - Permite imprimir la lista simple de alumnos de cada grupo, sin códigos QR.
*/
(() => {
  const SCHOOL_NAME = 'Escuela Telesecundaria “Esteban Loera”';

  const escapeHtml = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const cleanStudentName = value => String(value || '')
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, 80);

  const gradeLabel = group => {
    const raw = String(group?.grade ?? '').trim().toLowerCase();
    if (['2', '2°', '2º', 'segundo'].includes(raw)) return '2.º grado';
    if (['3', '3°', '3º', 'tercero'].includes(raw)) return '3.º grado';
    const name = String(group?.name || '').toLowerCase();
    if (/\bsegundo\b|(^|\s)2\s*[°ºo]/.test(name)) return '2.º grado';
    if (/\btercero\b|(^|\s)3\s*[°ºo]/.test(name)) return '3.º grado';
    return 'Grado no especificado';
  };

  window.editStudentName = async function(studentId) {
    const student = localState?.students?.[studentId];
    if (!student) {
      if (typeof Swal !== 'undefined') Swal.fire('Alumno no encontrado', 'No se pudo localizar el registro del alumno.', 'warning');
      return;
    }

    const result = await Swal.fire({
      title: 'Modificar nombre del alumno',
      text: 'El código QR, el expediente y el avance del alumno se conservarán.',
      input: 'text',
      inputValue: student.name || '',
      inputLabel: 'Nombre completo',
      inputPlaceholder: 'Escribe el nombre completo',
      inputAttributes: {
        maxlength: '80',
        autocapitalize: 'words',
        autocomplete: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar cambio',
      cancelButtonText: 'Cancelar',
      inputValidator: value => {
        const name = cleanStudentName(value);
        if (!name) return 'Escribe un nombre válido.';
        if (name.length < 2) return 'El nombre es demasiado corto.';
        return undefined;
      }
    });

    if (!result.isConfirmed) return;
    const newName = cleanStudentName(result.value);
    if (!newName || newName === student.name) return;

    if (!db) {
      Swal.fire('Sin conexión', 'No se pudo conectar con la base de datos para guardar el cambio.', 'error');
      return;
    }

    try {
      await db.collection('students').doc(studentId).set({ name: newName }, { merge: true });

      student.name = newName;
      if (activeStudent?.id === studentId) {
        activeStudent.name = newName;
        if (typeof renderStudentDashboard === 'function') renderStudentDashboard();
      }
      if (typeof renderTeacherGroups === 'function') renderTeacherGroups();

      Swal.fire({
        icon: 'success',
        title: 'Nombre actualizado',
        text: 'Se conservan el mismo QR, expediente, puntos y actividades del alumno.',
        timer: 1900,
        showConfirmButton: false
      });
    } catch (error) {
      console.error('Error al actualizar el nombre del alumno:', error);
      Swal.fire('No se pudo guardar', error?.message || 'Ocurrió un error al actualizar el nombre.', 'error');
    }
  };

  window.printGroupStudentList = function(groupId) {
    const group = localState?.groups?.[groupId];
    if (!group) {
      if (typeof Swal !== 'undefined') Swal.fire('Grupo no encontrado', 'No se pudo localizar este grupo.', 'warning');
      return;
    }

    const students = (group.students || [])
      .map(id => localState?.students?.[id])
      .filter(Boolean)
      .sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'es', { sensitivity: 'base' }));

    if (!students.length) {
      if (typeof Swal !== 'undefined') Swal.fire('Atención', 'Este grupo no tiene alumnos registrados para imprimir.', 'info');
      return;
    }

    const printArea = document.getElementById('print-area');
    if (!printArea) return;

    const rows = students.map((student, index) => `
      <tr>
        <td style="width:13%;text-align:center;padding:11px 8px;border:1px solid #94a3b8;font-weight:700;">${index + 1}</td>
        <td style="padding:11px 14px;border:1px solid #94a3b8;font-weight:600;">${escapeHtml(student.name)}</td>
      </tr>
    `).join('');

    const today = new Intl.DateTimeFormat('es-MX', {
      day: '2-digit', month: 'long', year: 'numeric'
    }).format(new Date());

    printArea.innerHTML = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;padding:8mm 6mm;background:#fff;">
        <div style="text-align:center;border-bottom:2px solid #0f172a;padding-bottom:12px;margin-bottom:18px;">
          <img src="televerso-logo.svg" alt="TeleVerso Educativo" style="display:block;width:180px;height:auto;margin:0 auto 8px;">
          <div style="font-size:19px;font-weight:900;letter-spacing:.02em;">${SCHOOL_NAME}</div>
          <div style="font-size:16px;font-weight:800;margin-top:7px;">LISTA DE ALUMNOS</div>
        </div>

        <table style="width:100%;border-collapse:collapse;margin-bottom:18px;font-size:12px;">
          <tr>
            <td style="padding:7px 9px;border:1px solid #cbd5e1;"><strong>Grupo:</strong> ${escapeHtml(group.name || 'Sin nombre')}</td>
            <td style="padding:7px 9px;border:1px solid #cbd5e1;"><strong>Grado:</strong> ${escapeHtml(gradeLabel(group))}</td>
          </tr>
          <tr>
            <td style="padding:7px 9px;border:1px solid #cbd5e1;"><strong>Total de alumnos:</strong> ${students.length}</td>
            <td style="padding:7px 9px;border:1px solid #cbd5e1;"><strong>Fecha:</strong> ${escapeHtml(today)}</td>
          </tr>
        </table>

        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <thead>
            <tr>
              <th style="width:13%;padding:10px 8px;border:1px solid #475569;background:#e2e8f0;text-align:center;">N.º</th>
              <th style="padding:10px 14px;border:1px solid #475569;background:#e2e8f0;text-align:left;">Nombre del alumno</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>

        <div style="margin-top:24px;font-size:10px;color:#64748b;text-align:right;">TeleVerso Educativo · Lista sin códigos QR</div>
      </div>
    `;

    setTimeout(() => window.print(), 250);
  };

  function enhanceTeacherStudentAdmin() {
    const groups = Object.values(localState?.groups || {});

    groups.forEach(group => {
      const addButton = document.querySelector(`button[onclick="addStudentCloud('${group.id}')"]`);
      const groupCard = addButton?.closest('.glass-card');
      const groupActions = addButton?.parentElement;

      if (groupCard && groupActions) {
        const qrButton = groupActions.querySelector(`button[onclick="printGroupQrs('${group.id}')"]`);
        if (qrButton) {
          const label = qrButton.querySelector('span');
          if (label) label.textContent = 'Credenciales QR';
        }

        if (!groupActions.querySelector(`[data-student-list-group="${group.id}"]`)) {
          const listButton = document.createElement('button');
          listButton.type = 'button';
          listButton.dataset.studentListGroup = group.id;
          listButton.className = 'px-3 py-1.5 bg-cyan-600/30 hover:bg-cyan-600 text-cyan-100 rounded-lg text-xs font-bold transition flex items-center space-x-1 border border-cyan-500/30';
          listButton.innerHTML = '<i class="fa-solid fa-list-ol"></i><span>Lista sin QR</span>';
          listButton.addEventListener('click', () => window.printGroupStudentList(group.id));
          groupActions.insertBefore(listButton, addButton);
        }
      }

      (group.students || []).forEach(studentId => {
        const qrButton = document.querySelector(`button[onclick="displayStudentQr('${studentId}')"]`);
        const studentActions = qrButton?.parentElement;
        if (!studentActions || studentActions.querySelector(`[data-edit-student="${studentId}"]`)) return;

        const editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.dataset.editStudent = studentId;
        editButton.className = 'px-2.5 py-1.5 bg-amber-600/25 hover:bg-amber-600 text-amber-200 hover:text-white rounded-lg text-xs font-bold transition flex items-center space-x-1 border border-amber-500/30';
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i><span>Editar nombre</span>';
        editButton.addEventListener('click', () => window.editStudentName(studentId));
        studentActions.insertBefore(editButton, qrButton);
      });
    });
  }

  const previousRenderTeacherGroups = window.renderTeacherGroups;
  const renderWithStudentAdmin = function(...args) {
    const result = typeof previousRenderTeacherGroups === 'function'
      ? previousRenderTeacherGroups.apply(this, args)
      : undefined;
    setTimeout(enhanceTeacherStudentAdmin, 0);
    return result;
  };

  renderWithStudentAdmin.__tvStudentAdmin = true;
  window.renderTeacherGroups = renderWithStudentAdmin;
  try { renderTeacherGroups = renderWithStudentAdmin; } catch (_) {}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(enhanceTeacherStudentAdmin, 0), { once: true });
  } else {
    setTimeout(enhanceTeacherStudentAdmin, 0);
  }
})();