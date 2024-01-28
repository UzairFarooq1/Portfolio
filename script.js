document.addEventListener('DOMContentLoaded', function () {
    var talents = [
        "A passionate Web Developer",
        "An experienced Python developer",
        "Skilled in Machine Learning and AI"
    ];

    var options = {
        strings: talents,
        typeSpeed: 50, 
        backSpeed: 20, 
        loop: true, 
    };

    var typedOutput = document.getElementById('talent');

    if (typedOutput) {
        var typed = new Typed(typedOutput, options);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuContainer = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function () {
        menuContainer.classList.toggle('active');
    });

    // Close the menu when a navigation link is clicked
    var navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menuContainer.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var talents = [
        "Web Developer",
        "Mobile App developer",
        "Machine Learning and AI"
    ];

    var options = {
        strings: talents,
        typeSpeed: 50,
        backSpeed: 20,
        loop: true,
    };

    var typedOutput = document.getElementById('skills');

    if (typedOutput) {
        var typed = new Typed(typedOutput, options);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var talents = [
        "English",
        "Swahili",
        "Chinese"
    ];

    var options = {
        strings: talents,
        typeSpeed: 50,
        backSpeed: 20,
        loop: true,
    };

    var typedOutput = document.getElementById('language');

    if (typedOutput) {
        var typed = new Typed(typedOutput, options);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var projectCards = document.querySelectorAll('.project-card');

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    projectCards.forEach(function (card) {
        observer.observe(card);
    });
});





