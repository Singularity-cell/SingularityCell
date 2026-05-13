# MEMORY.md - 长期记忆

## 项目信息
- 项目名称：SingularityCell 个人网站
- 风格对标：SpaceX官网极简风格
- 技术栈：原生HTML/CSS/JS + Python后端
- 适配平台：Google Stitch
- 框架状态：已放弃Vue 3迁移，恢复原生开发
- **旧路径**：`G:\03Html\SingularityCell`（已迁移，不再使用）
- **当前工作路径**：`Z:\Web\SingularityCell`（双系统共享盘，2026-05-05迁移完成）
- Git远端：`git@github.com:Singularity-cell/SingularityCell.git`（main分支）

## 底层协作规则（最高优先级，不可违反）
1. **先诊断，不动手**：回复只告知"为什么出问题"和"怎么解决（思路方向）"，**绝不直接修改代码或文件**
2. **等指令才行动**：必须等用户明确说"改""动手""帮我改"等指示后，才可修改代码
3. 代码修改时用 `<!-- 修改开始 -->` / `<!-- 修改结束 -->` 标注核心改点
4. 所有讲解用大白话，不跳步，不默认用户掌握未提及的知识点

## 用户画像
- 昵称：小龙虾
- 水平：HTML/CSS/JS入门，掌握Flex/Grid布局、CSS变量、响应式、DOM操作、localStorage
- 薄弱环节：定位、响应式原理、JS交互底层逻辑
- 偏好：分步执行、自己操作文件、先思路后动手
- 当前学习：原生HTML/CSS/JS进阶，项目重构与维护

## 交互记录
- 用户曾询问LOGO点击弹跳效果，已实现为CSS :active伪类（缩小效果）
- 已完成原生开发到Vue 3的全面迁移，解决了文件臃肿和重复代码问题
- 用户决定放弃Vue 3框架，恢复原生开发，项目已清理所有Vue相关文件
- 已完成全量重构规划，输出5阶段分步方案，核心原则：零视觉变化、职责单一、原生技术栈
- 2026-05-05 已清理 animejs 依赖（删除 package.json 依赖、node_modules/animejs、test.html），项目目前零npm依赖

## 项目文件结构（原生开发，2026-05-05 更新）
- `index.html` - 主页面，包含波纹动画和fetch加载header
- `css/`
  - `reset.css` - CSS重置（*{margin:0;padding:0;box-sizing:border-box}）
  - `variables.css` - 设计变量（颜色/字体/间距/圆角定义在:root）
  - `layout.css` - 导航栏样式（固定顶栏、下划线动画）
  - `animations.css` - 波纹动画、中心圆点、渐变横线
- `js/modules/`
  - `header-loader.js` - fetch加载导航栏
  - `ripple-animation.js` - 周期性波纹生成动画
  - （根目录）`logo-interaction.js` - 空文件，待开发
- `pages/`
  - `header.html` - 导航栏组件
  - `matrix.html` - 简单占位页（CSS引用已废弃）
  - `pratice-matrix.html` - 矩阵运算工具（700+行内联样式）
- `res/`
  - `SINGULARITY.png` - LOGO图片
- `backup/css-original/` - 旧版CSS备份（重构前的style.css + animation.css）