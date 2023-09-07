//To show/hide the popup
const instructionsButton = document.getElementById('instructions');
const popupContainer = document.getElementById('popup-container');
const closeButton = document.getElementById('close-button');

instructionsButton.addEventListener('click', () => {
    popupContainer.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});



//js to work on start button 
var startButton=document.getElementById('start')
var usernameInput = document.getElementById('user');
var nicknameInput = document.getElementById('nick');
var reminder = document.getElementById('reminder-div');
var closeReminder = document.getElementById('close-reminder');


// Function to check if both fields are filled
function checkInputFields(usernameInput,nicknameInput) {
    return usernameInput.value.trim() !== '' && nicknameInput.value.trim() !== '';
}

// Event listener for the "Start" button
startButton.addEventListener('click', function () {
    if (checkInputFields(usernameInput,nicknameInput)) {         

        //get user and nickname input value and store it in local storage
        const username = document.getElementById("user").value;
        const nickname = document.getElementById("nick").value;

        // Store the values in local storage
        localStorage.setItem("username", username);
        localStorage.setItem("nickname", nickname);
        
        window.location.href = 'Game.html';
    } else {
        
        reminder.style.display = 'block';
    }
});



// Event listener to close the popup
closeReminder.addEventListener('click', function () {
    reminder.style.display = 'none';
});





