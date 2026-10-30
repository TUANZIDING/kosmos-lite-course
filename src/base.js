
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const pages=$$('.page');let cur=0;
function fit(){const s=Math.min(innerWidth/1920,innerHeight/1080);const st=$('#stage');st.style.transform=`scale(${s})`;st.style.left=(innerWidth-1920*s)/2+'px';st.style.top=(innerHeight-1080*s)/2+'px'}
addEventListener('resize',fit);fit();
const dots=$('#prog .dots');pages.forEach(()=>dots.appendChild(document.createElement('i')));
$('#tocList').innerHTML=pages.map((p,i)=>`<button data-i="${i}"><span class="n">${String(i).padStart(2,'0')}</span>${p.dataset.title}</button>`).join('');
$$('#tocList button').forEach(b=>b.onclick=()=>{go(+b.dataset.i);$('#toc').classList.remove('show')});
function go(i){i=Math.max(0,Math.min(pages.length-1,i));pages[cur].classList.remove('cur');cur=i;const p=pages[i];void p.offsetWidth;p.classList.add('cur');
$('#chapName').textContent=String(i).padStart(2,'0')+' · '+p.dataset.title;$('#magbadge .obj').textContent=p.dataset.mag;$('#magbadge .idx').textContent=(i+1)+' / '+pages.length;
$('#prog .fill').style.width=(i/(pages.length-1)*100)+'%';$$('#prog .dots i').forEach((d,j)=>d.classList.toggle('done',j<=i));$$('#tocList button').forEach((b,j)=>b.classList.toggle('cur',j===i));history.replaceState(null,'','#'+(i+1))}
$('#bPrev').onclick=()=>go(cur-1);$('#bNext').onclick=()=>go(cur+1);$('#bToc').onclick=()=>$('#toc').classList.toggle('show');
$('#bPrint').onclick=()=>print();
$('#prog').onclick=e=>{const r=e.currentTarget.getBoundingClientRect();go(Math.round((e.clientX-r.left)/r.width*(pages.length-1)))};
addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(cur+1)}if(['ArrowLeft','PageUp'].includes(e.key))go(cur-1);if(e.key==='Escape')$('#toc').classList.remove('show')});
let tx=null;addEventListener('touchstart',e=>tx=e.touches[0].clientX);addEventListener('touchend',e=>{if(tx===null)return;const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)go(cur+(d<0?1:-1));tx=null});
$$('#scen button').forEach(b=>b.onclick=()=>{$$('#scen button').forEach(x=>x.classList.toggle('on',x===b));$$('.sw').forEach(s=>s.classList.toggle('on',s.dataset.s===b.dataset.s))});
go(Math.max(0,(parseInt(location.hash.slice(1))||1)-1));
