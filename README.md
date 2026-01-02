# 个人主页项目教程

## 📋 目录
- [项目简介](#项目简介)
- [快速开始](#快速开始)
- [文件结构](#文件结构)
- [详细使用说明](#详细使用说明)
- [自定义和调整](#自定义和调整)
- [部署指南](#部署指南)
- [常见问题](#常见问题)
- [进阶功能](#进阶功能)

---

## 🎯 项目简介

这是一个简洁、现代的个人主页模板，特别适合学术研究人员、博士生、工程师等展示个人信息、研究成果和项目经历。

### 主要特点
- ✅ 纯静态页面（HTML/CSS/JavaScript）
- ✅ 数据与展示分离（JSON配置文件）
- ✅ 响应式设计（支持手机、平板、电脑）
- ✅ 易于定制和部署
- ✅ 无需后端服务器

---

## 🚀 快速开始

### 方法1：本地预览（最简单）

1. **双击打开 `index.html`**
   - 直接用浏览器打开即可预览
   - 注意：某些浏览器可能限制本地文件加载 JSON，建议使用本地服务器

2. **使用 VS Code Live Server（推荐）**
   ```bash
   # 在 VS Code 中安装 Live Server 扩展
   # 右键点击 index.html -> "Open with Live Server"
   ```

3. **使用 Python 启动本地服务器**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   然后在浏览器访问 `http://localhost:8000`

### 方法2：编辑你的信息

1. **编辑 `profile.json`** - 这是最重要的一步！
   ```json
   {
     "basic": {
       "name": "你的名字",
       "title": "你的职位/身份",
       "email": "你的邮箱"
     }
   }
   ```

2. **保存并刷新浏览器** - 立即看到效果

---

## 📁 文件结构

```
SevenDing/
│
├── index.html          # 主页面文件（骨架结构）
├── style.css           # 样式文件（外观设计）
├── script.js           # 脚本文件（功能逻辑）
├── profile.json        # 配置文件（你的个人信息）★最重要★
├── README.md           # 本教程文档
│
└── assets/             # 资源文件夹（可选，自行创建）
    ├── images/         # 图片（头像、项目图片等）
    ├── documents/      # 文档（简历PDF、论文PDF等）
    └── favicon.ico     # 网站图标
```

---

## 📖 详细使用说明

### 1. 编辑个人信息 (`profile.json`)

这是核心配置文件，包含所有需要展示的信息：

#### 1.1 基本信息
```json
"basic": {
    "name": "你的名字",
    "title": "研究员 / 博士生",
    "avatar": "assets/images/avatar.jpg",  // 头像路径
    "email": "your.email@example.com",
    "phone": "+86 123-4567-8901",
    "location": "中国，北京",
    "bio": "一段简短的自我介绍，2-3句话即可。"
}
```

#### 1.2 社交媒体链接
```json
"social": {
    "github": "https://github.com/yourusername",
    "scholar": "https://scholar.google.com/citations?user=YOUR_ID",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "twitter": "https://twitter.com/yourusername",
    "researchgate": "https://www.researchgate.net/profile/Your_Name"
}
```
💡 **提示**：不需要的社交链接可以删除或留空。

#### 1.3 教育背景
```json
"education": [
    {
        "degree": "博士",
        "major": "计算机科学",
        "school": "某某大学",
        "location": "北京，中国",
        "period": "2020 - 至今",
        "description": "研究方向：强化学习、深度学习"
    }
]
```
📝 **说明**：可以添加多个教育经历，按时间倒序排列。

#### 1.4 论文发表
```json
"publications": [
    {
        "title": "论文标题",
        "authors": "作者1, 作者2, 作者3",
        "venue": "ICML 2024",
        "year": "2024",
        "type": "conference",  // 或 "journal"
        "links": {
            "paper": "https://arxiv.org/abs/xxx",
            "code": "https://github.com/xxx",
            "slides": "slides.pdf"
        },
        "awards": "Best Paper Award"  // 可选
    }
]
```

#### 1.5 项目经历
```json
"projects": [
    {
        "name": "项目名称",
        "description": "项目简介",
        "period": "2024.01 - 2024.06",
        "tags": ["Python", "PyTorch", "强化学习"],
        "links": {
            "github": "https://github.com/xxx/project",
            "demo": "https://demo.xxx.com"
        },
        "highlights": [
            "亮点1：实现了某某功能",
            "亮点2：性能提升了 20%"
        ]
    }
]
```

#### 1.6 技能清单
```json
"skills": {
    "programming": ["Python", "C++", "JavaScript"],
    "frameworks": ["PyTorch", "TensorFlow", "React"],
    "tools": ["Git", "Docker", "Linux"],
    "languages": ["中文（母语）", "英语（流利）"]
}
```

#### 1.7 主题配置
```json
"theme": {
    "primaryColor": "#2c3e50",      // 主色调
    "accentColor": "#3498db",       // 强调色
    "backgroundColor": "#ffffff",    // 背景色
    "textColor": "#333333",         // 文字颜色
    "font": "system-ui, sans-serif" // 字体
}
```

---

### 2. 自定义页面内容 (`script.js`)

#### 2.1 启用/禁用各个部分

在 `renderMain()` 函数中，取消注释你想要显示的部分：

```javascript
function renderMain() {
    const main = document.getElementById('main');
    
    main.innerHTML = `
        <section id="education" class="section"></section>
        <section id="publications" class="section"></section>
        <section id="projects" class="section"></section>
        <section id="skills" class="section"></section>
    `;
    
    // 取消注释以启用相应部分
    renderEducation();      // ✅ 显示教育背景
    renderPublications();   // ✅ 显示论文发表
    renderProjects();       // ✅ 显示项目经历
    // renderExperience();  // ❌ 不显示工作经历
    renderSkills();         // ✅ 显示技能
    // renderAwards();      // ❌ 不显示奖项
}
```

#### 2.2 修改内容布局

每个渲染函数（如 `renderProjects()`）控制对应部分的 HTML 结构。你可以：

- **修改标题**：
  ```javascript
  html = '<h2>我的项目</h2>';  // 改成你喜欢的标题
  ```

- **调整布局**：
  ```javascript
  html += '<div class="grid grid-2">';  // grid-2 = 两列布局
  html += '<div class="grid grid-3">';  // grid-3 = 三列布局
  ```

- **添加新字段**：
  ```javascript
  html += `<p class="new-field">${project.newField}</p>`;
  ```

---

### 3. 调整样式和外观 (`style.css`)

#### 3.1 修改配色方案

在 `:root` 中修改 CSS 变量：

```css
:root {
    /* 主色调 - 用于标题、边框等 */
    --primary-color: #2c3e50;
    
    /* 强调色 - 用于链接、按钮等 */
    --accent-color: #3498db;
    
    /* 背景色 */
    --background-color: #ffffff;
    
    /* 文字颜色 */
    --text-color: #333333;
    --secondary-text: #666666;
}
```

💡 **推荐配色工具**：
- [Coolors.co](https://coolors.co/) - 生成配色方案
- [Adobe Color](https://color.adobe.com/) - 配色轮盘
- [Material Design Colors](https://materialui.co/colors) - Material 配色

#### 3.2 调整间距和布局

```css
:root {
    /* 修改间距大小 */
    --spacing-sm: 1rem;    /* 小间距 */
    --spacing-md: 2rem;    /* 中间距 */
    --spacing-lg: 3rem;    /* 大间距 */
    
    /* 修改圆角大小 */
    --border-radius: 8px;
}
```

#### 3.3 修改字体

```css
:root {
    /* 使用系统字体 */
    --font-family: system-ui, -apple-system, sans-serif;
    
    /* 或使用 Google Fonts */
    --font-family: 'Roboto', sans-serif;
    
    /* 标题字体 */
    --heading-font: 'Georgia', serif;
}
```

**引入 Google Fonts**：在 `index.html` 的 `<head>` 中添加：
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

#### 3.4 自定义卡片样式

修改 `.card` 类：
```css
.card {
    background: white;
    border-radius: 12px;           /* 圆角大小 */
    padding: 2rem;                 /* 内边距 */
    margin-bottom: 2rem;           /* 外边距 */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);  /* 阴影 */
    border-left: 4px solid var(--accent-color);  /* 左边框 */
}

.card:hover {
    transform: translateY(-8px);   /* 悬停抬升效果 */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

#### 3.5 响应式设计

已内置手机/平板适配，可根据需要调整：
```css
/* 平板 */
@media (max-width: 768px) {
    h1 { font-size: 1.8rem; }
}

/* 手机 */
@media (max-width: 480px) {
    .card { padding: 1rem; }
}
```

---

## 🎨 自定义和调整

### 添加头像图片

1. 创建 `assets/images/` 文件夹
2. 放入你的头像图片 `avatar.jpg`
3. 在 `profile.json` 中设置路径：
   ```json
   "avatar": "assets/images/avatar.jpg"
   ```
4. 在 `script.js` 中修改 `renderHeader()` 函数添加图片显示

### 添加导航栏

在 `renderHeader()` 中添加：
```javascript
header.innerHTML = `
    <nav class="navbar">
        <a href="#education">教育</a>
        <a href="#publications">论文</a>
        <a href="#projects">项目</a>
        <a href="#skills">技能</a>
    </nav>
    <div class="header-content">
        ...
    </div>
`;
```

在 `style.css` 中添加导航栏样式：
```css
.navbar {
    display: flex;
    gap: 2rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 2rem;
}

.navbar a {
    font-weight: 500;
    transition: color 0.3s;
}

.navbar a:hover {
    color: var(--accent-color);
}
```

### 添加深色模式

1. 在 `style.css` 中添加：
```css
[data-theme="dark"] {
    --primary-color: #ecf0f1;
    --accent-color: #3498db;
    --background-color: #1a1a1a;
    --text-color: #ecf0f1;
    --secondary-text: #bdc3c7;
}
```

2. 在 `script.js` 中添加切换功能：
```javascript
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// 页面加载时恢复主题
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
```

### 添加动画效果

使用 CSS 动画库（如 Animate.css）：

1. 在 `index.html` 中引入：
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
```

2. 在元素中添加动画类：
```javascript
html += `<div class="card animate__animated animate__fadeInUp">`;
```

---

## 🌐 部署指南

### 方法1：GitHub Pages（免费，推荐）

1. **创建 GitHub 仓库**
   - 登录 GitHub
   - 点击 "New repository"
   - 命名为 `your-username.github.io`（个人主页）或任意名称

2. **上传文件**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "main" 分支
   - 点击 Save

4. **访问你的网站**
   - `https://your-username.github.io/` （如果仓库名是 username.github.io）
   - `https://your-username.github.io/repo-name/` （其他仓库）

### 方法2：Netlify（免费，更简单）

1. 访问 [Netlify](https://www.netlify.com/)
2. 拖拽整个文件夹到网页
3. 自动部署完成，获得一个 URL

### 方法3：Vercel（免费）

1. 访问 [Vercel](https://vercel.com/)
2. 导入 GitHub 仓库或直接上传
3. 自动部署

### 方法4：自己的服务器

将所有文件上传到服务器的 web 目录（如 `/var/www/html/`）

---

## ❓ 常见问题

### Q1: 本地打开 HTML 文件显示空白？
**A**: 浏览器安全策略限制本地文件加载 JSON。解决方法：
- 使用 Live Server 或本地服务器
- 或者将 `profile.json` 的内容直接写入 `script.js`：
  ```javascript
  const profileData = { /* 直接粘贴 JSON 内容 */ };
  ```
  然后删除 `loadProfile()` 函数

### Q2: 如何修改字体大小？
**A**: 在 `style.css` 中修改：
```css
body {
    font-size: 16px;  /* 基础字体大小 */
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
```

### Q3: 如何添加更多社交媒体图标？
**A**: 
1. 使用 Font Awesome 图标库：
   ```html
   <!-- 在 index.html <head> 中添加 -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
   ```

2. 在 `renderFooter()` 中使用图标：
   ```javascript
   ${social.github ? `<a href="${social.github}"><i class="fab fa-github"></i></a>` : ''}
   ```

### Q4: 如何优化加载速度？
**A**:
- 压缩图片（使用 TinyPNG 或 Squoosh）
- 使用 WebP 格式图片
- 启用浏览器缓存
- 使用 CDN 加速

### Q5: 如何添加访问统计？
**A**: 使用 Google Analytics 或其他统计工具：
```html
<!-- 在 index.html </head> 前添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## 🚀 进阶功能

### 1. 添加搜索功能

```javascript
function searchContent(query) {
    const allText = document.body.innerText.toLowerCase();
    // 实现搜索逻辑
}
```

### 2. 添加筛选功能

```javascript
function filterPublications(type) {
    const pubs = profileData.publications.filter(p => p.type === type);
    // 重新渲染
}
```

### 3. 添加导出 PDF 功能

使用 `html2pdf.js` 库：
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script>
function exportPDF() {
    const element = document.getElementById('app');
    html2pdf().from(element).save('resume.pdf');
}
</script>
```

### 4. 添加多语言支持

创建多个 JSON 文件：`profile-zh.json`, `profile-en.json`

---

## 📝 开发建议

1. **保持简洁**：不要添加太多不必要的功能
2. **移动优先**：确保在手机上也好看
3. **定期更新**：及时更新你的信息
4. **版本控制**：使用 Git 管理代码
5. **备份数据**：定期备份 `profile.json`

---

## 📚 参考资源

- [MDN Web Docs](https://developer.mozilla.org/) - Web 开发文档
- [CSS Tricks](https://css-tricks.com/) - CSS 技巧和教程
- [W3Schools](https://www.w3schools.com/) - Web 技术学习
- [GitHub Pages 文档](https://docs.github.com/pages)

---

## 📧 支持

如有问题，欢迎：
- 查看 [常见问题](#常见问题) 部分
- 在 GitHub 上提 Issue
- 参考在线文档和教程

祝你创建出漂亮的个人主页！🎉
