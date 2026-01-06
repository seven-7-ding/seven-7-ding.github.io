let profileData = null;
let currentPage = 'insights_and_ideas';
let isDarkTheme = false;
let blogsData = null;
let selectedTags = new Set();

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
        await loadBlogs();
        
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
 * Load blogs data by scanning blog directories
 */
async function loadBlogs() {
    try {
        // Load blog index file
        const indexResponse = await fetch(`assets/blogs/index.json?v=${new Date().getTime()}`, {
            cache: 'no-cache'
        });
        
        if (!indexResponse.ok) {
            console.error('Failed to load blog index');
            blogsData = { blogs: [] };
            return;
        }
        
        const indexData = await indexResponse.json();
        const blogDirs = indexData.directories || [];
        
        console.log(`Found ${blogDirs.length} blog directories`);

        const blogs = [];
        
        for (const dir of blogDirs) {
            try {
                const response = await fetch(`${dir}/metadata.json?v=${new Date().getTime()}`, {
                    cache: 'no-cache'
                });
                if (response.ok) {
                    const metadata = await response.json();
                    // Add contentPath to metadata
                    metadata.contentPath = `${dir}/content.md`;
                    blogs.push(metadata);
                }
            } catch (error) {
                console.warn(`Failed to load metadata for ${dir}:`, error);
            }
        }

        blogsData = { blogs };
        console.log('Successfully loaded blogs data:', blogsData);
    } catch (error) {
        console.error('Failed to load blogs data due to: ', error);
        blogsData = { blogs: [] };
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
    const themeIcon = isDarkTheme ? '<img src="assets/images/icon-light.png" alt="Light" style="width: 20px; height: 20px;">' : '<img src="assets/images/icon-dark.png" alt="Dark" style="width: 20px; height: 20px;">';
    navHTML += `<button class="theme-toggle" id="themeToggle">${themeIcon}</button>`;
    
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
            renderInsightsAndIdeas();
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

function renderInsightsAndIdeas() {
    const main = document.getElementById('main');

    if (!blogsData || !blogsData.blogs) {
        main.innerHTML = '<p>Loading blogs...</p>';
        return;
    }

    // Get all unique tags
    const allTags = new Set();
    blogsData.blogs.forEach(blog => {
        blog.tags.forEach(tag => allTags.add(tag));
    });

    // Generate tag filter HTML
    let tagFilterHTML = '<div class="tag-filter-container">';
    allTags.forEach(tag => {
        const activeClass = selectedTags.has(tag) ? 'active' : '';
        tagFilterHTML += `<button class="tag-button ${activeClass}" data-tag="${tag}">${tag}</button>`;
    });
    tagFilterHTML += '<button class="clear-tags-button" id="clearTags">Clear All</button>';
    tagFilterHTML += '</div>';

    // Filter blogs based on selected tags
    let filteredBlogs = blogsData.blogs;
    if (selectedTags.size > 0) {
        filteredBlogs = blogsData.blogs.filter(blog => 
            blog.tags.some(tag => selectedTags.has(tag))
        );
    }

    // Sort blogs by date (newest first)
    filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate blog cards HTML
    let blogCardsHTML = '<div class="blog-cards-container">';
    if (filteredBlogs.length === 0) {
        blogCardsHTML += '<p>No blogs found with the selected tags.</p>';
    } else {
        filteredBlogs.forEach(blog => {
            const tagsHTML = blog.tags.map(tag => 
                `<span class="blog-card-tag">${tag}</span>`
            ).join('');
            const emoji = blog.emoji || '📅';
            
            blogCardsHTML += `
                <div class="blog-card" data-blog-id="${blog.id}">
                    <div class="blog-card-date">${emoji} ${blog.date}</div>
                    <div class="blog-card-title">${blog.title}</div>
                    <div class="blog-card-description">${blog.description}</div>
                    <div class="blog-card-tags">${tagsHTML}</div>
                </div>
            `;
        });
    }
    blogCardsHTML += '</div>';

    // Combine intro, tags, and blog cards
    main.innerHTML = `
        <p class="blog-intro">Aha, you've finally found my blog section here!🥂 This blog started at the beginning of 2026 (2026-01-05 actually), and I'm putting this out here that I shall keep updating my blogs at least once a week, unless special circumstances arise (e.g. going on a trip). Enjoy reading!🍉</p>
        <p class="blog-intro">If this is your first time here and you don't know much about me, I recommend starting with
<a class="in-text-link" href="assets/htmls/insights_and_ideas.html?id=2026-1-6-finally_i_decided_to_connect_with_the_world">this article</a>,
which explains the general thoughts and motivations behind my blogging.</p>
        <p class="blog-intro-signature">Seven Ding</p>
        <p class="blog-intro-signature">2026-01-06</p>
        ${tagFilterHTML}
        ${blogCardsHTML}
    `;

    // Add event listeners to tag buttons
    document.querySelectorAll('.tag-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const tag = btn.dataset.tag;
            if (selectedTags.has(tag)) {
                selectedTags.delete(tag);
            } else {
                selectedTags.add(tag);
            }
            renderInsightsAndIdeas();
        });
    });

    // Add event listener to clear all button
    const clearBtn = document.getElementById('clearTags');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            selectedTags.clear();
            renderInsightsAndIdeas();
        });
    }

    // Add event listeners to blog cards
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', () => {
            const blogId = card.dataset.blogId;
            const blog = blogsData.blogs.find(b => b.id === blogId);
            if (blog) {
                window.location.href = `assets/htmls/insights_and_ideas.html?id=${blogId}`;
            }
        });
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
        // Detect the correct path based on current page location
        const isSubPage = window.location.pathname.includes('/assets/htmls/');
        const imagePath = isSubPage ? '../images/' : 'assets/images/';
        
        themeToggle.innerHTML = isDarkTheme 
            ? `<img src="${imagePath}icon-light.png" alt="Light" style="width: 20px; height: 20px;">` 
            : `<img src="${imagePath}icon-dark.png" alt="Dark" style="width: 20px; height: 20px;">`;
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    
    console.log(`Theme switched to: ${isDarkTheme ? 'dark' : 'light'}`);
}

