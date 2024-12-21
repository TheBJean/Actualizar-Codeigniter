const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
canvas.width = 240;
canvas.height = 400;

let score = 0;
let level = 1;
const scoreDisplay = document.getElementById("scoreDisplay");
const restartButton = document.getElementById("restartButton");

const levelGoals = [15, 20, 25];
const colors = [
    null,
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "yellow",
    "cyan"
];

const tetrominoes = [
    [[1, 1, 1, 1]], // I
    [[2, 2, 2], [0, 2, 0]], // T
    [[3, 3, 0], [0, 3, 3]], // Z
    [[0, 4, 4], [4, 4, 0]], // S
    [[5, 5, 5], [5, 0, 0]], // L
    [[6, 6, 6], [0, 0, 6]], // J
    [[7, 7], [7, 7]] // O
];

let board = Array.from({ length: 20 }, () => Array(12).fill(0));
let currentTetromino;
let currentPosition;
let gameInterval;

function drawBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = colors[value];
                context.fillRect(x * 20, y * 20, 20, 20);
            }
        });
    });
}

function drawTetromino() {
    currentTetromino.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = colors[value];
                context.fillRect((currentPosition.x + x) * 20, (currentPosition.y + y) * 20, 20, 20);
            }
        });
    });
}

function mergeTetromino() {
    currentTetromino.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                board[currentPosition.y + y][currentPosition.x + x] = value;
            }
        });
    });
}

function resetTetromino() {
    const randomIndex = Math.floor(Math.random() * tetrominoes.length);
    currentTetromino = {
        shape: tetrominoes[randomIndex],
        color: colors[randomIndex + 1]
    };
    currentPosition = { x: 4, y: 0 };

    if (collision()) {
        alert("¡Juego terminado! Has perdido.");
        clearInterval(gameInterval);
        restartButton.style.display = "block";
    }
}

function drop() {
    currentPosition.y++;
    if (collision()) {
        currentPosition.y--;
        mergeTetromino();
        score++;
        scoreDisplay.textContent = `Puntaje: ${score} | Nivel: ${level}`;
        clearLines();
        checkLevelUp();
        resetTetromino();
        drawBoard();
    }
}

function clearLines() {
    for (let y = board.length - 1; y >= 0; y--) {
        if (board[y].every(value => value !== 0)) {
            board.splice(y, 1);
            board.unshift(Array(12).fill(0));
        }
    }
}

function checkLevelUp() {
    if (level <= levelGoals.length && score >= levelGoals[level - 1]) {
        level++;
        alert(`¡Felicidades! Has alcanzado el nivel ${level}`);
    }
}

function collision() {
    return currentTetromino.shape.some((row, y) => {
        return row.some((value, x) => {
            if (value) {
                const newX = currentPosition.x + x;
                const newY = currentPosition.y + y;
                return newX < 0 || newX >= 12 || newY >= 20 || board[newY] && board[newY][newX];
            }
            return false;
        });
    });
}

function move(direction) {
    currentPosition.x += direction;
    if (collision()) {
        currentPosition.x -= direction;
    }
}

function rotate() {
    const rotatedShape = currentTetromino.shape[0].map((_, index) =>
        currentTetromino.shape.map(row => row[index]).reverse()
    );
    const originalShape = currentTetromino.shape;
    currentTetromino.shape = rotatedShape;
    if (collision()) {
        currentTetromino.shape = originalShape;
    }
}

function update() {
    drop();
    drawBoard();
    drawTetromino();
}

function startGame() {
    score = 0;
    level = 1;
    scoreDisplay.textContent = `Puntaje: ${score} | Nivel: ${level}`;
    restartButton.style.display = "none";
    resetTetromino();
    gameInterval = setInterval(update, 800);
}

function restartGame() {
    board = Array.from({ length: 20 }, () => Array(12).fill(0));
    startGame();
}

canvas.addEventListener("click", () => {
    canvas.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            move(-1);
            break;
        case "ArrowRight":
            move(1);
            break;
        case "ArrowDown":
            drop();
            break;
        case "ArrowUp":
            rotate();
            break;
    }
});

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("restartButton").addEventListener("click", restartGame);
  