// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Update active link based on current page
function updateActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Update login/logout button based on user status
function updateLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail');
    const loginNavItem = document.getElementById('loginNavItem');
    const logoutNavItem = document.getElementById('logoutNavItem');
    
    if (loginNavItem && logoutNavItem) {
        if (isLoggedIn && userEmail) {
            loginNavItem.style.display = 'none';
            logoutNavItem.style.display = 'block';
            // Update logout item to show username
            const logoutLink = logoutNavItem.querySelector('.nav-link');
            if (logoutLink) {
                logoutLink.innerHTML = `Logout (${userEmail.split('@')[0]})`;
            }
        } else {
            loginNavItem.style.display = 'block';
            logoutNavItem.style.display = 'none';
        }
    }
}

// Handle logout
function handleLogout(event) {
    event.preventDefault();
    const userEmail = localStorage.getItem('userEmail');
    const confirmLogout = confirm('Are you sure you want to log out from ' + (userEmail || 'your account') + '?');
    
    if (confirmLogout) {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        updateLoginStatus();
        alert('You have been logged out successfully!');
        window.location.href = 'login.html';
    }
}

// Login Modal Functions
function showLoginModal() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        const userEmail = localStorage.getItem('userEmail');
        alert('You are already logged in as: ' + userEmail + '\n\nPlease logout first to login with a different account.');
        return;
    }
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('show');
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function handleModalLogin(event) {
    event.preventDefault();
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        const userEmail = localStorage.getItem('userEmail');
        alert('Only one user can be logged in at a time.\n\nCurrently logged in as: ' + userEmail + '\n\nPlease logout first to login with a different account.');
        return;
    }
    
    const email = document.getElementById('modalEmail').value.trim();
    const password = document.getElementById('modalPassword').value.trim();
    const modalError = document.getElementById('modalError');

    if (!email || !password) {
        modalError.textContent = 'Please fill in all fields';
        modalError.style.display = 'block';
        return;
    }

    if (password.length < 6) {
        modalError.textContent = 'Password must be at least 6 characters';
        modalError.style.display = 'block';
        return;
    }

    // Store login data
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', email.split('@')[0]);

    closeLoginModal();
    updateLoginStatus();
    alert('Login successful as: ' + email);
    location.reload();
}

// Make buttons require login
function setupLoginRequiredElements() {
    const loginRequiredElements = document.querySelectorAll('.btn, [data-require-login]');
    
    loginRequiredElements.forEach(element => {
        if (element.textContent.toLowerCase().includes('subscribe') || 
            element.textContent.toLowerCase().includes('get started') ||
            element.getAttribute('data-require-login') === 'true') {
            element.addEventListener('click', (e) => {
                const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
                if (!isLoggedIn) {
                    e.preventDefault();
                    e.stopPropagation();
                    showLoginModal();
                }
            });
        }
    });
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('loginModal');
    if (modal && event.target === modal) {
        closeLoginModal();
    }
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
}

// Toggle theme
function toggleTheme() {
    const isDarkMode = body.classList.toggle('dark-mode');
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    if (themeToggle) themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Call on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    updateActiveLink();
    updateLoginStatus();
    setupLoginRequiredElements();
});