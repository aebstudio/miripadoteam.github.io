
(()=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
if(reduce.matches||!('IntersectionObserver' in window))return;
const targets=[...document.querySelectorAll('main > section:not(.hero) > .wrap, footer > .wrap')];
const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.remove('is-pending');observer.unobserve(e.target)}},{threshold:0,rootMargin:'0px 0px -35px 0px'});
for(const el of targets){if(el.getBoundingClientRect().top<innerHeight-35)continue;el.classList.add('section-arrival','is-pending');observer.observe(el)}
const reveal=el=>{const box=el?.closest('.is-pending');if(box){box.classList.remove('is-pending');observer.unobserve(box)}};
document.addEventListener('focusin',e=>reveal(e.target));
const hash=()=>{let el;try{el=document.getElementById(decodeURIComponent(location.hash.slice(1)))}catch{return}if(el){reveal(el);el.querySelectorAll('.is-pending').forEach(reveal)}};
addEventListener('hashchange',hash);hash();
reduce.addEventListener('change',()=>{if(reduce.matches){observer.disconnect();targets.forEach(el=>el.classList.remove('is-pending'))}});
})();
