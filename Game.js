
//display welcome popup
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





// Display the nickname in welcome popup
const nickname = localStorage.getItem("nickname");

document.getElementById("display-nick").textContent = nickname;


//random numbers

function generateRandomNums(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}



// move asteroids towards earth
let gameBody = document.getElementById("game-body")
let asteroid1ID = 0
let asteroid1;
let asteroid2ID = 1
let asteroid2;
let asteroid3ID = 2
let asteroid3;
let asteroid4ID = 3
let asteroid4;


//generate asteroids
function generateAsteroids() {
    let imageNum1 = generateRandomNums(1, 6)
    let classNum = generateRandomNums(1, 3)

    gameBody.innerHTML += `<img src=./Assets/Asteroids/asteroid${imageNum1}.png  class="asteroid-image${classNum} target" id=asteroid${asteroid1ID}>`
    asteroid1 = document.getElementById(`asteroid${asteroid1ID}`)

    let viewWidth1 = generateRandomNums(0, 100)
    asteroid1.style.transform = `translateX(${viewWidth1}vw)`
    let second1 = generateRandomNums(5, 14)
    asteroid1.style.animationDuration = `${second1}s`

    // let imageNum2=generateRandomNums(1,6)

    // gameBody.innerHTML+=`<img src=./Assets/Asteroids/asteroid${imageNum2}.png  class=asteroid-image2  id=asteroid${asteroid2ID}>`
    // asteroid2 = document.getElementById(`asteroid${asteroid2ID}`)

    // let viewWidth2 = generateRandomNums(0,100)
    // asteroid2.style.transform=`translateX(${viewWidth2}vw)`
    // let second2 = generateRandomNums(3,7)
    // asteroid2.style.animationDuration= `${second2}s`   

    let imageNum3 = generateRandomNums(1, 6)

    gameBody.innerHTML += `<img src=./Assets/Asteroids/asteroid${imageNum3}.png  class="asteroid-image3 target" id=asteroid${asteroid3ID}>`
    asteroid3 = document.getElementById(`asteroid${asteroid3ID}`)

    let viewHeight1 = generateRandomNums(-50, 50)
    asteroid3.style.transform = `translateY(${viewHeight1}vh)`
    let second3 = generateRandomNums(7, 9)
    asteroid3.style.animationDuration = `${second3}s`





    let imageNum4 = generateRandomNums(1, 6)

    gameBody.innerHTML += `<img src=./Assets/Asteroids/asteroid${imageNum4}.png  class="asteroid-image4 target"  id=asteroid${asteroid4ID}>`
    asteroid4 = document.getElementById(`asteroid${asteroid4ID}`)

    let viewHeight2 = generateRandomNums(-50, 50)
    asteroid4.style.transform = `translateY(${viewHeight2}vh)`
    let second4 = generateRandomNums(4, 10)
    asteroid4.style.animationDuration = `${second4}s`





}

generateAsteroids()

//Call destroy asteroids function 
gameBody.addEventListener('click', (e) => {
    destroyAsteroids(e)
});

function destroyAsteroids(e) {

    if (e.target.classList.contains("target")) {
        e.target.style.display = 'none';
        generateAsteroids()
    }

}