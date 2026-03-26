/* ===================================
   Light House Agency - Main JS
   Particle Network en Hero + Carrusel
   Efectos Visuales de Alto Impacto
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Preloader Premium
    // ===================================
    var preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
            // Trigger hero animations after preloader
            triggerHeroAnimations();
        }, 2500);
    });
    
    // ===================================
    // Hero Animations
    // ===================================
    function triggerHeroAnimations() {
        var heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('animated');
        }
        
        // Typewriter effect
        typewriterEffect();
    }
    
    // ===================================
    // Typewriter Effect
    // ===================================
    function typewriterEffect() {
        var text1 = document.querySelector('.typewriter-text');
        var text2 = document.querySelector('.typewriter-text-2');
        
        if (text1 && text2) {
            var content1 = text1.textContent;
            var content2 = text2.textContent;
            
            text1.textContent = '';
            text2.textContent = '';
            
            var i = 0;
            var j = 0;
            
            function typeFirst() {
                if (i < content1.length) {
                    text1.textContent += content1.charAt(i);
                    i++;
                    setTimeout(typeFirst, 80);
                } else {
                    setTimeout(typeSecond, 300);
                }
            }
            
            function typeSecond() {
                if (j < content2.length) {
                    text2.textContent += content2.charAt(j);
                    j++;
                    setTimeout(typeSecond, 60);
                }
            }
            
            setTimeout(typeFirst, 500);
        }
    }
    
    // ===================================
    // Navbar Scroll Effect
    // ===================================
    var navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ===================================
    // NAVBAR DROPDOWNS - Móvil/Tablet
    // ===================================
    var dropdownNavs = document.querySelectorAll('.dropdown-nav');
    
    if (dropdownNavs.length > 0) {
        // Detectar si es dispositivo táctil o pantalla pequeña
        var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        var isSmallScreen = window.innerWidth <= 992;
        
        dropdownNavs.forEach(function(dropdown) {
            var toggle = dropdown.querySelector('.dropdown-toggle-nav');
            
            if (isTouchDevice || isSmallScreen) {
                // Click para abrir/cerrar en móvil
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Cerrar otros dropdowns
                    dropdownNavs.forEach(function(other) {
                        if (other !== dropdown) {
                            other.classList.remove('open');
                        }
                    });
                    
                    // Toggle actual
                    dropdown.classList.toggle('open');
                });
            } else {
                // Hover en desktop
                dropdown.addEventListener('mouseenter', function() {
                    dropdown.classList.add('open');
                });
                
                dropdown.addEventListener('mouseleave', function() {
                    dropdown.classList.remove('open');
                });
            }
        });
        
        // Cerrar dropdowns al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown-nav')) {
                dropdownNavs.forEach(function(dropdown) {
                    dropdown.classList.remove('open');
                });
            }
        });
        
        // Recalcular en resize
        window.addEventListener('resize', function() {
            isSmallScreen = window.innerWidth <= 992;
        });
    }
    
    // Cerrar menú móvil al hacer click en un enlace
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle-nav)');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarCollapse && window.innerWidth <= 992) {
                var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // ===================================
    // Smooth Scroll
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===================================
    // MAGNETIC BUTTONS
    // ===================================
    var magneticBtns = document.querySelectorAll('.btn-magnetic');
    
    magneticBtns.forEach(function(btn) {
        btn.addEventListener('mousemove', function(e) {
            var rect = btn.getBoundingClientRect();
            var x = e.clientX - rect.left - rect.width / 2;
            var y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = 'translate(' + (x * 0.3) + 'px, ' + (y * 0.3) + 'px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            btn.style.transform = 'translate(0, 0)';
        });
    });
    
    // ===================================
    // RIPPLE EFFECT
    // ===================================
    var rippleBtns = document.querySelectorAll('.btn-ripple');
    
    rippleBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            var rect = btn.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            
            var ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            btn.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
    
    // ===================================
    // 3D TILT EFFECT
    // ===================================
    var tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            
            var rotateX = (y - centerY) / 10;
            var rotateY = (centerX - x) / 10;
            
            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    // ===================================
    // SPOTLIGHT EFFECT
    // ===================================
    var spotlights = document.querySelectorAll('.spotlight');
    
    spotlights.forEach(function(el) {
        el.addEventListener('mousemove', function(e) {
            var rect = el.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            
            el.style.setProperty('--mouse-x', x + 'px');
            el.style.setProperty('--mouse-y', y + 'px');
        });
    });
    
    // ===================================
    // CURSOR PERSONALIZADO MEJORADO
    // ===================================
    var customCursor = document.querySelector('.custom-cursor');
    var cursorDot = document.querySelector('.cursor-dot');
    var cursorX = 0;
    var cursorY = 0;
    var dotX = 0;
    var dotY = 0;
    
    if (customCursor && cursorDot) {
        document.addEventListener('mousemove', function(e) {
            cursorX = e.clientX;
            cursorY = e.clientY;
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });
        
        function animateCursor() {
            dotX += (cursorX - dotX) * 0.15;
            dotY += (cursorY - dotY) * 0.15;
            customCursor.style.left = dotX + 'px';
            customCursor.style.top = dotY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        var interactiveElements = document.querySelectorAll('a, button, .service-slide, .progress-dot, .about-card, .btn-magnetic');
        interactiveElements.forEach(function(el) {
            el.addEventListener('mouseenter', function() {
                customCursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', function() {
                customCursor.classList.remove('hover');
            });
        });
        
        // Cursor trail effect
        document.addEventListener('mousemove', function(e) {
            createCursorTrail(e.clientX, e.clientY);
        });
    }
    
    function createCursorTrail(x, y) {
        if (Math.random() > 0.85) { // Only create trail occasionally
            var trail = document.createElement('div');
            trail.style.cssText = 'position: fixed; width: 6px; height: 6px; background: rgba(244, 163, 0, 0.5); border-radius: 50%; pointer-events: none; z-index: 9999; left: ' + x + 'px; top: ' + y + 'px; transition: all 0.5s ease;';
            document.body.appendChild(trail);
            
            setTimeout(function() {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0)';
            }, 50);
            
            setTimeout(function() {
                trail.remove();
            }, 500);
        }
    }
    
    // ===================================
    // PARTICLE NETWORK EFFECT (Hero)
    // ===================================
    var heroCanvas = document.getElementById('heroCanvas');
    
    if (heroCanvas) {
        var heroCtx = heroCanvas.getContext('2d');
        var heroParticles = [];
        var heroMouse = { x: null, y: null, radius: 200 };
        var heroAnimationId;
        
        var heroParticleCount = 100;
        var heroConnectionDistance = 150;
        var heroMouseDistance = 200;
        
        function resizeHeroCanvas() {
            heroCanvas.width = heroCanvas.parentElement.offsetWidth;
            heroCanvas.height = heroCanvas.parentElement.offsetHeight;
            initHeroParticles();
        }
        
        function initHeroParticles() {
            heroParticles = [];
            for (var i = 0; i < heroParticleCount; i++) {
                heroParticles.push({
                    x: Math.random() * heroCanvas.width,
                    y: Math.random() * heroCanvas.height,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.3
                });
            }
        }
        
        function drawHeroParticles() {
            heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
            
            // Actualizar y dibujar partículas
            for (var i = 0; i < heroParticles.length; i++) {
                var p = heroParticles[i];
                
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.x < 0 || p.x > heroCanvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > heroCanvas.height) p.vy *= -1;
                
                p.x = Math.max(0, Math.min(heroCanvas.width, p.x));
                p.y = Math.max(0, Math.min(heroCanvas.height, p.y));
                
                // Dibujar partícula
                heroCtx.beginPath();
                heroCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                heroCtx.fillStyle = 'rgba(244, 163, 0, ' + p.opacity + ')';
                heroCtx.fill();
                
                // Brillo
                heroCtx.beginPath();
                heroCtx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
                heroCtx.fillStyle = 'rgba(244, 163, 0, ' + (p.opacity * 0.1) + ')';
                heroCtx.fill();
            }
            
            // Conexiones entre partículas
            for (var i = 0; i < heroParticles.length; i++) {
                for (var j = i + 1; j < heroParticles.length; j++) {
                    var p1 = heroParticles[i];
                    var p2 = heroParticles[j];
                    var dx = p1.x - p2.x;
                    var dy = p1.y - p2.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < heroConnectionDistance) {
                        var opacity = (1 - distance / heroConnectionDistance) * 0.2;
                        heroCtx.beginPath();
                        heroCtx.moveTo(p1.x, p1.y);
                        heroCtx.lineTo(p2.x, p2.y);
                        heroCtx.strokeStyle = 'rgba(244, 163, 0, ' + opacity + ')';
                        heroCtx.lineWidth = 1;
                        heroCtx.stroke();
                    }
                }
            }
            
            // Conexiones con el mouse
            if (heroMouse.x !== null && heroMouse.y !== null) {
                // Punto del mouse
                heroCtx.beginPath();
                heroCtx.arc(heroMouse.x, heroMouse.y, 5, 0, Math.PI * 2);
                heroCtx.fillStyle = 'rgba(244, 163, 0, 0.9)';
                heroCtx.fill();
                
                // Brillo del mouse
                heroCtx.beginPath();
                heroCtx.arc(heroMouse.x, heroMouse.y, 15, 0, Math.PI * 2);
                heroCtx.fillStyle = 'rgba(244, 163, 0, 0.2)';
                heroCtx.fill();
                
                // Conectar partículas al mouse
                for (var i = 0; i < heroParticles.length; i++) {
                    var p = heroParticles[i];
                    var dx = p.x - heroMouse.x;
                    var dy = p.y - heroMouse.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < heroMouseDistance) {
                        var opacity = (1 - distance / heroMouseDistance) * 0.5;
                        heroCtx.beginPath();
                        heroCtx.moveTo(p.x, p.y);
                        heroCtx.lineTo(heroMouse.x, heroMouse.y);
                        heroCtx.strokeStyle = 'rgba(244, 163, 0, ' + opacity + ')';
                        heroCtx.lineWidth = 1.5;
                        heroCtx.stroke();
                    }
                }
            }
            
            heroAnimationId = requestAnimationFrame(drawHeroParticles);
        }
        
        // Eventos del mouse
        heroCanvas.parentElement.addEventListener('mousemove', function(e) {
            var rect = heroCanvas.getBoundingClientRect();
            heroMouse.x = e.clientX - rect.left;
            heroMouse.y = e.clientY - rect.top;
        });
        
        heroCanvas.parentElement.addEventListener('mouseleave', function() {
            heroMouse.x = null;
            heroMouse.y = null;
        });
        
        resizeHeroCanvas();
        drawHeroParticles();
        
        window.addEventListener('resize', resizeHeroCanvas);
    }
    
    // ===================================
    // PARTICLE NETWORK EFFECT (About)
    // ===================================
    var aboutCanvas = document.getElementById('aboutCanvas');
    
    if (aboutCanvas) {
        var aboutCtx = aboutCanvas.getContext('2d');
        var aboutParticles = [];
        var aboutMouse = { x: null, y: null };
        var aboutAnimationId;
        
        var aboutParticleCount = 100;
        var aboutConnectionDistance = 150;
        var aboutMouseDistance = 200;
        
        function resizeAboutCanvas() {
            aboutCanvas.width = aboutCanvas.parentElement.offsetWidth;
            aboutCanvas.height = aboutCanvas.parentElement.offsetHeight;
            initAboutParticles();
        }
        
        function initAboutParticles() {
            aboutParticles = [];
            for (var i = 0; i < aboutParticleCount; i++) {
                aboutParticles.push({
                    x: Math.random() * aboutCanvas.width,
                    y: Math.random() * aboutCanvas.height,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.3
                });
            }
        }
        
        function drawAboutParticles() {
            aboutCtx.clearRect(0, 0, aboutCanvas.width, aboutCanvas.height);
            
            for (var i = 0; i < aboutParticles.length; i++) {
                var p = aboutParticles[i];
                
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.x < 0 || p.x > aboutCanvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > aboutCanvas.height) p.vy *= -1;
                
                p.x = Math.max(0, Math.min(aboutCanvas.width, p.x));
                p.y = Math.max(0, Math.min(aboutCanvas.height, p.y));
                
                aboutCtx.beginPath();
                aboutCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                aboutCtx.fillStyle = 'rgba(244, 163, 0, ' + p.opacity + ')';
                aboutCtx.fill();
                
                aboutCtx.beginPath();
                aboutCtx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
                aboutCtx.fillStyle = 'rgba(244, 163, 0, ' + (p.opacity * 0.1) + ')';
                aboutCtx.fill();
            }
            
            for (var i = 0; i < aboutParticles.length; i++) {
                for (var j = i + 1; j < aboutParticles.length; j++) {
                    var p1 = aboutParticles[i];
                    var p2 = aboutParticles[j];
                    var dx = p1.x - p2.x;
                    var dy = p1.y - p2.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < aboutConnectionDistance) {
                        var opacity = (1 - distance / aboutConnectionDistance) * 0.2;
                        aboutCtx.beginPath();
                        aboutCtx.moveTo(p1.x, p1.y);
                        aboutCtx.lineTo(p2.x, p2.y);
                        aboutCtx.strokeStyle = 'rgba(244, 163, 0, ' + opacity + ')';
                        aboutCtx.lineWidth = 1;
                        aboutCtx.stroke();
                    }
                }
            }
            
            if (aboutMouse.x !== null && aboutMouse.y !== null) {
                aboutCtx.beginPath();
                aboutCtx.arc(aboutMouse.x, aboutMouse.y, 5, 0, Math.PI * 2);
                aboutCtx.fillStyle = 'rgba(244, 163, 0, 0.9)';
                aboutCtx.fill();
                
                aboutCtx.beginPath();
                aboutCtx.arc(aboutMouse.x, aboutMouse.y, 15, 0, Math.PI * 2);
                aboutCtx.fillStyle = 'rgba(244, 163, 0, 0.2)';
                aboutCtx.fill();
                
                for (var i = 0; i < aboutParticles.length; i++) {
                    var p = aboutParticles[i];
                    var dx = p.x - aboutMouse.x;
                    var dy = p.y - aboutMouse.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < aboutMouseDistance) {
                        var opacity = (1 - distance / aboutMouseDistance) * 0.5;
                        aboutCtx.beginPath();
                        aboutCtx.moveTo(p.x, p.y);
                        aboutCtx.lineTo(aboutMouse.x, aboutMouse.y);
                        aboutCtx.strokeStyle = 'rgba(244, 163, 0, ' + opacity + ')';
                        aboutCtx.lineWidth = 1.5;
                        aboutCtx.stroke();
                    }
                }
            }
            
            aboutAnimationId = requestAnimationFrame(drawAboutParticles);
        }
        
        aboutCanvas.parentElement.addEventListener('mousemove', function(e) {
            var rect = aboutCanvas.getBoundingClientRect();
            aboutMouse.x = e.clientX - rect.left;
            aboutMouse.y = e.clientY - rect.top;
        });
        
        aboutCanvas.parentElement.addEventListener('mouseleave', function() {
            aboutMouse.x = null;
            aboutMouse.y = null;
        });
        
        resizeAboutCanvas();
        drawAboutParticles();
        
        window.addEventListener('resize', resizeAboutCanvas);
    }
    
    // ===================================
    // CARRUSEL DE NOSOTROS - Scroll Pinned
    // ===================================
    var aboutSection = document.querySelector('.about-section');
    var aboutCarouselContainer = document.querySelector('.about-carousel-container');
    var aboutSlides = document.querySelectorAll('.about-slide');
    var aboutProgressDots = document.querySelectorAll('.about-progress-dot');
    var aboutSectionHeader = document.querySelector('.about-section .section-header');
    var aboutCounterCurrent = document.querySelector('.about-slide-counter .current');
    
    if (aboutSection && aboutSlides.length > 0) {
        var aboutTotalSlides = aboutSlides.length;
        var aboutCurrentSlide = 0;
        var aboutPinStart = 0;
        var aboutPinDuration = 0;
        var aboutSlideHeight = 500;
        var aboutHeaderAnimated = false;
        
        function calculateAboutPositions() {
            var rect = aboutSection.getBoundingClientRect();
            aboutPinStart = window.scrollY + rect.top;
            aboutPinDuration = aboutSlideHeight * aboutTotalSlides + 300;
        }
        
        function showAboutSlide(index) {
            index = Math.max(0, Math.min(index, aboutTotalSlides - 1));
            
            aboutSlides.forEach(function(slide, i) {
                slide.classList.remove('active', 'show-content');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
            
            aboutProgressDots.forEach(function(dot, i) {
                dot.classList.remove('active');
                if (i === index) {
                    dot.classList.add('active');
                }
            });
            
            if (aboutCounterCurrent) {
                aboutCounterCurrent.textContent = String(index + 1).padStart(2, '0');
            }
            
            aboutCurrentSlide = index;
        }
        
        function showAboutSlideContent() {
            var activeSlide = document.querySelector('.about-slide.active');
            if (activeSlide) {
                activeSlide.classList.add('show-content');
            }
        }
        
        function hideAboutSlideContent() {
            var activeSlide = document.querySelector('.about-slide.active');
            if (activeSlide) {
                activeSlide.classList.remove('show-content');
            }
        }
        
        function updateAboutAnimation() {
            var scrollY = window.scrollY;
            var sectionRect = aboutSection.getBoundingClientRect();
            var inSection = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
            
            if (inSection && !aboutHeaderAnimated) {
                aboutSectionHeader.classList.add('visible');
                aboutHeaderAnimated = true;
            }
            
            if (scrollY >= aboutPinStart - 100 && scrollY < aboutPinStart + aboutPinDuration) {
                aboutSectionHeader.classList.add('sticky');
            } else {
                aboutSectionHeader.classList.remove('sticky');
            }
            
            if (scrollY >= aboutPinStart && scrollY < aboutPinStart + aboutPinDuration) {
                aboutCarouselContainer.classList.add('is-pinned');
                aboutCarouselContainer.classList.remove('is-unpinned');
                
                var progress = (scrollY - aboutPinStart) / aboutPinDuration;
                var slideIndex = Math.floor(progress * aboutTotalSlides);
                slideIndex = Math.max(0, Math.min(slideIndex, aboutTotalSlides - 1));
                
                var slideProgress = (progress * aboutTotalSlides) - slideIndex;
                
                if (slideIndex !== aboutCurrentSlide) {
                    showAboutSlide(slideIndex);
                }
                
                if (slideProgress > 0.3) {
                    showAboutSlideContent();
                } else {
                    hideAboutSlideContent();
                }
                
            } else if (scrollY >= aboutPinStart + aboutPinDuration) {
                aboutCarouselContainer.classList.remove('is-pinned');
                aboutCarouselContainer.classList.add('is-unpinned');
                
            } else {
                aboutCarouselContainer.classList.remove('is-pinned', 'is-unpinned');
                aboutSlides.forEach(function(slide) {
                    slide.classList.remove('active', 'show-content');
                });
            }
            
            if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) {
                aboutSectionHeader.classList.remove('visible', 'sticky');
                aboutHeaderAnimated = false;
            }
        }
        
        aboutProgressDots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                var targetScroll = aboutPinStart + (index * aboutSlideHeight) + 100;
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            });
        });
        
        var aboutObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    calculateAboutPositions();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        aboutSection.style.height = (aboutSlideHeight * aboutTotalSlides + 800) + 'px';
        aboutObserver.observe(aboutSection);
        
        window.addEventListener('scroll', updateAboutAnimation);
        window.addEventListener('resize', calculateAboutPositions);
    }
    
    // ===================================
    // PARTICLE NETWORK EFFECT (Services)
    // ===================================
    var servicesCanvas = document.getElementById('servicesCanvas');
    
    if (servicesCanvas) {
        var servicesCtx = servicesCanvas.getContext('2d');
        var servicesParticles = [];
        var servicesMouse = { x: null, y: null };
        var servicesAnimationId;
        
        // Mismos parámetros que el Hero
        var servicesParticleCount = 100;
        var servicesConnectionDistance = 150;
        var servicesMouseDistance = 200;
        
        function resizeServicesCanvas() {
            servicesCanvas.width = servicesCanvas.parentElement.offsetWidth;
            servicesCanvas.height = servicesCanvas.parentElement.offsetHeight;
            initServicesParticles();
        }
        
        function initServicesParticles() {
            servicesParticles = [];
            for (var i = 0; i < servicesParticleCount; i++) {
                servicesParticles.push({
                    x: Math.random() * servicesCanvas.width,
                    y: Math.random() * servicesCanvas.height,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.3
                });
            }
        }
        
        function drawServicesParticles() {
            servicesCtx.clearRect(0, 0, servicesCanvas.width, servicesCanvas.height);
            
            // Actualizar y dibujar partículas
            for (var i = 0; i < servicesParticles.length; i++) {
                var p = servicesParticles[i];
                
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.x < 0 || p.x > servicesCanvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > servicesCanvas.height) p.vy *= -1;
                
                p.x = Math.max(0, Math.min(servicesCanvas.width, p.x));
                p.y = Math.max(0, Math.min(servicesCanvas.height, p.y));
                
                // Dibujar partícula
                servicesCtx.beginPath();
                servicesCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                servicesCtx.fillStyle = 'rgba(244, 163, 0, ' + p.opacity + ')';
                servicesCtx.fill();
                
                // Brillo
                servicesCtx.beginPath();
                servicesCtx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
                servicesCtx.fillStyle = 'rgba(244, 163, 0, ' + (p.opacity * 0.1) + ')';
                servicesCtx.fill();
            }
            
            // Conexiones entre partículas
            for (var i = 0; i < servicesParticles.length; i++) {
                for (var j = i + 1; j < servicesParticles.length; j++) {
                    var p1 = servicesParticles[i];
                    var p2 = servicesParticles[j];
                    var dx = p1.x - p2.x;
                    var dy = p1.y - p2.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < servicesConnectionDistance) {
                        var opacity = (1 - distance / servicesConnectionDistance) * 0.2;
                        servicesCtx.beginPath();
                        servicesCtx.moveTo(p1.x, p1.y);
                        servicesCtx.lineTo(p2.x, p2.y);
                        servicesCtx.strokeStyle = 'rgba(244, 163, 0, ' + opacity + ')';
                        servicesCtx.lineWidth = 1;
                        servicesCtx.stroke();
                    }
                }
            }
            
            // Conexiones con el mouse
            if (servicesMouse.x !== null && servicesMouse.y !== null) {
                // Punto del mouse
                servicesCtx.beginPath();
                servicesCtx.arc(servicesMouse.x, servicesMouse.y, 5, 0, Math.PI * 2);
                servicesCtx.fillStyle = 'rgba(244, 163, 0, 0.9)';
                servicesCtx.fill();
                
                // Brillo del mouse
                servicesCtx.beginPath();
                servicesCtx.arc(servicesMouse.x, servicesMouse.y, 15, 0, Math.PI * 2);
                servicesCtx.fillStyle = 'rgba(244, 163, 0, 0.2)';
                servicesCtx.fill();
                
                // Conectar partículas al mouse
                for (var i = 0; i < servicesParticles.length; i++) {
                    var p = servicesParticles[i];
                    var dx = p.x - servicesMouse.x;
                    var dy = p.y - servicesMouse.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < servicesMouseDistance) {
                        var opacity = (1 - distance / servicesMouseDistance) * 0.5;
                        servicesCtx.beginPath();
                        servicesCtx.moveTo(p.x, p.y);
                        servicesCtx.lineTo(servicesMouse.x, servicesMouse.y);
                        servicesCtx.strokeStyle = 'rgba(244, 163, 0, ' + opacity + ')';
                        servicesCtx.lineWidth = 1.5;
                        servicesCtx.stroke();
                    }
                }
            }
            
            servicesAnimationId = requestAnimationFrame(drawServicesParticles);
        }
        
        // Eventos del mouse
        servicesCanvas.parentElement.addEventListener('mousemove', function(e) {
            var rect = servicesCanvas.getBoundingClientRect();
            servicesMouse.x = e.clientX - rect.left;
            servicesMouse.y = e.clientY - rect.top;
        });
        
        servicesCanvas.parentElement.addEventListener('mouseleave', function() {
            servicesMouse.x = null;
            servicesMouse.y = null;
        });
        
        resizeServicesCanvas();
        drawServicesParticles();
        
        window.addEventListener('resize', resizeServicesCanvas);
    }
    
    // ===================================
    // CARRUSEL DE SERVICIOS - Scroll Pinned
    // ===================================
    var servicesSection = document.querySelector('.services-section');
    var carouselContainer = document.querySelector('.services-carousel-container');
    var slides = document.querySelectorAll('.service-slide');
    var progressDots = document.querySelectorAll('.progress-dot');
    var sectionHeader = document.querySelector('.services-section .section-header');
    var counterCurrent = document.querySelector('.slide-counter .current');
    
    if (servicesSection && slides.length > 0) {
        var totalSlides = slides.length;
        var currentSlide = 0;
        var pinStart = 0;
        var pinDuration = 0;
        var slideHeight = 500;
        var headerAnimated = false;
        
        function calculatePositions() {
            var rect = servicesSection.getBoundingClientRect();
            pinStart = window.scrollY + rect.top;
            pinDuration = slideHeight * totalSlides + 300;
        }
        
        function showSlide(index) {
            index = Math.max(0, Math.min(index, totalSlides - 1));
            
            slides.forEach(function(slide, i) {
                slide.classList.remove('active', 'show-content');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
            
            progressDots.forEach(function(dot, i) {
                dot.classList.remove('active');
                if (i === index) {
                    dot.classList.add('active');
                }
            });
            
            if (counterCurrent) {
                counterCurrent.textContent = String(index + 1).padStart(2, '0');
            }
            
            currentSlide = index;
        }
        
        function showSlideContent() {
            var activeSlide = document.querySelector('.service-slide.active');
            if (activeSlide) {
                activeSlide.classList.add('show-content');
            }
        }
        
        function hideSlideContent() {
            var activeSlide = document.querySelector('.service-slide.active');
            if (activeSlide) {
                activeSlide.classList.remove('show-content');
            }
        }
        
        function updateAnimation() {
            var scrollY = window.scrollY;
            var sectionRect = servicesSection.getBoundingClientRect();
            var inSection = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
            
            // Mostrar header con animación de izquierda a derecha
            if (inSection && !headerAnimated) {
                sectionHeader.classList.add('visible');
                headerAnimated = true;
            }
            
            // Header fijo mientras estamos en la sección
            if (scrollY >= pinStart - 100 && scrollY < pinStart + pinDuration) {
                sectionHeader.classList.add('sticky');
            } else {
                sectionHeader.classList.remove('sticky');
            }
            
            if (scrollY >= pinStart && scrollY < pinStart + pinDuration) {
                carouselContainer.classList.add('is-pinned');
                carouselContainer.classList.remove('is-unpinned');
                
                var progress = (scrollY - pinStart) / pinDuration;
                var slideIndex = Math.floor(progress * totalSlides);
                slideIndex = Math.max(0, Math.min(slideIndex, totalSlides - 1));
                
                var slideProgress = (progress * totalSlides) - slideIndex;
                
                if (slideIndex !== currentSlide) {
                    showSlide(slideIndex);
                }
                
                if (slideProgress > 0.3) {
                    showSlideContent();
                } else {
                    hideSlideContent();
                }
                
            } else if (scrollY >= pinStart + pinDuration) {
                carouselContainer.classList.remove('is-pinned');
                carouselContainer.classList.add('is-unpinned');
                
            } else {
                carouselContainer.classList.remove('is-pinned', 'is-unpinned');
                slides.forEach(function(slide) {
                    slide.classList.remove('active', 'show-content');
                });
            }
            
            // Resetear animación del header cuando salimos de la sección
            if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) {
                sectionHeader.classList.remove('visible', 'sticky');
                headerAnimated = false;
            }
        }
        
        progressDots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                var targetScroll = pinStart + (index * slideHeight) + 100;
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            });
        });
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    calculatePositions();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        servicesSection.style.height = (slideHeight * totalSlides + 800) + 'px';
        observer.observe(servicesSection);
        
        window.addEventListener('scroll', updateAnimation);
        window.addEventListener('resize', calculatePositions);
    }
    
    // ===================================
    // Form Submit
    // ===================================
    var contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });
    }
    
    // ===================================
    // ANIMACIONES CONTACTO
    // ===================================
    var contactSection = document.querySelector('.contact-section');
    
    if (contactSection) {
        var contactTitle = document.querySelector('.contact-title-animate');
        var contactText = document.querySelector('.contact-text-animate');
        var contactItems = document.querySelectorAll('.contact-item');
        var contactFormWrapper = document.querySelector('.contact-form-wrapper');
        
        var contactObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Animar título
                    if (contactTitle) {
                        setTimeout(function() {
                            contactTitle.classList.add('animated');
                        }, 100);
                    }
                    
                    // Animar texto
                    if (contactText) {
                        setTimeout(function() {
                            contactText.classList.add('animated');
                        }, 300);
                    }
                    
                    // Animar items de contacto
                    contactItems.forEach(function(item, index) {
                        setTimeout(function() {
                            item.classList.add('animated');
                        }, 500 + (index * 200));
                    });
                    
                    // Animar formulario
                    if (contactFormWrapper) {
                        setTimeout(function() {
                            contactFormWrapper.classList.add('animated');
                        }, 600);
                    }
                    
                    contactObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        contactObserver.observe(contactSection);
    }
    
    // ===================================
    // PARALLAX EFFECT
    // ===================================
    var parallaxElements = document.querySelectorAll('.parallax-layer');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
            var scrollY = window.scrollY;
            
            parallaxElements.forEach(function(el, index) {
                var speed = (index + 1) * 0.1;
                el.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
            });
        });
    }
    
    // ===================================
    // SCROLL REVEAL ANIMATIONS
    // ===================================
    var revealElements = document.querySelectorAll('.stagger-item');
    
    if (revealElements.length > 0) {
        var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry, index) {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(function(el) {
            revealObserver.observe(el);
        });
    }
    
    // ===================================
    // FLOATING ORBS MOUSE INTERACTION
    // ===================================
    var orbs = document.querySelectorAll('.orb');
    var orbsContainer = document.querySelector('.floating-orbs');
    
    if (orbsContainer) {
        document.addEventListener('mousemove', function(e) {
            var mouseX = e.clientX / window.innerWidth;
            var mouseY = e.clientY / window.innerHeight;
            
            orbs.forEach(function(orb, index) {
                var speed = (index + 1) * 20;
                var x = (mouseX - 0.5) * speed;
                var y = (mouseY - 0.5) * speed;
                orb.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            });
        });
    }
    
    // ===================================
    // AURORA MOUSE INTERACTION
    // ===================================
    var auroras = document.querySelectorAll('.aurora');
    
    if (auroras.length > 0) {
        document.addEventListener('mousemove', function(e) {
            var mouseX = e.clientX / window.innerWidth;
            var mouseY = e.clientY / window.innerHeight;
            
            auroras.forEach(function(aurora, index) {
                var intensity = (index + 1) * 5;
                aurora.style.transform = 'translate(' + (mouseX * intensity) + '%, ' + (mouseY * intensity) + '%)';
            });
        });
    }
    
    // ===================================
    // COUNTER ANIMATION
    // ===================================
    var counters = document.querySelectorAll('.counter-number');
    
    if (counters.length > 0) {
        var counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(function(counter) {
            counterObserver.observe(counter);
        });
    }
    
    function animateCounter(element, target) {
        var current = 0;
        var increment = target / 50;
        var duration = 2000;
        var stepTime = duration / 50;
        
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }
    
    // ===================================
    // HERO IMAGE PARALLAX
    // ===================================
    var heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        window.addEventListener('scroll', function() {
            var scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                heroImage.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
            }
        });
    }
    
    // ===================================
    // TEXT SPLIT ANIMATION
    // ===================================
    var splitTexts = document.querySelectorAll('.split-text');
    
    splitTexts.forEach(function(el) {
        var text = el.textContent;
        el.textContent = '';
        
        text.split('').forEach(function(char, index) {
            var span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = (index * 0.05) + 's';
            span.classList.add('split-char');
            el.appendChild(span);
        });
    });
    
    // ===================================
    // NOISE OVERLAY (optional - add to body)
    // ===================================
    var noiseOverlay = document.createElement('div');
    noiseOverlay.classList.add('noise-overlay');
    document.body.appendChild(noiseOverlay);
    
    // ===================================
    // TESTIMONIALS CAROUSEL
    // ===================================
    var testimonialsCarousel = document.querySelector('.testimonials-carousel');
    var testimonialCards = document.querySelectorAll('.testimonial-card');
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    var testimonialsDotsContainer = document.querySelector('.testimonials-dots');
    
    if (testimonialsCarousel && testimonialCards.length > 0) {
        var currentTestimonial = 0;
        var testimonialCount = testimonialCards.length;
        var cardWidth = 380; // card width + gap
        var autoScrollInterval;
        
        // Create dots
        testimonialCards.forEach(function(card, index) {
            var dot = document.createElement('div');
            dot.classList.add('testimonial-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', function() {
                scrollToTestimonial(index);
            });
            testimonialsDotsContainer.appendChild(dot);
        });
        
        var testimonialDots = document.querySelectorAll('.testimonial-dot');
        
        function scrollToTestimonial(index) {
            index = Math.max(0, Math.min(index, testimonialCount - 1));
            currentTestimonial = index;
            
            var scrollPosition = index * cardWidth;
            testimonialsCarousel.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
            
            updateTestimonialDots();
        }
        
        function updateTestimonialDots() {
            testimonialDots.forEach(function(dot, i) {
                dot.classList.remove('active');
                if (i === currentTestimonial) {
                    dot.classList.add('active');
                }
            });
        }
        
        function nextTestimonial() {
            var next = currentTestimonial + 1;
            if (next >= testimonialCount) next = 0;
            scrollToTestimonial(next);
        }
        
        function prevTestimonial() {
            var prev = currentTestimonial - 1;
            if (prev < 0) prev = testimonialCount - 1;
            scrollToTestimonial(prev);
        }
        
        if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
        if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
        
        // Auto scroll
        function startAutoScroll() {
            autoScrollInterval = setInterval(nextTestimonial, 5000);
        }
        
        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }
        
        testimonialsCarousel.addEventListener('mouseenter', stopAutoScroll);
        testimonialsCarousel.addEventListener('mouseleave', startAutoScroll);
        
        // Update current on manual scroll
        testimonialsCarousel.addEventListener('scroll', function() {
            var scrollLeft = testimonialsCarousel.scrollLeft;
            var newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== currentTestimonial) {
                currentTestimonial = newIndex;
                updateTestimonialDots();
            }
        });
        
        startAutoScroll();
    }
    
    // ===================================
    // CLIENTS SECTION ANIMATION
    // ===================================
    var clientsSection = document.querySelector('.clients-section');
    var clientLogos = document.querySelectorAll('.client-logo');
    
    if (clientsSection && clientLogos.length > 0) {
        var clientsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    clientLogos.forEach(function(logo, index) {
                        setTimeout(function() {
                            logo.classList.add('visible');
                        }, index * 100);
                    });
                    clientsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        clientsObserver.observe(clientsSection);
    }
    
    // ===================================
    // BACK TO TOP BUTTON
    // ===================================
    var backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===================================
    // NEWSLETTER FORM
    // ===================================
    var newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = newsletterForm.querySelector('.newsletter-input');
            if (input.value) {
                // Show success animation
                var btn = newsletterForm.querySelector('.newsletter-btn');
                var originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> ¡Suscrito!';
                btn.style.background = '#10B981';
                
                setTimeout(function() {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    input.value = '';
                }, 3000);
            }
        });
    }
    
    // ===================================
    // FOOTER ANIMATIONS
    // ===================================
    var footerPremium = document.querySelector('.footer-premium');
    
    if (footerPremium) {
        var footerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    footerPremium.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        footerObserver.observe(footerPremium);
    }
    
    // ===================================
    // SECTION HEADERS ANIMATION (Testimonials, Clients)
    // ===================================
    var testimonialHeader = document.querySelector('.testimonials-section .section-header');
    var clientsHeader = document.querySelector('.clients-section .section-header');
    
    if (testimonialHeader) {
        var headerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    headerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        headerObserver.observe(testimonialHeader);
    }
    
    if (clientsHeader) {
        var clientsHeaderObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    clientsHeaderObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        clientsHeaderObserver.observe(clientsHeader);
    }
    
    // ===================================
    // FOOTER DROPDOWN TOGGLE (Mobile)
    // ===================================
    var footerDropdowns = document.querySelectorAll('.footer-links-column, .footer-contact-column');
    
    if (footerDropdowns.length > 0) {
        // Detectar si es dispositivo táctil
        var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice || window.innerWidth <= 992) {
            footerDropdowns.forEach(function(dropdown) {
                var title = dropdown.querySelector('.footer-column-title');
                
                title.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Cerrar otros dropdowns
                    footerDropdowns.forEach(function(other) {
                        if (other !== dropdown) {
                            other.classList.remove('active');
                        }
                    });
                    
                    // Toggle actual
                    dropdown.classList.toggle('active');
                });
            });
        }
    }
    
    // ===================================
    // WELDING TEXT EFFECT - Una chispa que recorre
    // ===================================
    var weldingTexts = document.querySelectorAll('.welding-text');
    
    if (weldingTexts.length > 0) {
        weldingTexts.forEach(function(element) {
            var text = element.getAttribute('data-text');
            if (!text) return;
            
            var weldingObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        startWeldingEffect(element, text);
                        weldingObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            weldingObserver.observe(element);
        });
    }
    
    function startWeldingEffect(element, text) {
        element.innerHTML = '';
        var chars = text.split('');
        var charElements = [];
        
        // Crear todos los caracteres ocultos
        chars.forEach(function(char, index) {
            var span = document.createElement('span');
            span.className = 'welding-char';
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            element.appendChild(span);
            charElements.push(span);
        });
        
        // Crear la chispa única
        var spark = document.createElement('div');
        spark.className = 'welding-spark';
        element.appendChild(spark);
        
        // Obtener dimensiones del contenedor
        var containerRect = element.getBoundingClientRect();
        
        // Animar la chispa recorriendo el texto
        var currentIndex = 0;
        var speed = 35; // ms entre caracteres
        
        // Activar chispa
        setTimeout(function() {
            spark.classList.add('active');
        }, 100);
        
        var typingInterval = setInterval(function() {
            if (currentIndex < charElements.length) {
                var currentChar = charElements[currentIndex];
                
                // Revelar caracter
                currentChar.classList.add('revealed', 'active');
                
                // Posicionar chispa en el caracter actual
                var charRect = currentChar.getBoundingClientRect();
                var sparkX = charRect.left - containerRect.left + (charRect.width / 2);
                var sparkY = charRect.top - containerRect.top + (charRect.height / 2);
                
                spark.style.left = sparkX + 'px';
                spark.style.top = sparkY + 'px';
                
                // Desactivar brillo del caracter anterior
                if (currentIndex > 0) {
                    var prevChar = charElements[currentIndex - 1];
                    prevChar.classList.remove('active');
                    prevChar.classList.add('fade');
                }
                
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                
                // Desactivar último caracter y ocultar chispa
                setTimeout(function() {
                    if (charElements.length > 0) {
                        var lastChar = charElements[charElements.length - 1];
                        lastChar.classList.remove('active');
                        lastChar.classList.add('fade');
                    }
                    spark.classList.remove('active');
                    spark.style.opacity = '0';
                }, 200);
            }
        }, speed);
    }
    
});
