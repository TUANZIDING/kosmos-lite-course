const FLOW=[
{y:[0,1484],t:'全景：AI 有界执行，作者把关键决定',d:'左边是 Codex，负责跑；右边是作者，负责放行。中间这条线，从课题一路走到台架 SOP。'},
{y:[100,345],t:'① 课题配置 topic.json',d:'研究问题、模型、干预、读出、预算，先写成一份配置文件。Codex 最多问 3 个问题，其余给默认值并标“待确认”。'},
{y:[265,545],t:'G1 课题门：作者确认',d:'作者批准时记录 topic.json 的 SHA-256。配置改动一个字节，批准就自动失效；Codex 不能自己批准。'},
{y:[540,880],t:'② 文献 · 数据 · 分析，围绕世界模型循环',d:'PubMed 文献、GEO 公开数据、本地分析，结论都汇总到世界模型。每条证据分“事实 / 关联 / 推测”，引用要核验存在与撤稿。'},
{y:[860,1005],t:'收尾门 → ③ 假设表',d:'复盘、校验、引用 PASS 才能进入下一轮。假设表里，“支持”和“削弱”的证据一样要写。'},
{y:[1000,1180],t:'④ 分阶段实验设计',d:'体外快筛 → 原代复证 → 体内验证。每一关都提前写好判定标准和止损线。'},
{y:[1175,1330],t:'⑤ 台架 SOP + 设施核对清单',d:'国际惯例给默认值并注明出处；依赖设施的参数标“待核实”，由作者到平台核对。'},
{y:[1320,1484],t:'逐项授权',d:'花钱、上传、推送代码、发邮件，每一项都要作者单独同意。看到 STOP，就是 AI 必须停下来等人的地方。'}];
const FW=1100,FH=900,IW=704,IH=1484,DUR=5200;let fi=0,fplay=true,ftimer=null;
document.documentElement.style.setProperty('--dur',DUR+'ms');
document.getElementById('flowSteps').innerHTML=FLOW.map((s,i)=>`<button data-i="${i}"><i>${i+1}</i>${s.t}<span class="pg"></span></button>`).join('');
document.querySelectorAll('#flowSteps button').forEach(b=>b.onclick=()=>{flowGo(+b.dataset.i)});
function flowPos(i){const [y0,y1]=FLOW[i].y;const s=Math.min(FH/(y1-y0+30),FW/IW*0.98);const tx=(FW-IW*s)/2;let ty=FH/2-s*(y0+y1)/2;ty=Math.min(0,Math.max(FH-IH*s,ty));if(IH*s<FH)ty=(FH-IH*s)/2;
document.getElementById('flowImg').style.transform=`translate(${tx}px,${ty}px) scale(${s})`}
function flowGo(i){fi=(i+FLOW.length)%FLOW.length;flowPos(fi);const s=FLOW[fi];
document.getElementById('flowK').textContent='流程动画 · '+(fi+1)+' / '+FLOW.length;document.getElementById('flowT').textContent=s.t;document.getElementById('flowD').textContent=s.d;
document.querySelectorAll('#flowSteps button').forEach((b,j)=>{b.classList.remove('on');if(j===fi){void b.offsetWidth;b.classList.add('on')}});
clearTimeout(ftimer);if(fplay)ftimer=setTimeout(()=>{if(fi<FLOW.length-1)flowGo(fi+1);else flowSetPlay(false)},DUR)}
function flowSetPlay(p){fplay=p;const f=document.getElementById('flow');f.classList.toggle('paused',!p);
document.getElementById('flowPP').innerHTML=p?'<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>暂停':'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>播放'}
function flowToggle(){if(!fplay&&fi===FLOW.length-1){flowSetPlay(true);flowGo(0);return}flowSetPlay(!fplay);clearTimeout(ftimer);if(fplay)flowGo(fi)}
function flowStep(d){flowGo(fi+d)}
function flowOpen(){const fim=document.getElementById('flowImg');if(!fim.getAttribute('src'))fim.src=document.querySelector('.flowthumb img').src;document.getElementById('flow').classList.add('show');flowSetPlay(true);flowGo(0)}
function flowClose(){document.getElementById('flow').classList.remove('show');clearTimeout(ftimer)}
addEventListener('keydown',e=>{if(!document.getElementById('flow').classList.contains('show'))return;e.stopImmediatePropagation();e.preventDefault();
if(e.key==='Escape')flowClose();else if(['ArrowRight','PageDown'].includes(e.key))flowStep(1);else if(['ArrowLeft','PageUp'].includes(e.key))flowStep(-1);else if(e.key===' ')flowToggle()},true);
