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
    
});
