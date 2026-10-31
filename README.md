<h1 align="center">AI 科研工作流实战课 · Kosmos-lite Research Loop v1.3.0</h1>

<p align="center"><strong>让 AI 当你的科研合伙人，但别让它替你下结论。</strong><br>
A hands-on lecture for researchers: how a gated AI workflow in Codex turns six common research pain points into guardrails.</p>

<p align="center"><a href="https://aiai-academy.com/lessons/kosmos-lite-coursev1.0.html"><strong>在线打开课件 · Open the slides</strong></a></p>

## 这是什么
一套 18 页、1920×1080 的中文课件，用于线下 AI 课。主线是科研人的 6 个痛点，每个痛点对应 Kosmos-lite Research Loop **v1.3.0** 的一道流程护栏：

| 痛点 | 护栏 |
|---|---|
| 研究方向靠拍脑袋 | 先用公开数据做低成本试错 |
| AI 编造引用 | 事实 / 关联 / 推测分级，引用可追溯 |
| 统计看着对、实际上错 | 成熟统计库复核，警惕伪重复 |
| 结果出来后再改假设 | 湿实验槽位预设判定标准，数据锁定后才写结果 |
| 阴性结果停不下来 | 预先写好止损线与阳性 / 阴性对照 |
| 说不清证据从哪来 | 声明表、稿件阶段、证据包与逐文件哈希 |

核心一句：**AI 负责跑，人负责放行。**

## 怎么用
- 直接用浏览器打开 `index.html`，图片已内嵌，离线可用。
- `←` `→` 或空格翻页，左下角目录跳页，右下角可打印成 PDF。
- 第 5 页流程图点击“放大播放”，分 8 步自动讲解；`Esc` 退出。

## 结构
```
index.html          课件成品（单文件）
src/pages-v0.3.html 18 页内容
src/base.css        版式与配色
src/base.js         翻页、目录、进度条
src/flow-v0.2.*     第 5 页流程动画
src/big-v0.3.css    投屏放大字号层
src/build-v0.3.py   重新生成 index.html：cd src && python3 build-v0.3.py
```

## 说明
- 课件中的演示课题（地塞米松诱导肌萎缩）为工具自带示例，不涉及任何真实课题或数据。
- 案例均已匿名化处理，不对应具体基因、数据集或数值。
- Kosmos-lite 借鉴“结构化世界模型”思路，与 Edison Scientific 的 Kosmos 无隶属关系。

讲者：丁海祥（Haixiang Ding），急诊创伤外科医生，苏州大学临床医学博士在读。
