// Initialize GSAP 
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1
    });
    gsap.to(cursorFollower, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.3
    });
});

// Navbar Section Functionality
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Toggle Mobile Menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click (for mobile view)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: 'power2.inOut'
            });
        }
    });
});

// Hero Section Animations
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    const heroRole = document.querySelector('.hero h2');
    const heroDesc = document.querySelector('.hero .description');
    const ctaButtons = document.querySelector('.cta-buttons');

    const splitText = (element) => {
        const text = element.textContent;
        const chars = text.split('');
        element.textContent = '';
        chars.forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char;
            element.appendChild(span);
        });
        return chars.length;
    };

    splitText(heroTitle);
    splitText(heroRole);

    const tl = gsap.timeline();
    tl.from('.hero h1 span', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power4.out'
    })
    .from('.hero h2 span', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power4.out'
    }, '-=0.5')
    .from(heroDesc, {
        opacity: 0,
        y: 20,
        duration: 0.8
    }, '-=0.3')
    .from(ctaButtons, {
        opacity: 0,
        y: 20,
        duration: 0.8
    }, '-=0.5');
});
