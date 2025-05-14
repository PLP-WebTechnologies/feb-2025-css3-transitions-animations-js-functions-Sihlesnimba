document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("box");
    const animateBtn = document.getElementById("animateBtn");
    const themeSelect = document.getElementById("themeSelect");

    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(`${savedTheme}-theme`);
    themeSelect.value = savedTheme;

    // Handle theme change
    themeSelect.addEventListener("change", () => {
        document.body.classList.remove("light-theme", "dark-theme");
        const newTheme = themeSelect.value;
        document.body.classList.add(`${newTheme}-theme`);
        localStorage.setItem("theme", newTheme);
    });

    // Handle animation trigger
    animateBtn.addEventListener("click", () => {
        box.classList.add("animate-box");
        setTimeout(() => {
            box.classList.remove("animate-box");
        }, 500);
    });
});
