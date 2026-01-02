let profileData = null;
let currentPage = 'aboutme';

const pages = {
    'aboutme': 'About Me',
    'projects': 'Projects',
    'insights_and_ideas': 'Insights & Ideas',
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadProfile();
        
        renderPage();

        initEventListeners();
        
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
        const response = await fetch('profile.json');
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
    
    for (const [key, label] of Object.entries(pages)) {
        const activeClass = key === currentPage ? 'active' : '';
        navHTML += `<button class="nav-btn ${activeClass}" data-page="${key}">${label}</button>`;
    }
    
    // Add separator line after navigation buttons
    navHTML += `<hr class="nav-separator">`;
    
    nav.innerHTML = navHTML;
    
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
            <img src="${profileData.basic.avatar}" alt="Avatar" class="avatar">
            <h3 class="name">${profileData.basic.name_en}</h3>
            <p class="name">${profileData.basic.name_zh}</p>
            <p class="title">${profileData.basic.title}</p>
            <p class="introduction">${profileData.basic.introduction}</p>
            <p class="location">📍 ${profileData.basic.location}</p>
            <p class="email">✉️ <a href="mailto:${profileData.basic.email}">Email</a></p>
            <div class="social-links"> 🗃️
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
            main.innerHTML = '<h2>About Me</h2><p>About me content goes here.</p>';
            break;
        case 'projects':
            main.innerHTML = '<h2>Projects</h2><p>Projects content goes here.</p>';
            break;
        case 'insights_and_ideas':
            main.innerHTML = '<h2>Insights & Ideas</h2><p>Insights & Ideas content goes here.</p>';
            break;
        default:
            main.innerHTML = '<p>Page not found</p>';
    }
}