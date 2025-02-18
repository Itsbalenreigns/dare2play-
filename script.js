/*
let step = 0;

function showNextScreen() {
    step++;

    if (step === 1) {
        document.getElementById("container").innerHTML = `
            <h2>I hope you have a wonderful day!</h2>
            <button id="yesBtn" class="yes" onclick="showNextScreen()">Next</button>
        `;
    } 
    else if (step === 2) {
        document.getElementById("container").innerHTML = `
            <h2>Would you like to play a game?</h2>
            <button id="yesBtn" class="yes" onclick="showNextScreen()">Next</button>
        `;
    } 
    else if (step === 3) {
        document.getElementById("container").innerHTML = `
            <h2>Are you sure?</h2>
            <button id="yesBtn" class="no" onclick="goBack()">No</button>
            <button id="yesBtn" class="yes" onclick="showNextScreen()">Yes</button>
        `;
    } 
    else if (step === 4) {
        document.getElementById("container").innerHTML = `
            <h2>Let's Goooo!</h2>
            <button id="yesBtn" class="yes" onclick="playGame()">Next</button>
        `;
    } 
    else if (step === 5) {
        document.getElementById("container").innerHTML = `
            <h2>Will you be my girlfriend?</h2>
            <img id="loveImage" src="love1-removebg-preview.png" alt="Love Image" style="display: block; width: 150px;">
            <button id="yesBtn" class="yes" onclick="showLoveMessage()">Yes</button>
            <button class="no" onclick="increaseYesSize()">No</button>
            
        `;
    }
}

function increaseYesSize() {
    let yesButton = document.getElementById("yesBtn");
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 5) + "px";
    yesButton.style.padding = (currentSize + 5) + "px";
}

function showLoveMessage() {
    document.getElementById("container").innerHTML = `
        <h2>Thank You for coming into my life.</h2>
        <img id="loveImage" src="love1-removebg-preview.png" alt="Love Image" style="display: block; width: 150px;">
        <h2>❤️ I love you so much! ❤️</h2>
    `;
}

function playGame() {
    document.getElementById("container").innerHTML = `
        <h2>Are you ready?</h2>
        <button id="yesBtn" class="yes" onclick="showNextScreen()">Next</button>
    `;
}

function goBack() {
    if (step > 0) {
        step--;
        showNextScreen();
    }
}*/


//The button keeps jumping around every time it is clicked, making it hard to press "No".

let step = 0;

function showNextScreen() {
    step++;

    if (step === 1) {
        document.getElementById("container").innerHTML = `
            <h2>Hope you have a wonderful day!</h2>
            <button id="yesBtn" class="yes" onclick="showNextScreen()">Next</button>
        `;
    } 
    else if (step === 2) {
        document.getElementById("container").innerHTML = `
            <h2>Would you like to play a game with me?</h2>
            <button class="no" onclick="moveNoButton()">No</button>
            <button id="yesBtn" class="yes" onclick="showNextScreen()">Yes</button>
        `;
    } 
    else if (step === 3) {
        document.getElementById("container").innerHTML = `
            <h2>Are you sure?</h2>
            <button class="no" onclick="moveNoButton()">No</button>
            <button id="yesBtn" class="yes" onclick="showNextScreen()">Yes</button>
        `;
    } 
    else if (step === 4) {
        document.getElementById("container").innerHTML = `
            <h2>Let's Goooo!</h2>
            <button id="yesBtn" class="yes" onclick="playGame()">Next</button>
        `;
    } 
    else if (step === 5) {
        document.getElementById("container").innerHTML = `
            <h2>Will you be my girlfriend?</h2>
            <img id="loveImage" src="love1-removebg-preview.png" alt="Love Image" style="display: block; width: 150px;">
            <button id="yesBtn" class="yes" onclick="showLoveMessage()">Yes</button>
            <button class="no" id="noBtn" onclick="moveNoButton()">No</button>
        `;
    }
}

function moveNoButton() {
    let noButton = document.getElementById("noBtn");

    // Generate random positions within the viewport
    let maxWidth = window.innerWidth - noButton.clientWidth;
    let maxHeight = window.innerHeight - noButton.clientHeight;

    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    // Apply new position
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

function showLoveMessage() {
    document.getElementById("container").innerHTML = `
        <h2 id="loveText" class="fade-scale">Thank You for coming into my life.</h2>
        <img id="loveImage" class="fade-scale" src="love1-removebg-preview.png" alt="Love Image">
        <h2 id="loveText2" class="fade-scale">❤️ I love you so much! ❤️</h2>
    `;
}



function playGame() {
    document.getElementById("container").innerHTML = `
        <h2>Are you ready for the game?</h2>
        <button id="yesBtn" class="yes" onclick="showNextScreen()">Yes</button>
    `;
}

function goBack() {
    if (step > 0) {
        step--;
        showNextScreen();
    }
}
