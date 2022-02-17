// hämta ut data från local storage
let selectPlanet = window.localStorage.getItem('planet')
let planet = JSON.parse(selectPlanet)


// animation med hover adderad till JS, hoppad runt lite med css.
let spaceShip = document.getElementById('spaceship')
spaceShip.onmouseover = function () {
    spaceShip.style.animation = 'bank 3s linear forwards';
}
// deklarera variable att behovs globalt 
let page = 1
let perPage = 5
let moonList
// lägga data i behållare 
let planetName = document.getElementById('planet-name')
planetName.innerText = planet.name

let description = document.getElementById('description')
description.innerText = planet.desc
// go back button skickas användare tillbaka till första sidan 
let goBackBtn = document.getElementById('go-back-btn')
goBackBtn.addEventListener('click', () => {
    location.href = 'index.html'
})
// lägga data i behållare 
let latinName = document.getElementById('latin-name')
latinName.innerText = 'latin name - ' + planet.latinName

let temps = document.getElementById('temps')
let dayTemp = planet.temp.day
let nightTemp = planet.temp.night
temps.innerHTML = 'day temp:  ' + dayTemp + ' // night temp:  ' + nightTemp

let circumference = document.getElementById('circumference')
circumference.innerText = 'circumference - ' + planet.circumference

let orbitalPeriod = document.getElementById('orbital-period')
orbitalPeriod.innerText = 'orbital period - ' + planet.orbitalPeriod

let rotation = document.getElementById('rotation')
rotation.innerText = 'days in rotation - ' + planet.rotation

let distance = document.getElementById('distance')
distance.innerText = 'distance from the sun - ' + planet.distance

// next o prev page knapp o moon behållare deklareras 

let moons = document.getElementById('moons')
let moonCont = document.getElementById('moon-container')
let nextPage = document.getElementById('next-page')
let prevPage = document.getElementById('prev-page')

// om planet har ingen moons, knapp o container visas inte. 
if (planet.moons.length == 0) {
    nextPage.style.display = 'none'
    prevPage.style.display = 'none'
    moonCont.style.display = 'none'
}

//for loop att läggas i första 5 moons på listan och tas bort båda knapp om planet har mindre an 5 mån // prev button on första sidan

for (let i = 0; i < planet.moons.length && i < 5; i++) {
    if (planet.moons.length < perPage) {
        nextPage.style.display = 'none'
        prevPage.style.display = 'none'
    } else if (page == 1) {
        prevPage.style.display = 'none'
    }
    let moonList = document.createElement('li')
    moonList.innerText += planet.moons[i]
    moons.appendChild(moonList)
}

//event listeners för next o prev knappen 
nextPage.addEventListener('click', function () {
    page = page + 1
    moons.innerHTML = ''
    prevPage.style.display = 'block'
    updateUI()

})

prevPage.addEventListener('click', function () {
    page = page - 1
    moons.innerHTML = ''
    nextPage.style.display = 'block'
    updateUIrev()

})


// 2 lika funktion så att användare kan kolla genom moons, jobbas med page nummer + prev o next knapp event listeners 
function updateUI() {
    switch (page) {
        case 1: {
            pageHandler(0);
            break;
        }
        case 2: {
            pageHandler(5);
            break;
        }
        case 3: {
            pageHandler(10);
            break;
        }
        case 4: {
            pageHandler(15);
            break;
        }
        case 5: {
            pageHandler(20);
            break;
        }
        case 6: {
            pageHandler(25);
            break;
        }
        case 7: {
            pageHandler(30);
            break;
        }
        default:
            break;
    }

    function pageHandler(amount) {
        for (let i = amount; i < planet.moons.length && i < amount + 5; i++) {
            if (planet.moons.length < amount + 5) {
                nextPage.style.display = 'none'
            }
            let moonList = document.createElement('li')
            moonList.innerText += planet.moons[i]
            moons.appendChild(moonList)

        }
    }
}

function updateUIrev() {
    switch (page) {
        case 7:
            pageHandlerRev(30);
            break;
        case 6: {
            pageHandlerRev(25);
            break;
        }
        case 5: {
            pageHandlerRev(20);
            break;
        }
        case 4: {
            pageHandlerRev(15);
            break;
        }
        case 3: {
            pageHandlerRev(10);
            break;
        }
        case 2: {
            pageHandlerRev(5);
            break;
        }
        case 1: {
            pageHandlerRev(0);
            break;
        }

        default:
            break;
    }

    function pageHandlerRev(amount) {
        for (let i = amount; i < planet.moons.length && i < amount + 5; i++) {
            if (amount < 5) {
                prevPage.style.display = 'none'
            }
            let moonList = document.createElement('li')
            moonList.innerText += planet.moons[i]
            moons.appendChild(moonList)

        }
    }
}

// if kod block att sättas up rätt bild till valjed planet

let planetID = planet.id
if (planetID == 0) {
    document.getElementById('planet-img').style.backgroundImage = 'url(img/sun.jpg)'
} else if (planetID == 1) {
    document.getElementById('planet-img').style.backgroundImage = 'url(img/mercury.jpg)'
} else if (planetID == 2) {
    document.getElementById('planet-img').style.backgroundImage = 'url(img/venus.jpg)'
} else if (planetID == 3) {
    document.getElementById('planet-img').style.backgroundImage = 'url(img/earth.jpg)'
} else if (planetID == 4) {
    document.getElementById('planet-img').style.backgroundImage = 'url(img/mars.jpg)'
} else if (planetID == 5) {
    document.getElementById('planet-img').style.backgroundImage = 'url(img/jupiter.jpg)'
} else if (planetID == 6) {
    document.getElementById('planet-img').style.backgroundImage = 'url(img/saturn.jpg)'
} else if (planetID == 7) {
    document.getElementById('planet-img').style.backgroundImage = 'url(img/uranus.jpg)'
} else if (planetID == 8) {
    document.getElementById('planet-img').style.backgroundImage = 'url(img/neptune.jpg)'
}