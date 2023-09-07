
//display welcome popup
window.addEventListener('load', function () {
    setTimeout(function () {
        var popup = document.getElementById('popup');
        popup.style.display='flex';
        popup.classList.toggle('fade-in');
        

        setTimeout(function () {
            popup.style.display = 'none';
        }, 5000); 
    },0); 
});





// Display the nickname in welcome popup
const nickname = localStorage.getItem("nickname");

document.getElementById("display-nick").textContent = nickname;