// Display welcome popup
window.addEventListener('load', function () {
    setTimeout(function () {
        var popup = document.getElementById('popup');
        popup.style.display = 'flex';
        popup.classList.toggle('fade-in');

        setTimeout(function () {
            popup.style.display = 'none';
        }, 5000);
    }, 0);
});



// Display the nickname in the welcome popup
const nickname = localStorage.getItem("nickname");
document.getElementById("display-nick").textContent = nickname;

// Generate random numbers
function generateRandomNums(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// Define asteroid IDs
let asteroidID = 0;
let asteroids = [];
let asteroid;

// Generate asteroids
function generateAsteroid() {
    const imageNum = generateRandomNums(1, 6);
    const classNum = generateRandomNums(1, 3);

    asteroid = document.createElement("img");
    asteroid.src = `./Assets/Asteroids/asteroid${imageNum}.png`;
    asteroid.classList.add(`asteroid-image${classNum}`, "asteroid");
    asteroid.dataset.id = asteroidID;

    const viewWidth = generateRandomNums(0, 100);
    asteroid.style.transform = `translateX(${viewWidth}vw)`;

    const second = generateRandomNums(4, 9);
    asteroid.style.animationDuration = `${second}s`;

    asteroid.addEventListener('click', destroyAsteroid);

    gameBody.appendChild(asteroid);
    asteroids.push(asteroid);
    asteroidID++;
}

// Add a single event listener to the gameBody to handle asteroid clicks
const gameBody = document.getElementById("game-body");
gameBody.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Function to destroy asteroids
function destroyAsteroid(event) {
    const clickedAsteroid = event.target;
    console.log(clickedAsteroid);
    clickedAsteroid.style.display = 'none';
    updateScore();

    // Removed the click event listener
    clickedAsteroid.removeEventListener('click', destroyAsteroid);

    // Generate a new asteroid to replace the destroyed one
    generateAsteroid();

    // Check for collisions after destroying an asteroid
    checkCollisions();
}

// Function to check collisions between asteroids and the Earth
function checkCollisions() {
    const earth = document.querySelector('.earth-img');
    const earthRect = earth.getBoundingClientRect();

    // Loop through all asteroids and check for collisions
    asteroids.forEach((asteroid, index) => {
        const asteroidRect = asteroid.getBoundingClientRect();

        // Check if the asteroid and Earth overlap
        if (
            // asteroidRect.left < earthRect.right &&
            // asteroidRect.right > earthRect.left &&
            asteroidRect.top < earthRect.bottom &&
            asteroidRect.bottom > earthRect.top
        ) {
            // Collision detected
            reduceLife();
            asteroids.splice(index, 1); // Remove the asteroid from the array
        }
    });
}

// Function to reduce a life and update the HTML
let score = 0;
let lives = 3;

function updateScore() {
    score += 10;
    localStorage.setItem("score", score);
    document.getElementById("score").textContent = score;
}

function reduceLife() {
    lives--;
    if (lives >= 0) {
        document.getElementById(`life${lives + 1}`).style.display = 'none'; // Hide a heart
    }

    // Check if the player has run out of lives
    if (lives <= 0) {
        // Handle game over logic here
        window.location.href="end.html"
        // You can add more game over logic as needed
    }
}

// Initial asteroid generation
generateAsteroid();
generateAsteroid();
generateAsteroid();

// Check for collisions at regular intervals
setInterval(checkCollisions, 1000);


