# courseware-demo · 把变化画出来

符合 `courseware-skill` v1.0 的静态示范课程。以斜率和截距为主题，包含讲解、判断题、可拖动参数的 Canvas 实验和可下载的 CSV 数据。

## 内容

- 2 个章节：认识直线与参数、观察变化与验证。
- 2 个教学分组：理解概念、动手实验。
- 2 个已发布课时、1 个计划课时，已知教学时长 35 分钟。
- 实验课同时关联两个章节，只计为一个课时。
- `course.json` 包含课程名、封面、示例项目署名、标签、目录、课时和下载资源。

“Courseware 示例项目”是此规范演示的项目署名，不代表虚构的个人教师，也不对应平台账号。

## 本地预览

```bash
python3 -m http.server 8817 --bind 127.0.0.1
```

打开 `http://127.0.0.1:8817/web/index.html`。这是本地静态开发预览，不提供登录；对外发布应由课程平台统一鉴权。

课程运行不调用服务器 API，也不依赖在线字体或脚本。所有资源采用相对路径，可整体挂载到任意多层发布前缀。计划课时不提供空入口，不把练习状态冒充平台个人学习进度。

## 校验与接入

在 `courseware-dev` 工作区执行：

```bash
python3 scripts/env-run.py apps/courseware-api uv run courseware validate ../courseware-demo
python3 scripts/env-run.py apps/courseware-api uv run courseware import-local ../courseware-demo --username admin --list
```

正式 Git 接入时提交课程成品，并在门户管理页登记本仓库的 HTTPS 地址、分支和 slug `courseware-demo`。保持 `course.json` 与页面目录一致。

规则以 `courseware-skill` 的 Schema 与标准为准，不在此仓库复制规范。完整平台浏览器测试已覆盖本课程的版本路径、Canvas 交互、下载和鉴权；本地封面是代码绘制的坐标示意图。
