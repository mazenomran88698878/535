// script.js
const gamePrices = {
    "Fortnite": "مجانية",
    "Minecraft": "$29.99",
    "GTA V": "$14.99",
    "Among Us": "$4.99",
    "Valorant": "مجانية"
};

document.addEventListener("DOMContentLoaded", function() {
    const games = document.querySelectorAll("section ul li");
    games.forEach(game => {
        const gameName = game.textContent;
        if (gamePrices[gameName]) {
            game.textContent += ` - السعر: ${gamePrices[gameName]}`;
        }
    });
});
