document.addEventListener('DOMContentLoaded', function () {
    var talents = [
        "A passionate Web Developer",
        "An experienced Python developer",
        "Skilled in Machine Learning and AI"
    ];

    var options = {
        strings: talents,
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 20, // backspacing speed in milliseconds
        loop: true, // loop the animation
    };

    var typedOutput = document.getElementById('talent');

    if (typedOutput) {
        var typed = new Typed(typedOutput, options);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var talents = [
        "Web Developer",
        "Mobile App developer",
        "Machine Learning and AI"
    ];

    var options = {
        strings: talents,
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 20, // backspacing speed in milliseconds
        loop: true, // loop the animation
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
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 20, // backspacing speed in milliseconds
        loop: true, // loop the animation
    };

    var typedOutput = document.getElementById('language');

    if (typedOutput) {
        var typed = new Typed(typedOutput, options);
    }
});
