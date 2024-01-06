// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.about, .services, .works, .connect');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight / 1.5) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
});
