function showUp() {
    document.getElementById("arrow-up").classList.add("hidden");
    document.getElementById("arrow-down").classList.remove("hidden");
    document.getElementById("nav-content").classList.remove("hidden");
}

function showDown() {
    document.getElementById("arrow-up").classList.remove("hidden");
    document.getElementById("arrow-down").classList.add("hidden");
    document.getElementById("nav-content").classList.add("hidden");
}
const switchBtn = document.getElementById('themeSwitch');

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        switchBtn.checked = true; // Check the switch if it's dark
    }
});

// Toggle theme and save preference
switchBtn.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});