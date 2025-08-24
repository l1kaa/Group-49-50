function toggleMenu() {
    const menu = document.getElementById("menu");
    const button = document.querySelector("button");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        button.textContent = "Hide Menu";
    } else {
        menu.style.display = "none";
        button.textContent = "Show Menu";
    }
}