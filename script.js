const baseUrl = 'https://fathomless-shelf-54969.herokuapp.com/bodies?autoplay=1'

document.body.style.cursor = 'crosshair'

//deklarera alla planet
const sun = document.getElementById('sun')
const mercury = document.getElementById('mercury')
const venus = document.getElementById('venus')
const earth = document.getElementById('earth')
const mars = document.getElementById('mars')
const jupiter = document.getElementById('jupiter')
const saturn = document.getElementById('saturn')
const uranus = document.getElementById('uranus')
const neptune = document.getElementById('neptune')
//deklarera alla extra planet
const pluto = document.getElementById('pluto')
const halleysComet = document.getElementById('halleys-comet')
const asteroidBelt = document.getElementById('asteroid-belt')
//deklarera meddelande container
const comMsgs = document.getElementById('coms-msgs')
//deklarera alla ljud
const falcoOne = document.getElementById('falco-one')
const falcoTwo = document.getElementById('falco-two')
const falcoThree = document.getElementById('falco-three')
const peppyOne = document.getElementById('peppy-one')
const peppyTwo = document.getElementById('peppy-two')
const peppyThree = document.getElementById('peppy-three')
const slippyOne = document.getElementById('slippy-one')
const slippyTwo = document.getElementById('slippy-two')
const slippyThree = document.getElementById('slippy-three')

//deklarera mute och unmute controls
const audio = document.querySelectorAll('audio')
const mute = document.getElementById('mute')
const unmute = document.getElementById('unmute')


//mute o unmute knapp event listeners
mute.addEventListener('click', () => {
    for (let i = 0; i < audio.length; i++) {
        audio[i].volume = 0
        mute.style.backgroundColor = 'white'
        mute.style.color = 'black'
        unmute.style.backgroundColor = 'black'
        unmute.style.color = 'white'
    }
});

unmute.addEventListener('click', () => {
    for (let i = 0; i < audio.length; i++) {
        audio[i].volume = 1
        unmute.style.backgroundColor = 'white'
        unmute.style.color = 'black'
        mute.style.backgroundColor = 'black'
        mute.style.color = 'white'
    }
});


//planet sök function
document.getElementById('planet-search').addEventListener('keyup', async (e) => {
    if (e.key == 'Enter') {
        page = 1
        let input = document.getElementById('planet-search').value
        document.getElementById('planet-results').innerHTML = '';
        let planets = await getPlanets()
        let planetMatch = planets.bodies
        planetCheck(planetMatch, input)
        setTimeout(() => {
            document.getElementById('coms-msgs').innerHTML = ''
        }, 5000)

    }
})
//funktion att kollas om user input finns på planet listan
function planetCheck(planetMatch, input) {
    let noMatch = []
    for (let i = 0; i < planetMatch.length; i++) {
        if (planetMatch[i].name.includes(input)) {
            let newList = document.createElement('li')
            newList.innerText = planetMatch[i].name
            newList.addEventListener('click', function () {
                window.localStorage.setItem('planet', JSON.stringify(planetMatch[i]))
                location.href = 'planet-page.html'
            })
            document.querySelector('#planet-results').appendChild(newList)
        } else if (planetMatch[i].name.includes(input) == false) {
            noMatch.push(planetMatch[i].name)
        }
    }
    if (noMatch.length == 9) {
        comMsgs.innerHTML = 'Falco: <br> no results found'
        falcoOne.play()
    }

}

// event listeners & mouse enters för varje planet (hidden items skickas i till local storage individuelt och till hidden.html)

sun.addEventListener('click', async function () {
    let i = 0
    planetUI(i)
})

sun.onmouseenter = function () {
    comMsgs.innerHTML = 'Slippy:<br> The Sun is a star not a planet'
    slippyOne.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
    }, 5000);
}

mercury.addEventListener('click', async function () {
    let i = 1
    planetUI(i)
})

mercury.onmouseenter = function () {
    comMsgs.innerHTML = 'Peppy:<br> Mercury is the smallest planet'
    peppyOne.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
    }, 5000);
}

