let profileData = null;
let currentPage = 'aboutme';
let isDarkTheme = false;

const pages = {
    'aboutme': 'About Me',
    'projects': 'Projects',
    'insights_and_ideas': 'Insights & Ideas',
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            isDarkTheme = true;
            document.body.classList.add('dark-theme');
        }
        
        await loadProfile();
        
        renderPage();
        
        console.log('Finished initializing page.');
    } catch (error) {
        console.error('Failed to initiate page: ', error);
        showError('Failed to load profile data. Please try again later.');
    }
});

/**
 * Load profile data from profile.json
 */
async function loadProfile() {
    try {
        // Add timestamp to prevent caching
        const response = await fetch(`profile.json?v=${new Date().getTime()}`, {
            cache: 'no-cache'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        profileData = await response.json();
        console.log('Successfully loaded profile data.');
    } catch (error) {
        console.error('Failed to load profile data due to: ', error);
        throw error;
    }
}

/**
 * Render the default page:
 * - Option bars
 * - Header
*/
function renderPage() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
    <nav id="nav" class="nav-bar"></nav>
        <div class="container">
            <div class="sidebar">
                <div id="sidebar"></div>
            </div>
            <div class="content-area">
                <main id="main"></main>
            </div>
        </div>
    `;
    
    renderNav();
    renderSidebar();
    renderContent();
}

function renderNav() {
    const nav = document.getElementById('nav');
    let navHTML = '';
    
    // Add theme toggle button
    const themeIcon = isDarkTheme ? '☀️' : '🌙';
    navHTML += `<button class="theme-toggle" id="themeToggle" title="Toggle theme">${themeIcon}</button>`;
    
    for (const [key, label] of Object.entries(pages)) {
        const activeClass = key === currentPage ? 'active' : '';
        navHTML += `<button class="nav-btn ${activeClass}" data-page="${key}">${label}</button>`;
    }
    
    // Add separator line after navigation buttons
    navHTML += `<hr class="nav-seperator">`;
    
    nav.innerHTML = navHTML;
    
    // Add theme toggle event listener
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    nav.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = btn.dataset.page;
            // Update active state
            nav.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Only re-render the right content area
            renderContent();
        });
    });
}

function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        console.error('Sidebar element not found!');
        return;
    };
    sidebar.innerHTML = `
        <div class="profile-section">
            <img src="${profileData.basic.avatar}?v=${new Date().getTime()}" alt="Avatar" class="avatar">
            <h3 class="profile-name">${profileData.basic.name_en}</h3>
            <p class="profile-name-zh">${profileData.basic.name_zh}</p>
            <p class="profile-title">${profileData.basic.title}</p>
            <p class="profile-introduction">${profileData.basic.introduction}</p>
            <p class="profile-location">📍 ${profileData.basic.location}</p>
            <p class="link">✉️ <a href="mailto:${profileData.basic.email}">Email</a></p>
            <div class="link"> 🗃️
                <a href="${profileData.social.github}" target="_blank">GitHub</a> | 
                <a href="${profileData.social.scholar}" target="_blank">Google Scholar</a>
            </div>
        </div>
    `;
}

function renderContent() {
    const main = document.getElementById('main');
    
    switch(currentPage) {
        case 'aboutme':
            renderAboutMe();
            break;
        case 'projects':
            renderProjects();
            break;
        case 'insights_and_ideas':
            main.innerHTML = '<h2>Insights & Ideas</h2><p>Insights & Ideas content goes here.</p>';
            break;
        default:
            main.innerHTML = '<p>Page not found</p>';
    }
}

// Functions for the content places.

function renderAboutMe() {
    const main = document.getElementById('main');

    fetch('assets/htmls/aboutme.html')
        .then(response => response.text())
        .then(html => {
            main.innerHTML = html;
        })
        .catch(error => {
            console.error('Failed to load aboutme.html:', error);
            main.innerHTML = '<p>Failed to load content.</p>';
        });
}

function renderProjects() {
    const main = document.getElementById('main');

    fetch('assets/htmls/projects.html')
        .then(response => response.text())
        .then(html => {
            main.innerHTML = html;
        })
        .catch(error => {
            console.error('Failed to load projects.html:', error);
            main.innerHTML = '<p>Failed to load content.</p>';
        });
}

/**
 * Show error message to user
 */
function showError(message) {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = `
            <div style="padding: 20px; text-align: center; color: #d32f2f;">
                <h2>Error</h2>
                <p>${message}</p>
            </div>
        `;
    }
    console.error(message);
}

/**
 * Toggle between light and dark theme
 */
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    
    // Update theme toggle button icon
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = isDarkTheme ? '☀️' : '🌙';
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    
    console.log(`Theme switched to: ${isDarkTheme ? 'dark' : 'light'}`);
}