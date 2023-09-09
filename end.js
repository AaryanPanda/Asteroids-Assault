let score=localStorage.getItem("score")
let nickname=localStorage.getItem("nickname");

document.getElementById("nickname").textContent = nickname;
document.getElementById("score").textContent = score;   




var home=document.getElementById("home")
var restart=document.getElementById("restart")


home.addEventListener('click', function () {
    window.location.href="index.html"
})

restart.addEventListener('click', function () {
    window.location.href="game.html"
})
