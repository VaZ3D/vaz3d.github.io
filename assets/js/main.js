// ===== PORTFOLIO JAVASCRIPT - PERFORMANCE OPTIMIZED =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== PERFORMANCE MONITORING =====
    let isMobile = window.innerWidth <= 768;
    let performanceMode = false;
    
    // Detect device performance
    function detectPerformanceMode() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
        const isLowEndDevice = navigator.hardwareConcurrency <= 4;
        
        performanceMode = isSlowConnection || isLowEndDevice || isMobile;
        
        if (performanceMode) {
            document.body.classList.add('performance-mode');
            console.log(' Performance mode enabled for better mobile experience');
        }
    }
    
    detectPerformanceMode();
    
    // ===== OPTIMIZED RAINDROP GENERATION =====
    function createRaindrops() {
        const rainContainer = document.querySelector('.digital-rain');
        if (!rainContainer) return;
        
        // Clear existing raindrops
        rainContainer.innerHTML = '';
        
        // Significantly reduce number of drops for better performance
        const numberOfDrops = performanceMode ? 60 : 100;
        
        for (let i = 0; i < numberOfDrops; i++) {
            const raindrop = document.createElement('div');
            raindrop.className = 'raindrop';
            
            // Simplified positioning
            const left = Math.random() * 100;
            
            // Simplified animation duration
            const duration = 3 + Math.random() * 4;
            
            // Staggered delay
            const delay = Math.random() * 8;
            
            // Simplified sizes
            const width = 0.5 + Math.random() * 1;
            const height = 30 + Math.random() * 40;
            
            // Apply styles
            raindrop.style.cssText = `
                left: ${left}%;
                width: ${width}px;
                height: ${height}px;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
            `;
            
            // Simplified opacity
            const opacity = 0.03 + Math.random() * 0.05;
            raindrop.style.opacity = opacity;
            
            rainContainer.appendChild(raindrop);
        }
    }
    
    // Initialize raindrops
    createRaindrops();
    
    // Optimized resize handler with debounce
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(createRaindrops, 300);
    });
    
    // ===== OPTIMIZED MOBILE BACKGROUND HANDLING =====
    function ensureMobileBackground() {
        const backgroundElement = document.querySelector('.cyber-background');
        if (!backgroundElement) return;
        
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            const bgImage = new Image();
            bgImage.onload = function() {
                backgroundElement.style.backgroundImage = `
                    linear-gradient(135deg, rgba(5, 5, 5, 0.9) 0%, rgba(10, 10, 10, 0.8) 100%),
                    url('assets/images/Background.png')
                `;
                backgroundElement.style.backgroundSize = 'cover';
                backgroundElement.style.backgroundPosition = 'center';
                backgroundElement.style.backgroundRepeat = 'no-repeat';
                backgroundElement.style.backgroundAttachment = 'scroll';
            };
            bgImage.onerror = function() {
                console.warn('Background image failed to load on mobile');
                backgroundElement.style.background = `
                    linear-gradient(135deg, rgba(5, 5, 5, 0.95) 0%, rgba(10, 10, 10, 0.9) 100%)
                `;
            };
            bgImage.src = 'assets/images/Background.png';
        }
    }
    
    // Run the mobile background fix
    ensureMobileBackground();
    
    // Re-run on orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(ensureMobileBackground, 100);
    });
    
    // Re-run on resize
    window.addEventListener('resize', debounce(ensureMobileBackground, 250));
    
    // ===== OPTIMIZED MOBILE MENU =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // ===== OPTIMIZED SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== OPTIMIZED NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    let scrollTimeout;
    
    function updateNavbar() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Throttled scroll handler for better performance
    let isScrolling = false;
    let scrollEndTimeout;
    
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                updateNavbar();
                scrollTimeout = null;
            }, 16);
        }
        
        // Disable animations during scroll for better performance
        if (!isScrolling) {
            isScrolling = true;
            document.body.classList.add('scrolling');
        }
        
        // Clear existing timeout
        clearTimeout(scrollEndTimeout);
        
        // Re-enable animations after scroll ends
        scrollEndTimeout = setTimeout(() => {
            isScrolling = false;
            document.body.classList.remove('scrolling');
        }, 150);
    });
    
    // ===== OPTIMIZED SKILL BARS ANIMATION =====
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        const skillSection = document.querySelector('.skills');
        
        if (!skillSection) return;
        
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const level = bar.getAttribute('data-level');
                        if (level) {
                            bar.style.width = level + '%';
                        }
                    });
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        skillObserver.observe(skillSection);
    }
    
    animateSkillBars();
    
    // ===== OPTIMIZED PARTICLE SYSTEM =====
    function createParticles() {
        const particleContainer = document.querySelector('.cyber-particles');
        if (!particleContainer) return;
        
        // Significantly reduce particle count for better performance
        const particleCount = performanceMode ? 15 : 25;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 1px;
                height: 1px;
                background: ${getRandomNeonColor()};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${8 + Math.random() * 12}s linear infinite;
                opacity: ${0.2 + Math.random() * 0.3};
            `;
            particleContainer.appendChild(particle);
        }
    }
    
    function getRandomNeonColor() {
        const colors = ['#ff0080', '#00ffff', '#8a2be2', '#00ff41'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Initialize particles
    createParticles();
    
    // ===== OPTIMIZED KEYBOARD NAVIGATION =====
    document.addEventListener('keydown', (e) => {
        // Escape key to close mobile menu
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
        
        if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            window.scrollBy({
                top: -window.innerHeight,
                behavior: 'smooth'
            });
        }
    });
    
    // ===== OPTIMIZED ACCESSIBILITY =====
    function improveAccessibility() {
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--neon-blue)';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }
    
    improveAccessibility();
    
    // ===== INITIALIZATION COMPLETE =====
    console.log('🚀 Cyberpunk Portfolio initialized successfully!');
    
    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
    
});

// ===== OPTIMIZED UTILITY FUNCTIONS =====

// Improved debounce function
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

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
