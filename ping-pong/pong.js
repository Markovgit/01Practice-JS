
var canvas; // HTML canvas element
var canvasContext; // Canvas drawing context
var ballX = 30; // X coordinate of the ball
var ballY = 30; // Y coordinate of the ball
var ballSpeedX = 10; // Ball movement speed on the X-axis
var ballSpeedY = 4; // Ball movement speed on the Y-axis

var player1Score = 0; // Player one's score
var player2Score = 0; // Player two's score
const WINNING_SCORE = 5; // Number of points required for victory

var showingWinScreen = false; // State for showing the win screen

var paddle1Y = 250; // Y coordinate of paddle one
var paddle2Y = 250; // Y coordinate of paddle two
const PADDLE_THICKNESS = 5; // Paddle thickness
const PADDLE_HEIGHT = 100; // Paddle height

// Function to calculate mouse position
function calculateMousePosition(e) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = e.clientX - rect.left - root.scrollLeft;
    var mouseY = e.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

// Function to handle mouse click
function handleMouseClick(e) {
    if (showingWinScreen) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
    }
}

// Initialize the game once the window is loaded
window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);

    canvas.addEventListener('mousedown', handleMouseClick);

    canvas.addEventListener('mousemove',
        function (e) {
            var mousePos = calculateMousePosition(e);
            paddle1Y = mousePos.y - (PADDLE_HEIGHT / 2);
        });
}

// Function to reset the ball
function resetBall() {
    if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
        showingWinScreen = true;
    }

    ballSpeedX = -ballSpeedX;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

// Function for computer movement (player two)
function computerMovement() {
    var paddle2CenterY = paddle2Y + (PADDLE_HEIGHT / 2);
    if (paddle2CenterY < ballY - 35) {
        paddle2Y = paddle2Y + 6;
    } else if (paddle2CenterY > ballY + 35) {
        paddle2Y = paddle2Y - 6;
    }
}

// Function for moving the ball and collision detection
function moveEverything() {
    if (showingWinScreen) {
        return;
    }

    computerMovement();

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (ballX < 0) {
        if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player2Score++;
            resetBall();
        }
    }
    if (ballX > canvas.width) {
        if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player1Score++;
            resetBall();
        }
    }
    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
}

// Function to draw all game elements
function drawEverything() {
    // draw background
    drawRect(0, 0, canvas.width, canvas.height, 'lightblue');

    drawNet();

    if (showingWinScreen) {
        canvasContext.fillStyle = 'black';
        if (player1Score >= WINNING_SCORE) {
            canvasContext.fillText("Left Player Wins", 350, 200);
        } else if (player2Score >= WINNING_SCORE) {
            canvasContext.fillText("Right Player Wins", 350, 200);
        }
        canvasContext.fillText("Click to continue", 350, 500);
        return;
    }

    // draw paddles
    drawRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'blue');
    drawRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'blue');

    // draw ball
    drawCircle(ballX, ballY, 10, 'black');

    // draw score
    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width - 100, 100);
}

// Function to draw the net
function drawNet() {
    for (var i = 0; i < canvas.height; i += 40) {
        drawRect(canvas.width / 2 - 1, i, 2, 20, 'black');
    }
}

// Function to draw a circle
function drawCircle(centerX, centerY, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

// Function to draw a rectangle
function drawRect(leftX, topY, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX, topY, width, height);
}
