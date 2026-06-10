# 個人作品集網站 — 周荣豪

个人画师作品集网站，简约现代风格。

在线访问：**[https://chun-jiu.github.io](https://chun-jiu.github.io)**

## 特点

- **极简设计** — 大量留白，让作品成为视觉焦点
- **响应式布局** — 适配桌面、平板、手机
- **画廊过滤** — 按分类筛选（插画 / 制品 / 动图 / 视频）
- **图片灯箱** — 点击放大查看，支持键盘和触摸滑动
- **滚动动画** — 元素进入视口时优雅淡入
- **零依赖** — 纯 HTML/CSS/JS，双击即用

## 文件结构

```
├── index.html          # 首页（Hero + 作品画廊）
├── about.html          # 关于页（简介 + 联系 + 参展经历）
├── css/
│   └── style.css       # 全局样式
├── js/
│   └── main.js         # 交互逻辑
├── images/
│   ├── avatar.jpg      # 个人头像
│   ├── illustration/   # 插画作品（.jpg / .png）
│   ├── product/        # 制品图片
│   ├── gif/            # 动图（.gif）
│   ├── video/          # 视频文件（.mp4）和封面图
│   └── social/         # 社交平台图标
└── README.md
```

## 使用方法

### 1. 放入作品图片

将你的作品按分类放入 `images/` 对应子目录：

```
images/
├── illustration/   ← 插画放这里（如 01.jpg, 02.jpg ...）
├── product/        ← 制品图放这里
├── gif/            ← 动图放这里
└── video/          ← 视频 + 封面图放这里
```

### 2. 更新画廊内容

编辑 `index.html` 中的画廊区域，每个作品的结构如下：

```html
<div class="gallery-item fade-in" data-category="illustration">
  <img src="images/illustration/你的文件名.jpg" alt="作品名" loading="lazy">
  <div class="item-overlay">
    <div class="item-title">作品名称</div>
    <div class="item-category">插画</div>
  </div>
</div>
```

- `data-category` 可选值：`illustration` / `product` / `gif` / `video`
- 视频作品需要额外添加 `data-video="images/video/你的视频.mp4"` 属性

## GitHub Pages 部署（chun-jiu.github.io）

如果尚未创建仓库：

1. 在 GitHub 创建名为 **chun-jiu.github.io** 的仓库
2. 将 `portfolio-site/` 内的 **所有文件** 推送到该仓库的 `main` 分支：
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/chun-jiu/chun-jiu.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. 前往仓库 Settings → Pages，确保 Source 设置为 `Deploy from a branch`，Branch 为 `main`、目录为 `/ (root)`
4. 等待 1-2 分钟，网站将在 `https://chun-jiu.github.io/` 上线

如果已经存在仓库，直接将本目录所有文件替换到仓库根目录即可。

## 自定义域名（可选）

1. 在 Settings → Pages → Custom domain 填入你的域名
2. 在你的 DNS 服务商处添加 CNAME 记录指向 `chun-jiu.github.io`
3. 勾选 Enforce HTTPS

## 浏览器支持

- Chrome / Edge / Firefox / Safari 最新版本
- 需要支持 CSS Grid、Flexbox、Intersection Observer（所有现代浏览器均支持）
