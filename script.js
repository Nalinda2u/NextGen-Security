// Intersection Observer for Reveal on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const securityForm = document.getElementById('securityForm');
const feedback = document.getElementById('formFeedback');

securityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    if (email.includes('@')) {
        feedback.style.color = '#00d4ff';
        feedback.innerText = "Request encrypted and sent successfully.";
        securityForm.reset();
    } else {
        feedback.style.color = '#ff4b2b';
        feedback.innerText = "Invalid email protocol.";
    }
});