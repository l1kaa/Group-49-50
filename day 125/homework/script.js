const quotes = [
    "The best way to predict the future is to invent it.",
    "Do what you can, with what you have, where you are.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Happiness depends upon ourselves.",
    "Turn your wounds into wisdom.",
    "Dream big and dare to fail.",
    "Don’t wait. The time will never be just right."
];

document.getElementById("new-quote").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
});
