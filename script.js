document.addEventListener('DOMContentLoaded', () => {

    // Collapse paper summaries into controls beside each paper's resource links.
    document.querySelectorAll('.paper-summary').forEach((summary, index) => {
        const summaryId = `paper-summary-${index + 1}`;
        const paperItem = summary.closest('.paper-item');
        let paperLinks = paperItem.querySelector('.paper-links');

        if (!paperLinks) {
            paperLinks = document.createElement('div');
            paperLinks.className = 'paper-links';
            summary.before(paperLinks);
        }

        paperLinks.after(summary);

        summary.id = summaryId;
        summary.hidden = true;

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'paper-link summary-toggle';
        toggle.setAttribute('aria-controls', summaryId);
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="fas fa-align-left" aria-hidden="true"></i><span>Summary</span>';

        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!isExpanded));
            summary.hidden = isExpanded;
            toggle.querySelector('span').textContent = isExpanded ? 'Summary' : 'Hide Summary';
        });

        paperLinks.append(toggle);
    });


    // 3. Mobile Navigation Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Faster, consistent scrolling for same-page navigation.
    const scrollDuration = 400;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.nav-link[href^="#"], .logo[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            const target = document.querySelector(link.getAttribute('href'));

            if (!target) return;

            event.preventDefault();

            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const startPosition = window.pageYOffset;
            const targetPosition = Math.max(
                0,
                target.getBoundingClientRect().top + startPosition - navbarHeight
            );
            const distance = targetPosition - startPosition;
            const startTime = performance.now();

            const animateScroll = currentTime => {
                const elapsed = currentTime - startTime;
                const progress = reducedMotion ? 1 : Math.min(elapsed / scrollDuration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                window.scrollTo(0, startPosition + distance * easedProgress);

                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                } else if (window.location.hash !== link.getAttribute('href')) {
                    history.pushState(null, '', link.getAttribute('href'));
                }
            };

            requestAnimationFrame(animateScroll);
        });
    });

    // 4. Navigation Active State
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // 5. Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: stop observing once animated
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
