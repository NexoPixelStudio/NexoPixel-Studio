const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const whatsappNumber='34623739107';
const plans={
esencial:{name:'Esencial',price:'99 €',includes:['1 página web con hasta 4 bloques','Diseño adaptado a móvil y ordenador','Botón de WhatsApp o contacto','Enlaces a hasta 2 redes sociales','1 ronda de ajustes'],compare:'La opción más sencilla y económica. Crecimiento añade secciones diferenciadas, galería de imágenes y más ajustes. Premium amplía todavía más el contenido y la revisión.'},
crecimiento:{name:'Crecimiento',price:'149 €',includes:['Hasta 4 secciones diferenciadas','Diseño visual personalizado','Galería de hasta 8 imágenes','Servicios o catálogo informativo','WhatsApp y hasta 3 redes sociales','Formulario sencillo sujeto a herramienta disponible','2 rondas de ajustes'],compare:'Incluye más contenido y galería que Esencial. Premium añade hasta 6 secciones, más imágenes, más enlaces y una ronda adicional de ajustes.'},
premium:{name:'Premium',price:'199 €',includes:['Hasta 6 secciones diferenciadas','Diseño personalizado más detallado','Galería de hasta 15 imágenes','Servicios, equipo o preguntas frecuentes','WhatsApp y hasta 4 redes sociales','Formulario sencillo sujeto a herramienta disponible','3 rondas de ajustes','Revisión final en móvil y ordenador'],compare:'Es el plan más completo. Frente a Crecimiento, añade hasta 2 secciones, más imágenes, más enlaces sociales y una ronda adicional de ajustes.'}
};
document.querySelectorAll('.plan-link').forEach(link=>{
 const key=link.dataset.plan;const p=plans[key];
 const msg=`Hola, quiero información para contratar el plan ${p.name} de NexoPixel Studio (${p.price}.).\\n\\n¿Qué incluye?\\n${p.includes.map(x=>'• '+x).join('\\n')}\\n\\nDiferencias con los otros planes: ${p.compare}\\n\\nAntes de confirmar, me gustaría conocer el plazo, el contenido que debo facilitar y las condiciones finales. Entiendo que este mensaje no realiza ningún pago ni confirma una contratación.`;
 link.href=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
 link.target='_blank';link.rel='noopener noreferrer';
});
document.getElementById('year').textContent=new Date().getFullYear();
