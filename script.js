// ========================================
// 配置和全局变量
// ========================================

let profileData = null;

// ========================================
// 初始化函数
// ========================================

/**
 * 页面加载完成后执行
 */
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 加载 profile 数据
        await loadProfile();
        
        // 渲染页面
        renderPage();
        
        // 应用主题
        applyTheme();
        
        // 初始化事件监听
        initEventListeners();
        
        console.log('页面初始化完成');
    } catch (error) {
        console.error('页面初始化失败:', error);
        showError('加载页面失败，请刷新重试');
    }
});

// ========================================
// 数据加载函数
// ========================================

/**
 * 从 profile.json 加载数据
 */
async function loadProfile() {
    try {
        const response = await fetch('profile.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        profileData = await response.json();
        console.log('Profile 数据加载成功');
    } catch (error) {
        console.error('加载 profile.json 失败:', error);
        throw error;
    }
}

// ========================================
// 渲染函数
// ========================================

/**
 * 渲染整个页面
 */
function renderPage() {
    const app = document.getElementById('app');
    
    // 创建页面结构
    app.innerHTML = `
        <div class="container">
            <header id="header"></header>
            <main id="main"></main>
            <footer id="footer"></footer>
        </div>
    `;
    
    // 渲染各个部分
    renderHeader();
    renderMain();
    renderFooter();
}

/**
 * 渲染页面头部
 */
function renderHeader() {
    const header = document.getElementById('header');
    const basic = profileData.basic;
    
    header.innerHTML = `
        <div class="header-content">
            <h1>${basic.name}</h1>
            <p class="subtitle">${basic.title}</p>
            <p class="bio">${basic.bio}</p>
        </div>
    `;
}

/**
 * 渲染主要内容
 */
function renderMain() {
    const main = document.getElementById('main');
    
    main.innerHTML = `
        <section id="education" class="section"></section>
        <section id="publications" class="section"></section>
        <section id="projects" class="section"></section>
        <section id="experience" class="section"></section>
        <section id="skills" class="section"></section>
        <section id="awards" class="section"></section>
    `;
    
    // 渲染各个部分（根据需要取消注释）
    // renderEducation();
    // renderPublications();
    // renderProjects();
    // renderExperience();
    // renderSkills();
    // renderAwards();
}

/**
 * 渲染页脚
 */
function renderFooter() {
    const footer = document.getElementById('footer');
    const social = profileData.social;
    
    footer.innerHTML = `
        <div class="footer-content">
            <div class="social-links">
                ${social.github ? `<a href="${social.github}" target="_blank">GitHub</a>` : ''}
                ${social.scholar ? `<a href="${social.scholar}" target="_blank">Google Scholar</a>` : ''}
                ${social.linkedin ? `<a href="${social.linkedin}" target="_blank">LinkedIn</a>` : ''}
            </div>
            <p class="contact">
                ${profileData.basic.email} | ${profileData.basic.location}
            </p>
        </div>
    `;
}

// ========================================
// 具体内容渲染函数（示例）
// ========================================

/**
 * 渲染教育背景
 */
function renderEducation() {
    const section = document.getElementById('education');
    const education = profileData.education;
    
    let html = '<h2>教育背景</h2><div class="grid">';
    
    education.forEach(item => {
        html += `
            <div class="card">
                <h3>${item.degree} - ${item.major}</h3>
                <p><strong>${item.school}</strong></p>
                <p>${item.location} | ${item.period}</p>
                <p>${item.description}</p>
            </div>
        `;
    });
    
    html += '</div>';
    section.innerHTML = html;
}

/**
 * 渲染论文发表
 */
function renderPublications() {
    const section = document.getElementById('publications');
    const publications = profileData.publications;
    
    let html = '<h2>论文发表</h2>';
    
    publications.forEach((pub, index) => {
        html += `
            <div class="card publication-item">
                <h3>[${index + 1}] ${pub.title}</h3>
                <p class="authors">${pub.authors}</p>
                <p><em>${pub.venue}</em>, ${pub.year}</p>
                ${pub.awards ? `<p class="award">🏆 ${pub.awards}</p>` : ''}
                <div class="links">
                    ${pub.links.paper ? `<a href="${pub.links.paper}" target="_blank">Paper</a>` : ''}
                    ${pub.links.code ? `<a href="${pub.links.code}" target="_blank">Code</a>` : ''}
                    ${pub.links.slides ? `<a href="${pub.links.slides}" target="_blank">Slides</a>` : ''}
                </div>
            </div>
        `;
    });
    
    section.innerHTML = html;
}

/**
 * 渲染项目经历
 */
function renderProjects() {
    const section = document.getElementById('projects');
    const projects = profileData.projects;
    
    let html = '<h2>项目经历</h2><div class="grid grid-2">';
    
    projects.forEach(project => {
        html += `
            <div class="card">
                <h3>${project.name}</h3>
                <p class="period">${project.period}</p>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${project.highlights ? `
                    <ul>
                        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                ` : ''}
                <div class="links">
                    ${project.links.github ? `<a href="${project.links.github}" target="_blank">GitHub</a>` : ''}
                    ${project.links.demo ? `<a href="${project.links.demo}" target="_blank">Demo</a>` : ''}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    section.innerHTML = html;
}

/**
 * 渲染技能
 */
function renderSkills() {
    const section = document.getElementById('skills');
    const skills = profileData.skills;
    
    let html = '<h2>技能</h2><div class="grid grid-2">';
    
    Object.keys(skills).forEach(category => {
        const items = skills[category];
        const categoryName = {
            'programming': '编程语言',
            'frameworks': '框架与库',
            'tools': '工具',
            'languages': '语言能力'
        }[category] || category;
        
        html += `
            <div class="card">
                <h3>${categoryName}</h3>
                <div class="tags">
                    ${items.map(item => `<span class="tag">${item}</span>`).join('')}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    section.innerHTML = html;
}

// ========================================
// 主题应用函数
// ========================================

/**
 * 从 profile.json 应用主题设置
 */
function applyTheme() {
    if (!profileData.theme) return;
    
    const theme = profileData.theme;
    const root = document.documentElement;
    
    if (theme.primaryColor) root.style.setProperty('--primary-color', theme.primaryColor);
    if (theme.accentColor) root.style.setProperty('--accent-color', theme.accentColor);
    if (theme.backgroundColor) root.style.setProperty('--background-color', theme.backgroundColor);
    if (theme.textColor) root.style.setProperty('--text-color', theme.textColor);
    if (theme.font) root.style.setProperty('--font-family', theme.font);
}

// ========================================
// 事件监听和交互
// ========================================

/**
 * 初始化事件监听器
 */
function initEventListeners() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // 可以添加更多交互功能，例如：
    // - 主题切换
    // - 筛选功能
    // - 搜索功能
    // - 动画效果
}

// ========================================
// 工具函数
// ========================================

/**
 * 显示错误信息
 */
function showError(message) {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container">
            <div class="error-message">
                <h2>⚠️ 错误</h2>
                <p>${message}</p>
            </div>
        </div>
    `;
}

/**
 * 格式化日期
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * 防抖函数
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// 导出（如果使用模块）
// ========================================

// export { loadProfile, renderPage, applyTheme };
