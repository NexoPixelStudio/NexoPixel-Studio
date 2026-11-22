const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const whatsappNumber='34623739107';
const plans={
esencial:{name:'Esencial',price:'99 €'},
crecimiento:{name:'Crecimiento',price:'149 €'},
premium:{name:'Premium',price:'199 €'}
};
document.querySelectorAll('.plan-link').forEach(link=>{
 const key=link.dataset.plan;const p=plans[key];
 const msg=`Hola, me interesa el plan ${p.name} de ${p.price}. ¿Podéis darme más información?`;
 link.href=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
 link.target='_blank';link.rel='noopener noreferrer';
});
document.getElementById('year').textContent=new Date().getFullYear();