venus.addEventListener('click', async function () {
    let i = 2
    planetUI(i)
})

venus.onmouseenter = function () {
    comMsgs.innerHTML = 'Falco:<br> Venus spins in the opposite direction from most planets'
    falcoOne.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
    }, 5000);
}

earth.addEventListener('click', async function () {
    let i = 3
    planetUI(i)
})

earth.onmouseenter = function () {
    comMsgs.innerHTML = 'Slippy:<br> Earth is mostly water'
    slippyTwo.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
    }, 5000);
}

mars.addEventListener('click', async function () {
    let i = 4
    planetUI(i)
})

mars.onmouseenter = function () {
    comMsgs.innerHTML = 'Peppy:<br> Mars is named afer the Roman god of war'
    peppyTwo.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
    }, 5000);
}

jupiter.addEventListener('click', async function () {
    let i = 5
    planetUI(i)
})

jupiter.onmouseenter = function () {
    comMsgs.innerHTML = 'Falco:<br> The red circle is called the Great Red Spot and its a storm that has been happening for hundreds of years'
    falcoTwo.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
    }, 5000);
}

saturn.addEventListener('click', async function () {
    let i = 6
    planetUI(i)
})

saturn.onmouseenter = function () {
    comMsgs.innerHTML = 'Slippy:<br> Saturns rings are made of chunks of ice and rock'
    slippyThree.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
    }, 5000);
}

uranus.addEventListener('click', async function () {
    let i = 7
    planetUI(i)
})

uranus.onmouseenter = function () {
    comMsgs.innerHTML = 'Peppy:<br> Uranus is unique in that it rotates on its side'
    peppyThree.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
    }, 5000);
}

neptune.addEventListener('click', async function () {
    let i = 8
    planetUI(i)
})

neptune.onmouseenter = function () {
    comMsgs.innerHTML = 'Falco:<br> Neptune was discovered 23rd September 1846'
    falcoThree.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
    }, 5000);
}

// hidden items börja har 
pluto.addEventListener('click', function () {
    window.localStorage.setItem('id', 1)
    location.href = "hidden.html"
})

pluto.onmouseenter = function () {
    pluto.style.backgroundSize = "50%"
    comMsgs.innerHTML = 'Falco:<br> What is that? <br> Click to go closer'
    falcoOne.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
        pluto.style.backgroundSize = "10%"
    }, 5000);

}

asteroidBelt.addEventListener('click', function () {
    window.localStorage.setItem('id', 2)
    location.href = "hidden.html"
})

asteroidBelt.onmouseenter = function () {
    asteroidBelt.style.backgroundSize = "50%"
    comMsgs.innerHTML = "Slippy:<br> I dont like the look of it... <br> I dont think you should click"
    slippyOne.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
        asteroidBelt.style.backgroundSize = "10%"
    }, 5000);

}

halleysComet.addEventListener('click', function () {
    window.localStorage.setItem('id', 3)
    location.href = "hidden.html"
})

halleysComet.onmouseenter = function () {
    halleysComet.style.backgroundSize = "70%"
    comMsgs.innerHTML = "Peppy:<br> I cant tell what it is... <br> Click if you want to go check "
    peppyOne.play()
    setTimeout(() => {
        comMsgs.innerHTML = ''
        halleysComet.style.backgroundSize = "30%"
    }, 5000);

}

// funktion at tas emot planet ID och sparas den i local storage, sen skickas användare vidare
async function planetUI(i) {
    let planets = await getPlanets()
    let selected = planets.bodies[i]
    window.localStorage.setItem('planet', JSON.stringify(selected))
    location.href = 'planet-page.html'
}

// fetch funktion
async function getPlanets() {
    try {
        let response = await fetch(baseUrl, {
            method: 'GET',
            headers: {
                'x-zocom': 'solaris-PxtRFopRoKZwir25'
            }
        })

        let data = await response.json()
        return await data
    } catch (err) {
        console.error(err)
        // alert till användare om nånting går fel med fetch
        alert('error 404 - the solar system you are looking for is not found')
    }
}