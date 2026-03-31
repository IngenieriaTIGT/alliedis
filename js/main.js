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
    // CARRUSEL DE NOSOTROS - Scroll Pinned
    // ===================================
    var aboutSection = document.querySelector('.about-section');
    var aboutCarouselContainer = document.querySelector('.about-carousel-container');
    var aboutSlides = document.querySelectorAll('.about-slide');
    var aboutProgressDots = document.querySelectorAll('.about-progress-dot');
    var aboutSectionHeader = document.querySelector('.about-section .section-header');

    if (aboutSection && aboutSlides.length > 0) {
        var aboutTotalSlides = aboutSlides.length;
        var aboutCurrentSlide = 0;
        var aboutPinStart = 0;
        var aboutPinDuration = 0;
        var aboutSlideHeight = 500;
        var aboutHeaderAnimated = false;

        // Detectar si es pantalla pequeña (móvil/tablet)
        function isAboutMobile() {
            return window.innerWidth <= 992;
        }

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
            // En móvil/tablet, mostrar todos los slides sin animación pinned
            if (isAboutMobile()) {
                aboutSectionHeader.classList.remove('sticky');
                aboutCarouselContainer.classList.remove('is-pinned', 'is-unpinned');

                // Mostrar todos los slides en móvil
                aboutSlides.forEach(function(slide) {
                    slide.classList.add('active', 'show-content');
                });

                // Solo animar el header cuando entra en vista
                var sectionRect = aboutSection.getBoundingClientRect();
                var inSection = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

                if (inSection && !aboutHeaderAnimated) {
                    aboutSectionHeader.classList.add('visible');
                    aboutHeaderAnimated = true;
                }

                if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) {
                    aboutSectionHeader.classList.remove('visible');
                    aboutHeaderAnimated = false;
                }
                return;
            }

            // Comportamiento normal en desktop
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
                if (isAboutMobile()) return; // No hacer nada en móvil

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

        // Solo ajustar altura en desktop
        if (!isAboutMobile()) {
            aboutSection.style.height = (aboutSlideHeight * aboutTotalSlides + 800) + 'px';
        } else {
            aboutSection.style.height = 'auto';
        }

        aboutObserver.observe(aboutSection);

        window.addEventListener('scroll', updateAboutAnimation);
        window.addEventListener('resize', function() {
            calculateAboutPositions();
            // Ajustar altura según el tamaño de pantalla
            if (isAboutMobile()) {
                aboutSection.style.height = 'auto';
            } else {
                aboutSection.style.height = (aboutSlideHeight * aboutTotalSlides + 800) + 'px';
            }
            updateAboutAnimation();
        });
    }
    
    // ===================================
    // CARRUSEL DE SERVICIOS - Scroll Pinned
    // ===================================
    var servicesSection = document.querySelector('.services-section');
    var carouselContainer = document.querySelector('.services-carousel-container');
    var slides = document.querySelectorAll('.service-slide');
    var progressDots = document.querySelectorAll('.progress-dot');
    var sectionHeader = document.querySelector('.services-section .section-header');

    if (servicesSection && slides.length > 0) {
        var totalSlides = slides.length;
        var currentSlide = 0;
        var pinStart = 0;
        var pinDuration = 0;
        var slideHeight = 500;
        var headerAnimated = false;

        // Detectar si es pantalla pequeña (móvil/tablet)
        function isMobile() {
            return window.innerWidth <= 992;
        }

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
            // En móvil/tablet, mostrar todos los slides sin animación pinned
            if (isMobile()) {
                sectionHeader.classList.remove('sticky');
                carouselContainer.classList.remove('is-pinned', 'is-unpinned');

                // Mostrar todos los slides en móvil
                slides.forEach(function(slide) {
                    slide.classList.add('active', 'show-content');
                });

                // Solo animar el header cuando entra en vista
                var sectionRect = servicesSection.getBoundingClientRect();
                var inSection = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

                if (inSection && !headerAnimated) {
                    sectionHeader.classList.add('visible');
                    headerAnimated = true;
                }

                if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) {
                    sectionHeader.classList.remove('visible');
                    headerAnimated = false;
                }
                return;
            }

            // Comportamiento normal en desktop
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
                if (isMobile()) return; // No hacer nada en móvil

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

        // Solo ajustar altura en desktop
        if (!isMobile()) {
            servicesSection.style.height = (slideHeight * totalSlides + 800) + 'px';
        } else {
            servicesSection.style.height = 'auto';
        }

        observer.observe(servicesSection);

        window.addEventListener('scroll', updateAnimation);
        window.addEventListener('resize', function() {
            calculatePositions();
            // Ajustar altura según el tamaño de pantalla
            if (isMobile()) {
                servicesSection.style.height = 'auto';
            } else {
                servicesSection.style.height = (slideHeight * totalSlides + 800) + 'px';
            }
            updateAnimation();
        });
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
    
    // ===================================
    // DASHBOARD METRICS COUNTER
    // ===================================
    var metricNumbers = document.querySelectorAll('.metric-number');
    
    if (metricNumbers.length > 0) {
        var dashboardObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    metricNumbers.forEach(function(num) {
                        var target = parseInt(num.getAttribute('data-target'));
                        animateDashboardCounter(num, target);
                    });
                    dashboardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        var dashboardContainer = document.querySelector('.dashboard-container');
        if (dashboardContainer) {
            dashboardObserver.observe(dashboardContainer);
        }
    }
    
    function animateDashboardCounter(element, target) {
        var current = 0;
        var increment = target / 60;
        var duration = 2000;
        var stepTime = duration / 60;
        
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(current));
            }
        }, stepTime);
    }
    
    function formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num.toString();
    }
    
    // ===================================
    // SEQUENCE ANIMATION - GSAP
    // ===================================
    var sequenceContainer = document.querySelector('.sequence-container');
    
    if (sequenceContainer && typeof gsap !== 'undefined') {
        var progressDots = document.querySelectorAll('.progress-dot');
        var currentStep = 0;
        
        function updateProgress(step) {
            progressDots.forEach(function(dot, index) {
                dot.classList.remove('active', 'completed');
                if (index < step) {
                    dot.classList.add('completed');
                } else if (index === step) {
                    dot.classList.add('active');
                }
            });
        }
        
        function runSequence() {
            var tl = gsap.timeline({
                onComplete: function() {
                    setTimeout(function() {
                        gsap.set('.seq-element', { opacity: 0, scale: 1 });
                        gsap.set('#seq-arrow-1 path, #seq-arrow-2 path, #seq-arrow-3 path', { strokeDashoffset: 40 });
                        gsap.set('#seq-arrow-1 polygon, #seq-arrow-2 polygon, #seq-arrow-3 polygon', { opacity: 0 });
                        gsap.set('#seq-chart rect', { scaleY: 0, transformOrigin: 'bottom' });
                        currentStep = 0;
                        updateProgress(0);
                        setTimeout(runSequence, 1000);
                    }, 2000);
                }
            });
            
            // Step 1: Logo aparece
            tl.to('#seq-logo', {
                opacity: 1,
                scale: 1.1,
                duration: 0.8,
                ease: 'back.out(1.7)',
                onStart: function() { updateProgress(0); }
            });
            
            // Step 2: Flecha 1 se anima
            tl.to('#seq-arrow-1 path', {
                strokeDashoffset: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, '+=0.3');
            tl.to('#seq-arrow-1 polygon', {
                opacity: 1,
                duration: 0.3
            }, '-=0.2');
            
            // Step 3: Redes sociales aparecen
            tl.to('#seq-social', {
                opacity: 1,
                duration: 0.6,
                onStart: function() { updateProgress(1); }
            }, '+=0.2');
            tl.from('#seq-social circle', {
                scale: 0,
                stagger: 0.15,
                duration: 0.4,
                ease: 'back.out(1.7)'
            }, '-=0.4');
            
            // Redes sociales desaparecen
            tl.to('#seq-social', {
                opacity: 0,
                duration: 0.4,
                delay: 1
            });
            tl.to('#seq-arrow-1', {
                opacity: 0,
                duration: 0.3
            }, '-=0.2');
            
            // Step 4: Flecha 2 y Clientes
            tl.to('#seq-arrow-2 path', {
                strokeDashoffset: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, '+=0.2');
            tl.to('#seq-arrow-2 polygon', {
                opacity: 1,
                duration: 0.3
            }, '-=0.2');
            tl.to('#seq-clients', {
                opacity: 1,
                duration: 0.6,
                onStart: function() { updateProgress(2); }
            }, '+=0.2');
            tl.from('#seq-clients circle', {
                scale: 0,
                stagger: 0.1,
                duration: 0.3,
                ease: 'back.out(1.7)'
            }, '-=0.3');
            
            // Clientes desaparecen
            tl.to('#seq-clients', {
                opacity: 0,
                duration: 0.4,
                delay: 1
            });
            tl.to('#seq-arrow-2', {
                opacity: 0,
                duration: 0.3
            }, '-=0.2');
            
            // Step 5: Flecha 3 y Dinero
            tl.to('#seq-arrow-3 path', {
                strokeDashoffset: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, '+=0.2');
            tl.to('#seq-arrow-3 polygon', {
                opacity: 1,
                duration: 0.3
            }, '-=0.2');
            tl.to('#seq-money', {
                opacity: 1,
                scale: 1.2,
                duration: 0.6,
                ease: 'back.out(1.7)',
                onStart: function() { updateProgress(3); }
            }, '+=0.2');
            tl.to('#seq-money', {
                scale: 1,
                duration: 0.3
            });
            
            // Dinero desaparece
            tl.to('#seq-money', {
                opacity: 0,
                duration: 0.4,
                delay: 1
            });
            tl.to('#seq-arrow-3', {
                opacity: 0,
                duration: 0.3
            }, '-=0.2');
            
            // Step 6: Gráfica de barras
            tl.to('#seq-chart', {
                opacity: 1,
                duration: 0.5,
                onStart: function() { updateProgress(4); }
            }, '+=0.2');
            tl.fromTo('#seq-chart rect', {
                scaleY: 0
            }, {
                scaleY: 1,
                stagger: 0.1,
                duration: 0.4,
                transformOrigin: 'bottom',
                ease: 'power2.out'
            }, '-=0.3');
            tl.to('#seq-chart path', {
                strokeDashoffset: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.2');
            
            // Gráfica desaparece
            tl.to('#seq-chart', {
                opacity: 0,
                duration: 0.4,
                delay: 1
            });
            
            // Step 7: Bolsa de dinero (éxito)
            tl.to('#seq-success', {
                opacity: 1,
                scale: 1.3,
                duration: 0.8,
                ease: 'back.out(1.7)',
                onStart: function() { updateProgress(5); }
            }, '+=0.3');
            tl.to('#seq-success', {
                scale: 1,
                duration: 0.3
            });
            tl.to('#seq-success', {
                scale: 1.2,
                duration: 0.5,
                yoyo: true,
                repeat: 2,
                ease: 'power1.inOut'
            }, '+=0.2');
            
            // Logo brilla al final
            tl.to('#seq-logo', {
                scale: 1.2,
                duration: 0.5,
                ease: 'power2.out'
            }, '-=1');
            tl.to('#seq-logo', {
                scale: 1,
                duration: 0.3
            });
            
            updateProgress(6);
        }
        
        // Observer para iniciar la animación
        var sequenceObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    setTimeout(runSequence, 500);
                    sequenceObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        sequenceObserver.observe(sequenceContainer);
    }
    
    // ===================================
    // ORBIT ICONS - Línea guía desde el faro (sin efectos en el icono)
    // ===================================
    var sphereContainer = document.querySelector('.marketing-sphere-container');
    var orbitIcons = document.querySelectorAll('.orbit-icon');

    if (sphereContainer && orbitIcons.length > 0) {

        // Crear SVG overlay para la línea
        var guideSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        guideSvg.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:20;overflow:visible;';
        sphereContainer.style.position = 'relative';
        sphereContainer.appendChild(guideSvg);

        // Línea punteada
        var guideLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        guideLine.setAttribute('stroke', '#F4A300');
        guideLine.setAttribute('stroke-width', '2');
        guideLine.setAttribute('stroke-dasharray', '6,4');
        guideLine.setAttribute('opacity', '0');
        guideLine.style.transition = 'opacity 0.3s ease';
        guideSvg.appendChild(guideLine);

        // Punto en el faro
        var dotStart = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dotStart.setAttribute('r', '5');
        dotStart.setAttribute('fill', '#F4A300');
        dotStart.setAttribute('opacity', '0');
        dotStart.style.transition = 'opacity 0.3s ease';
        guideSvg.appendChild(dotStart);

        // Punto en el icono
        var dotEnd = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dotEnd.setAttribute('r', '5');
        dotEnd.setAttribute('fill', '#F4A300');
        dotEnd.setAttribute('opacity', '0');
        dotEnd.style.transition = 'opacity 0.3s ease';
        guideSvg.appendChild(dotEnd);

        // Centro relativo al contenedor
        function getCenterRelativeTo(element, container) {
            var elRect = element.getBoundingClientRect();
            var containerRect = container.getBoundingClientRect();
            return {
                x: elRect.left - containerRect.left + elRect.width / 2,
                y: elRect.top - containerRect.top + elRect.height / 2
            };
        }

        function showGuideLine(iconEl) {
            var sphereCore = sphereContainer.querySelector('.sphere-core');
            if (!sphereCore) return;

            var centerPos = getCenterRelativeTo(sphereCore, sphereContainer);
            var iconPos = getCenterRelativeTo(iconEl, sphereContainer);

            guideLine.setAttribute('x1', centerPos.x);
            guideLine.setAttribute('y1', centerPos.y);
            guideLine.setAttribute('x2', iconPos.x);
            guideLine.setAttribute('y2', iconPos.y);
            guideLine.setAttribute('opacity', '0.9');

            dotStart.setAttribute('cx', centerPos.x);
            dotStart.setAttribute('cy', centerPos.y);
            dotStart.setAttribute('opacity', '1');

            dotEnd.setAttribute('cx', iconPos.x);
            dotEnd.setAttribute('cy', iconPos.y);
            dotEnd.setAttribute('opacity', '1');
        }

        function hideGuideLine() {
            guideLine.setAttribute('opacity', '0');
            dotStart.setAttribute('opacity', '0');
            dotEnd.setAttribute('opacity', '0');
        }

        // Animar el dash de la línea
        var dashOffset = 0;
        function animateDash() {
            dashOffset -= 1;
            guideLine.setAttribute('stroke-dashoffset', dashOffset);
            requestAnimationFrame(animateDash);
        }
        animateDash();

        // Hover — solo muestra/oculta la línea, sin tocar el icono
        orbitIcons.forEach(function(icon) {
            icon.addEventListener('mouseenter', function() {
                showGuideLine(icon);
            });
            icon.addEventListener('mouseleave', function() {
                hideGuideLine();
            });
        });
    }

    // ===================================
    // Services Page - Animaciones Secuenciales
    // ===================================
    var servicesHero = document.querySelector('.services-hero');
    var serviceDetailSections = document.querySelectorAll('.service-detail-section');
    
    // Animar hero de services
    if (servicesHero) {
        var servicesHeroObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    servicesHeroObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        servicesHeroObserver.observe(servicesHero);
    }
    
    // Animar cada sección de servicio
    if (serviceDetailSections.length > 0) {
        var serviceSectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    serviceSectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        serviceDetailSections.forEach(function(section) {
            serviceSectionObserver.observe(section);
        });
    }
    
});
