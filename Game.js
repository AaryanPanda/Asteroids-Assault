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
    return Math.floor(Math.random() * (max - min )) + min;
}

// Define asteroid IDs
let asteroidID = 0;
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
    
    const second = generateRandomNums(5, 14);
    asteroid.style.animationDuration = `${second}s`;
    
    asteroid.addEventListener('click', destroyAsteroid);
    
    gameBody.appendChild(asteroid);
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
    console.log(clickedAsteroid)
    clickedAsteroid.style.display = 'none';
    updateScore()

    // Remove the click event listener to prevent further clicks on this asteroid
    clickedAsteroid.removeEventListener('click', destroyAsteroid);

    // Generate a new asteroid to replace the destroyed one
    generateAsteroid();
}

// Initial asteroid generation
generateAsteroid();
generateAsteroid();
generateAsteroid();







//updating score and lives function
let score = 0;
let lives = 3;

// function updateScore() {
//     score += 10; 
//     document.getElementById("score").textContent = score;
// }

// function deductLife() {

//     if (asteroid.getBoundingClientRect().top>190) {


//     lives--;

//         if (lives >= 0) {
//         document.getElementById(`life${lives + 1}`).style.display = 'none'; 
//         }
        
//         if (lives === 0) {
//             window.location.href="index.html"
//         }
//     }



// }

//updating score and lives function


function updateScore() {
    score += 10; 
    document.getElementById("score").textContent = score;
}

function deductLife() {
    const asteroids = document.querySelectorAll('.asteroid');

    asteroids.forEach((asteroid) => {
        const asteroidRect = asteroid.getBoundingClientRect();

        if (asteroidRect.top > 150) {
            // Hide the asteroid
            asteroid.style.display = 'none';

            // Deduct a life
            lives--;

            if (lives >= 0) {
                // Hide the corresponding life image
                document.getElementById(`life${lives + 1}`).style.display = 'none'; 
            }
            
            if (lives === 0) {
                // Redirect to a different page when lives reach 0
                window.location.href = "index.html";
            }
        }
    });
}