/**
 * Blog viewer functions
 */
function initBlogViewer() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
    
    if (!blogId) {
        document.getElementById('blogContent').innerHTML = '<div class="error">Blog ID not specified.</div>';
        return;
    }
    
    loadBlogPost(blogId);
}

async function loadBlogPost(blogId) {
    try {
        // Use absolute path from root to avoid relative path issues
        const indexResponse = await fetch(`../../assets/blogs/index.json?v=${new Date().getTime()}`);
        if (!indexResponse.ok) {
            throw new Error('Failed to load blog index');
        }
        
        const indexData = await indexResponse.json();
        const blogDirs = indexData.directories || [];
        
        let blog = null;
        let blogDir = null;
        
        for (const dir of blogDirs) {
            try {
                // Adjust path for subdirectory location
                const metadataPath = `../../${dir}/metadata.json`;
                const response = await fetch(`${metadataPath}?v=${new Date().getTime()}`);
                if (response.ok) {
                    const metadata = await response.json();
                    if (metadata.id === blogId) {
                        blog = metadata;
                        blogDir = dir;
                        break;
                    }
                }
            } catch (error) {
                console.warn(`Failed to check ${dir}:`, error);
            }
        }
        
        if (!blog) {
            document.getElementById('blogContent').innerHTML = '<div class="error">Blog post not found.</div>';
            return;
        }
        
        // Load blog content with adjusted path
        const contentResponse = await fetch(`../../${blogDir}/content.md`);
        if (!contentResponse.ok) throw new Error('Failed to load blog content');
        const markdownContent = await contentResponse.text();
        
        // Parse markdown to HTML using marked.js
        const htmlContent = marked.parse(markdownContent);
        
        // Generate tags HTML
        const tagsHTML = blog.tags.map(tag => 
            `<span class="blog-tag-display">${tag}</span>`
        ).join('');
        const emoji = blog.emoji || '📅';
        
        // Render blog post
        document.getElementById('blogContent').innerHTML = `
            <div class="blog-header">
                <h1 class="blog-title">${blog.title}</h1>
                <div class="blog-meta">
                    <span>${emoji} ${blog.date}</span>
                </div>
                <div class="blog-tags-display">${tagsHTML}</div>
            </div>
            <div class="blog-content">${htmlContent}</div>
        `;
        
    } catch (error) {
        console.error('Error loading blog post:', error);
        document.getElementById('blogContent').innerHTML = 
            '<div class="error">Failed to load blog post. Please try again later.</div>';
    }
}