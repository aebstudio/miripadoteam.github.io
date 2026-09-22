(()=>{
const start=document.getElementById('breez-start'), close=document.getElementById('breez-close'), panel=document.getElementById('breez-workspace');
if(!start||!panel)return;
start.addEventListener('click',()=>{panel.hidden=false;start.setAttribute('aria-expanded','true');requestAnimationFrame(()=>{window.dispatchEvent(new Event('resize'));panel.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});const tab=panel.querySelector('[role="tab"]');if(tab)tab.focus({preventScroll:true})})});
close.addEventListener('click',()=>{panel.hidden=true;start.setAttribute('aria-expanded','false');start.focus({preventScroll:true});start.scrollIntoView({block:'center',behavior:'smooth'})});
})();