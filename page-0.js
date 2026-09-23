'use strict';
const nav=document.querySelector('#navigation'),menu=document.querySelector('.menu-toggle');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
document.addEventListener('pointerdown',e=>{if(!e.target.closest('.site-header'))closeMenu()});
const sections=[...document.querySelectorAll('main section[id]')];
// The observer is retained so each section can participate in active navigation.
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting)nav.querySelectorAll('a').forEach(a=>a.hash==='#'+e.target.id?a.setAttribute('aria-current','location'):a.removeAttribute('aria-current'))},{rootMargin:'-15% 0px -65% 0px'});sections.forEach(s=>observer.observe(s))}
let opener=null;
function openDialog(id,button){opener=button;closeMenu();document.getElementById(id).showModal()}
document.querySelectorAll('[data-contact]').forEach(b=>b.addEventListener('click',()=>openDialog('contact-dialog',b)));
document.querySelectorAll('[data-privacy]').forEach(b=>b.addEventListener('click',()=>openDialog('privacy-dialog',b)));
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.dialog-close').addEventListener('click',()=>d.close());d.addEventListener('close',()=>opener?.focus());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
function downloadText(name,text){const url=URL.createObjectURL(new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000)}
document.getElementById('inquiry-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);const text=['AI 광고소재 실무 교육 문의 준비','※ 이 파일은 문의 초안이며 신청 접수 내역이 아닙니다','',`기업·팀: ${String(f.get('team')).trim()||'미기재'}`,`참여 인원: ${f.get('people')}명`,`희망 시기: ${f.get('date')}`,`교육 목적: ${String(f.get('goal')).trim()}`,'','모집 안내가 확정된 후 운영 담당자에게 직접 전달해주세요'].join('\n');downloadText('교육_문의_준비.txt',text);document.getElementById('inquiry-status').textContent='문의 준비 파일의 다운로드를 요청했습니다 실제 신청은 아직 접수되지 않았습니다'});
