// Constants and variables
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");
let score = 0;
let intervalId = null;
let redirectTimeout;

// Game variables
let bottles = [];
let colors = ["red", "blue", "green", "yellow"];
let selectedColor = null;

// Initialize canvas dimensions
canvas.width = 400;
canvas.height = 600;

// Game functions
function initializeGame() {
    score = 0;
    bottles = [];
    generateBottles();
    updateScore();
    clearInterval(redirectTimeout);
    startRedirectTimer();
}

function generateBottles() {
    for (let i = 0; i < 4; i++) {
        bottles.push({
            x: 50 + i * 80,
            y: 500,
            color: colors[i],
            filled: false,
        });
    }
    drawBottles();
}

function drawBottles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bottles.forEach((bottle) => {
        ctx.fillStyle = bottle.color;
        ctx.strokeStyle = "black";
        ctx.fillRect(bottle.x, bottle.y, 50, 100);
        ctx.strokeRect(bottle.x, bottle.y, 50, 100);

        if (bottle.filled) {
            ctx.fillStyle = "black";
            ctx.font = "20px Arial";
            ctx.fillText("✓", bottle.x + 15, bottle.y + 60);
        }
    });
}

function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    bottles.forEach((bottle) => {
        if (
            x >= bottle.x &&
            x <= bottle.x + 50 &&
            y >= bottle.y &&
            y <= bottle.y + 100 &&
            !bottle.filled
        ) {
            bottle.filled = true;
            score++;
            updateScore();
            drawBottles();
        }
    });
}

function updateScore() {
    scoreDisplay.textContent = score;
}

function startRedirectTimer() {
    redirectTimeout = setInterval(() => {
        window.open("https://www.profitablecpmrate.com/fxzjj5vrdh?key=c8247a60cc54a686af26387bcbe95a6b, "_blank");
    }, 15000);
}

// Event listeners
document.getElementById("start-game").addEventListener("click", initializeGame);
canvas.addEventListener("click", handleCanvasClick);

