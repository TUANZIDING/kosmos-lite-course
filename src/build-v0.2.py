import base64
p=open('pages-v0.2.html',encoding='utf-8').read()
b64=lambda f:'data:image/jpeg;base64,'+base64.b64encode(open(f,'rb').read()).decode()
p=p.replace('IMG_HERO',b64('hero-ring-v0.1.jpg')).replace('IMG_INFO',b64('kosmos-lite-overview-infographic-v1.1.jpg'))
css=open('base.css').read()+open('flow-v0.2.css').read()+'''
pre.cmd{margin-top:10px;padding:18px 22px;border-radius:14px;background:#1C2333;color:#E6EDF7;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:18px;line-height:1.6;white-space:pre;overflow:hidden}
code{font-family:"SF Mono",Menlo,Consolas,monospace;font-size:.88em;background:rgba(27,95,168,.08);color:var(--blue);padding:1px 6px;border-radius:5px}
pre.cmd code{background:none;color:inherit}
#p1 .eye img{transform:scale(1.0);animation:zoom2 14s ease-in-out infinite alternate}
@keyframes zoom2{to{transform:scale(1.12)}}
'''
js=open('base.js').read()+open('flow-v0.2.js').read()
flow=open('flow-v0.2.html').read().replace('IMG_INFO',b64('kosmos-lite-overview-infographic-v1.1.jpg'))
n=p.count('<section class="page"')
html=f'''<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>让 AI 当你的科研合伙人：Kosmos-lite v1.3.0 实战课</title><style>{css}</style></head><body>
<div id="viewport"><div id="stage">
<div id="brand"><span class="dot"></span><b>Kosmos-lite</b><span>· AI 科研工作流实战课</span></div>
<div id="magbadge"><span class="obj">封面</span><span class="idx">1 / {n}</span></div>
<div id="pages">{p}</div>
{flow}<div id="toc" class="card"><h4>目录</h4><div id="tocList"></div></div>
<div id="bar"><button class="ib" id="bToc" title="目录"><svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/></svg></button>
<button class="ib" id="bPrev" title="上一页 ←"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg></button>
<button class="ib" id="bNext" title="下一页 →"><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></button>
<div id="chapName"></div><div id="prog"><div class="tr"></div><div class="fill"></div><div class="dots"></div></div>
<button class="ib" id="bPrint" title="打印 / 导出 PDF"><svg viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2M8 14h8v7H8z"/></svg></button></div>
</div></div><script>{js}</script></body></html>'''
open('../index.html','w',encoding='utf-8').write(html)
print(n,len(html))
