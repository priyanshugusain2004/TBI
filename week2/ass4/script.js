// Dynamic Greeting Message based on Time of Day
window.onload = function () {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greetingMessage;

    if (hour < 12) {
        greetingMessage = '🌅 Good Morning, Priyanshu!';
    } else if (hour < 18) {
        greetingMessage = '☀️ Good Afternoon, Priyanshu!';
    } else {
        greetingMessage = '🌙 Good Evening, Priyanshu!';
    }

    greetingElement.innerText = greetingMessage;
};

// Smooth scroll for navigation
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
let isDark = false;

themeToggleButton.addEventListener('click', function () {
    isDark = !isDark;
    document.body.classList.toggle('dark-mode', isDark);
    themeToggleButton.innerText = isDark ? '🌞 Switch to Light Theme' : '🌙 Switch to Dark Theme';
});
