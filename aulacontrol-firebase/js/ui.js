export const $=(s,root=document)=>root.querySelector(s);
export const $$=(s,root=document)=>[...root.querySelectorAll(s)];
export function esc(v){return String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));}
export function toast(message,type=""){const el=document.createElement("div");el.className=`toast ${type}`;el.textContent=message;$("#toast-root").append(el);setTimeout(()=>el.remove(),3200);}
export function money(n){return new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(Number(n||0));}
export function dateText(v){if(!v)return "—";const d=v?.toDate?v.toDate():new Date(`${v}T12:00:00`);return Number.isNaN(d.getTime())?String(v):new Intl.DateTimeFormat("es-MX",{dateStyle:"medium"}).format(d);}
export function statusBadge(text,kind=""){return `<span class="badge ${kind}">${esc(text)}</span>`;}
export function empty(text="Sin registros"){return `<div class="empty">${esc(text)}</div>`;}
export function table(columns,rows){
  if(!rows.length)return empty();
  return `<div class="table-wrap"><table><thead><tr>${columns.map(c=>`<th>${esc(c.label)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${columns.map(c=>`<td>${c.render?c.render(r):esc(r[c.key])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
export function fieldHtml(f,value=""){
  const cls=f.wide?"wide":"";const req=f.required?"required":"";const val=value??"";
  if(f.type==="select") return `<label class="${cls}">${esc(f.label)}<select name="${esc(f.name)}" ${req}>${(f.options||[]).map(o=>{const ov=typeof o==="object"?o.value:o;const ol=typeof o==="object"?o.label:o;return `<option value="${esc(ov)}" ${String(ov)===String(val)?"selected":""}>${esc(ol)}</option>`}).join("")}</select></label>`;
  if(f.type==="textarea") return `<label class="${cls}">${esc(f.label)}<textarea name="${esc(f.name)}" ${req}>${esc(val)}</textarea></label>`;
  return `<label class="${cls}">${esc(f.label)}<input name="${esc(f.name)}" type="${esc(f.type||"text")}" value="${esc(val)}" ${req} ${f.min!==undefined?`min="${f.min}"`:""} ${f.max!==undefined?`max="${f.max}"`:""}></label>`;
}
export function openForm({title,help="",fields,record={},onSave}){
  const d=$("#form-dialog");$("#dialog-title").textContent=title;$("#dialog-help").textContent=help;
  $("#form-fields").innerHTML=fields.map(f=>fieldHtml(f,record[f.name])).join("");
  const form=$("#entity-form");form.onsubmit=async ev=>{ev.preventDefault();const data=Object.fromEntries(new FormData(form).entries());fields.forEach(f=>{if(f.type==="number"&&data[f.name]!=="")data[f.name]=Number(data[f.name]);if(f.type==="checkbox")data[f.name]=Boolean(data[f.name]);});await onSave(data);d.close();};
  d.showModal();
}
export async function confirmAction(title,message){const d=$("#confirm-dialog");$("#confirm-title").textContent=title;$("#confirm-message").textContent=message;d.showModal();return new Promise(resolve=>{d.addEventListener("close",()=>resolve(d.returnValue==="confirm"),{once:true});});}
export function bindDialogClose(){document.addEventListener("click",e=>{if(e.target.matches("[data-close-dialog]"))e.target.closest("dialog")?.close();});}
