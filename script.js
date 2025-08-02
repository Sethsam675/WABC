// filepath: c:\Users\Admin\Desktop\Portfolio\WABC\script.js

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Smooth scrolling for internal links only
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
                if (navLinks && navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                }
            }
        });
    });

    // Form validation for contact form
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
            }
        });
    }

    // Global visitor counter using CountAPI
    const counterDiv = document.getElementById('visitor-counter');
    if (counterDiv) {
        // Use a unique key for your site/page
        const namespace = 'wabc-portfolio-demo';
        const page = window.location.pathname.replace(/\W/g, '_');
        const url = `https://api.countapi.xyz/hit/${namespace}/${page}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                counterDiv.textContent = `This page has been visited ${data.value} time${data.value !== 1 ? 's' : ''}.`;
            })
            .catch(() => {
                counterDiv.textContent = 'Visitor count unavailable.';
            });
    }

    // Smooth cross-fade hero slideshow
    document.addEventListener('DOMContentLoaded', function() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const images = [
            'images/image (1).jpg',
            'images/image (2).jpg',
            'images/image (3).jpg',
            'images/image (4).jpg'
        ];
        let idx = 0;

        // Create two background layers for cross-fade
        const bg1 = document.createElement('div');
        const bg2 = document.createElement('div');
        bg1.className = bg2.className = 'hero-bg';
        bg1.style.backgroundImage = `url('${images[0]}')`;
        bg2.style.opacity = 0;
        hero.appendChild(bg1);
        hero.appendChild(bg2);

        setInterval(() => {
            const nextIdx = (idx + 1) % images.length;
            bg2.style.backgroundImage = `url('${images[nextIdx]}')`;
            bg2.style.opacity = 1;
            setTimeout(() => {
                bg1.style.backgroundImage = `url('${images[nextIdx]}')`;
                bg2.style.opacity = 0;
                idx = nextIdx;
            }, 1200); // Match transition duration
        }, 5000);
    });
});