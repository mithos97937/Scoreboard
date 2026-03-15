let homeScore = document.getElementById("home-score")

let guestScore = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0

function addHome1(){
    homePoints += 1
    homeScore.textContent = homePoints
}

function addHome2(){
    homePoints += 2
    homeScore.textContent = homePoints
}

function addHome3(){
    homePoints += 3
    homeScore.textContent = homePoints
}


function addGuest1() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}


function addGuest2() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function addGuest3() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

window.addHome1 = addHome1
window.addHome2 = addHome2
window.addHome3 = addHome3

window.addGuest1 = addGuest1
window.addGuest2 = addGuest2
window.addGuest3 = addGuest3