// script.js
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
