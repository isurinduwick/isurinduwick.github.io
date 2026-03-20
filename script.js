// ============================================
// Modern Portfolio 2026 - JavaScript
// Isurindu Wickramasinghe
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // Mobile Navigation Toggle
    // ============================================
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                mobileNavToggle.innerHTML = '✕';
            } else {
                mobileNavToggle.innerHTML = '☰';
            }
        });

        // Close mobile menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileNavToggle.innerHTML = '☰';
            });
        });
    }

    // ============================================
    // Scroll Progress Indicator
    // ============================================
    const scrollProgress = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        if (scrollProgress) {
            scrollProgress.style.width = `${scrollPercentage}%`;
        }
    });

    // ============================================
    // Header Scroll Effect
    // ============================================
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ============================================
    // Set Current Year in Footer
    // ============================================
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ============================================
    // Dark/Light Mode Toggle
    // ============================================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');

    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        } else {
            document.body.removeAttribute('data-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
        localStorage.setItem('theme', theme);
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.hasAttribute('data-theme') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Load saved theme or system preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkScheme) {
            setTheme('dark');
        }
    }

    // Update theme if system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // ============================================
    // Typing Animation for Hero Title
    // ============================================
    const typingText = document.querySelector('.typing-text');
    const textToType = 'Isurindu Wickramasinghe';
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingText.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            typingText.style.borderRight = 'none';
        }
    }

    if (typingText) {
        typingText.textContent = '';
        typingText.style.borderRight = '3px solid var(--primary-color)';
        setTimeout(typeText, 500);
    }

    // ============================================
    // Rotating Text Animation
    // ============================================
    const rotatingText = document.querySelector('.rotating-text');
    const texts = [
        'Mobile Developer',
        'Web Developer',
        'Flutter Expert',
        'Laravel Developer',
        'Full-Stack Developer'
    ];
    let textIndex = 0;

    function rotateText() {
        if (rotatingText) {
            rotatingText.style.opacity = '0';
            rotatingText.style.transform = 'translateY(20px)';

            setTimeout(() => {
                textIndex = (textIndex + 1) % texts.length;
                rotatingText.textContent = texts[textIndex];
                rotatingText.style.opacity = '1';
                rotatingText.style.transform = 'translateY(0)';
            }, 300);
        }
    }

    if (rotatingText) {
        rotatingText.style.transition = 'all 0.3s ease';
        setInterval(rotateText, 3000);
    }

    // ============================================
    // Number Counter Animation
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (target === 100 ? '%' : '+');
            }
        };

        updateCounter();
    };

    // Intersection Observer for counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });

    // ============================================
    // Tech Stack Proficiency Animation
    // ============================================
    const proficiencyBars = document.querySelectorAll('.proficiency-fill');

    const proficiencyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                proficiencyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    proficiencyBars.forEach(bar => {
        proficiencyObserver.observe(bar);
    });

    // ============================================
    // Back to Top Button
    // ============================================
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // CV Download Button
    // ============================================
    const cvButton = document.getElementById('cv-download');
    if (cvButton) {
        cvButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Create a notification banner
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 24px;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
                z-index: 10000;
                animation: slideInRight 0.5s ease;
                font-weight: 600;
            `;
            notification.innerHTML = `
                <i class="fas fa-info-circle"></i>
                CV Download will be available soon!
            `;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.5s ease';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 3000);

            // In production, you would use:
            // window.open('path-to-your-cv.pdf', '_blank');
        });
    }

    // ============================================
    // Scroll Animations
    // ============================================
    const observeElements = document.querySelectorAll(
        '.animate-from-left, .animate-from-right, .animate-from-bottom'
    );

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    observeElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        scrollObserver.observe(element);
    });

    // ============================================
    // Smooth Scrolling for Navigation Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (mobileNavToggle) {
                        mobileNavToggle.innerHTML = '☰';
                    }
                }
            }
        });
    });

    // ============================================
    // Contact Form Handling
    // ============================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Show success message
            const submitButton = contactForm.querySelector('.btn-submit');
            const originalText = submitButton.innerHTML;

            submitButton.innerHTML = '<i class="fas fa-check"></i> <span>Message Sent!</span>';
            submitButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            submitButton.disabled = true;

            // Reset form
            contactForm.reset();

            // Create success notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 24px;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
                z-index: 10000;
                animation: slideInRight 0.5s ease;
                font-weight: 600;
            `;
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                Thank you! I'll get back to you soon.
            `;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.5s ease';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 3000);

            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 3000);

            // In production, you would send the form data to your backend:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            console.log('Form submitted:', formData);
        });
    }

    // ============================================
    // Parallax Effect for Hero Orbs
    // ============================================
    const orbs = document.querySelectorAll('.gradient-orb');

    if (orbs.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            orbs.forEach((orb, index) => {
                const speed = 0.5 + (index * 0.1);
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // ============================================
    // Add Custom Animations Keyframes
    // ============================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // Lazy Loading for Images
    // ============================================
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // ============================================
    // Console Message for Developers
    // ============================================
    console.log('%c👋 Hello, Developer!', 'color: #6366f1; font-size: 24px; font-weight: bold;');
    console.log('%cInterested in the code? Let\'s connect!', 'color: #64748b; font-size: 14px;');
    console.log('%cEmail: isurindurathmal@gmail.com', 'color: #10b981; font-size: 12px;');
    console.log('%cGitHub: github.com/isurinduwick', 'color: #10b981; font-size: 12px;');

    // ============================================
    // Performance Monitoring
    // ============================================
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`%c⚡ Page loaded in ${Math.round(loadTime)}ms`, 'color: #f59e0b; font-weight: bold;');
    });
});

// ============================================
// Project Modal Functions (Global Scope)
// ============================================

function openProjectModal(projectCard) {
    const modal = document.getElementById('project-modal');
    const modalMedia = modal.querySelector('.modal-media');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');

    // Get project data
    const projectName = projectCard.getAttribute('data-project-name');
    const mediaType = projectCard.getAttribute('data-media');
    const mediaSrc = projectCard.getAttribute('data-media-src');

    // Get project content details
    const projectContent = projectCard.querySelector('.project-content');
    const description = projectContent.querySelector('p').textContent;
    const techStack = projectContent.querySelector('.project-tech').innerHTML;
    const projectLinks = projectContent.querySelector('.project-links').innerHTML;

    // Set modal title
    modalTitle.textContent = projectName;

    // Show loading spinner
    modalMedia.innerHTML = `
        <div class="modal-loading">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;

    // Set modal media
    setTimeout(() => {
        if (mediaType === 'video') {
            modalMedia.innerHTML = `
                <video controls autoplay muted loop>
                    <source src="${mediaSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            const img = new Image();
            img.onload = () => {
                modalMedia.innerHTML = `<img src="${mediaSrc}" alt="${projectName}">`;
            };
            img.src = mediaSrc;
        }
    }, 300);

    // Set modal description
    modalDescription.innerHTML = `
        <p>${description}</p>
        <div class="project-tech">${techStack}</div>
        <div class="project-links">${projectLinks}</div>
    `;

    // Show modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Add escape key listener
    document.addEventListener('keydown', handleModalEscape);
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    const video = modal.querySelector('video');

    // Pause video if playing
    if (video) {
        video.pause();
    }

    // Hide modal
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');

    // Remove escape key listener
    document.removeEventListener('keydown', handleModalEscape);
}

function handleModalEscape(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
}

// Prevent modal content click from closing modal
document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
        modalContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});
