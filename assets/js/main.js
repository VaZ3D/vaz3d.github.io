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
        
        // Reduce number of drops based on performance mode
        const numberOfDrops = performanceMode ? 120 : 200; // Reduced from 300
        
        for (let i = 0; i < numberOfDrops; i++) {
            const raindrop = document.createElement('div');
            raindrop.className = 'raindrop';
            
            // Dynamic horizontal distribution for wush effect
            const distribution = Math.random();
            let left;
            if (distribution < 0.4) {
                // Dense center area (40% chance)
                left = 15 + Math.random() * 70;
            } else if (distribution < 0.7) {
                // Medium spread (30% chance)
                left = Math.random() * 100;
            } else {
                // Edge areas (30% chance)
                left = (Math.random() < 0.5) ? Math.random() * 15 : 85 + Math.random() * 15;
            }
            
            // Varied animation duration with acceleration effect (2-8 seconds)
            const baseDuration = 2 + Math.random() * 6;
            const speedVariation = 0.6 + Math.random() * 0.8; // More speed variation
            const duration = baseDuration / speedVariation;
            
            // Staggered delay for continuous wush effect across full height
            const delay = Math.random() * 12; // Longer delay range for full coverage
            
            // Varied streak sizes for water-like effect
            const sizeVariation = Math.random();
            let width, height;
            if (sizeVariation < 0.4) {
                width = 0.5; height = 30 + Math.random() * 20; // Very thin short streaks
            } else if (sizeVariation < 0.7) {
                width = 1; height = 50 + Math.random() * 25; // Thin medium streaks
            } else if (sizeVariation < 0.9) {
                width = 1.5; height = 70 + Math.random() * 30; // Medium streaks
            } else {
                width = 2; height = 90 + Math.random() * 40; // Thick long streaks
            }
            
            // Apply styles with minimal DOM manipulation
            raindrop.style.cssText = `
                left: ${left}%;
                width: ${width}px;
                height: ${height}px;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
            `;
            
            // Dynamic movement for wush effect
            const windFactor = (Math.random() - 0.5) * 0.4; // More wind variation
            const rotation = (Math.random() - 0.5) * 15; // More rotation for wush
            
            // Apply transform with wush physics
            raindrop.style.transform = `translateX(${windFactor * 150}px) rotate(${rotation}deg)`;
            
            // Enhanced opacity for water-like effect
            const baseOpacity = 0.08 + Math.random() * 0.12; // Even more transparent for water
            const sizeOpacityFactor = Math.min(1, height / 60); // Longer streaks more visible
            const opacity = baseOpacity * sizeOpacityFactor;
            raindrop.style.opacity = opacity;
            
            // Dynamic blur for water-like effect
            const blurAmount = 0.2 + Math.random() * 0.8; // Less blur for water clarity
            raindrop.style.filter = `blur(${blurAmount}px)`;
            
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
        
        // Check if we're on mobile
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Preload the background image
            const bgImage = new Image();
            bgImage.onload = function() {
                // Force the background to be applied
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
                // Apply a fallback gradient
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
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                updateNavbar();
                scrollTimeout = null;
            }, 16); // ~60fps
        }
    });
    
    // ===== OPTIMIZED INTERSECTION OBSERVER =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation to save resources
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        observer.observe(el);
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
        
        const particleCount = performanceMode ? 30 : 50; // Reduced particle count
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: ${getRandomNeonColor()};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${5 + Math.random() * 10}s linear infinite;
                opacity: ${0.3 + Math.random() * 0.7};
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
