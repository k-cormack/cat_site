let mrSnibbly = {
    name: 'Mr. Snibbly',
    moods: [
        'Classy',
        'Sassy',
        'Gone!'
    ],
    moodImg: [
        'assets/cat.jpg',
        'assets/madcat.jpg',
        'assets/awaycat.jpg'
    ],
    tolerance: 7,
    pets: 0,
    moodIndex: 0
}

let mittens = {
    name: 'Mittens',
    moods: [
        'Classy',
        'Sassy',
        'Gone!'
    ],
    moodImg: [
        'assets/kitten.jpg',
        'assets/angrykitten.jpg',
        'assets/kittenrun.jpg'
    ],
    tolerance: 3,
    pets: 0,
    moodIndex: 0
}

let activeCat = mrSnibbly

let cats = [mrSnibbly, mittens]

let catImg = document.getElementById('cat-img')
let catName = document.getElementById('name')
let mood = document.getElementById('mood')
let pets = document.getElementById('pets')
let petButton = document.getElementById('pet-button')

function draw() {
    catImg.setAttribute('src', activeCat.moodImg[activeCat.moodIndex])
    catName.innerText = activeCat.name
    mood.innerText = activeCat.moods[activeCat.moodIndex]
    pets.innerText = activeCat.pets.toString()
    if(activeCat.pets >= activeCat.tolerance * 2) {
       document.getElementById("pet-button").disabled = true;
    }
}

function pet() {
    activeCat.pets++;
    if (activeCat.pets % activeCat.tolerance == 0) {
        activeCat.moodIndex++;
    }
    draw();
}

function reset() {
    activeCat.pets = 0
    activeCat.moodIndex = 0
    document.getElementById("pet-button").disabled = false;
    draw()
}

function drawButtons() {
    let template = ""
    for (let i = 0; i < cats.length; i++) {
        const cat = cats[i];
        template += `
        <button onclick="setActiveCat(${i})">${cat.name}
        </button>
        `
    }
    document.getElementById("cat-buttons").innerHTML = template
}

function setActiveCat(catIndex) {
    activeCat = cats[catIndex]

    draw()
}



drawButtons()

draw()