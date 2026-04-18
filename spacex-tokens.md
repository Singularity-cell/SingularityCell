# SpaceX 设计 Token（基于 awesome-design-md / spacex.com）

## 设计理念
- **零阴影**：不依赖阴影创造深度，使用满视窗摄影图像和半透明覆盖层
- **单一按钮变体**：仅使用“幽灵按钮”，设计干扰最小化
- **非传统布局**：内容直接置于背景图像之上，不使用传统“卡片”容器

## CSS 变量建议
```css
:root {
  /* 颜色 Color Tokens */
  --color-space-black: #000000;           /* 页面背景 */
  --color-spectral-white: #f0f0fa;        /* 文本、标题 */
  --color-ghost-surface: rgba(240, 240, 250, 0.1);  /* 按钮背景 */
  --color-dark-overlay: rgba(0, 0, 0, 0.5);         /* 图片覆盖层 */

  /* 字体 Font Tokens */
  --font-family-display: "D-DIN-Bold", sans-serif;
  --font-family-base: "D-DIN", sans-serif;

  /* 字号 & 行高 */
  --font-size-display: 48px;
  --line-height-display: 1.00;
  --font-size-body: 16px;
  --line-height-body: 1.70;
  --font-size-nav: 13px;
  --line-height-nav: 0.94;
  --font-size-caption: 12px;
  --line-height-caption: 1.00;
  --font-size-micro: 10px;
  --line-height-micro: 0.94;

  /* 字距 Letter Spacing */
  --letter-spacing-display: 0.96px;
  --letter-spacing-nav: 1.17px;
  --letter-spacing-caption: 1px;
  --letter-spacing-micro: 1px;

  /* 间距 Spacing Scale */
  --space-3: 3px;
  --space-5: 5px;
  --space-12: 12px;
  --space-18: 18px;
  --space-24: 24px;
  --space-30: 30px;

  /* 圆角 Border Radius */
  --radius-small: 4px;   /* 通用小圆角 */
  --radius-large: 32px;  /* 按钮专用大圆角 */
}
