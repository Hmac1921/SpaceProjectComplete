// hämtas ut data från local storage
let ID = window.localStorage.getItem('id')

//deklarera globalt variable
let url = './extra-items.json'
let idMatch
//deklarera ljud
const falcoTwo = document.getElementById('falco-two')
const peppyTwo = document.getElementById('peppy-two')
const slippyTwo = document.getElementById('slippy-two')
const foxSFX = document.getElementById('fox-sfx')
//deklarera container 
const itemImg = document.getElementById('item-img')
const hiddenFact = document.getElementById('hidden-fact')
const warning = document.getElementById('warning')
const character = document.getElementById('character')

// fetch funktion
let getExtras = () => {
    try {
        fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (response) {
                //kod block att adderas rätt text till container
                for (let i = 0; i < response.extras.length; i++) {
                    idMatch = response.extras[i]
                    if (ID == idMatch.id) {
                        hiddenFact.innerText = idMatch.facts
                        foxSFX.play()
                        warning.innerHTML = idMatch.message
                        warning.style.visibility = 'hidden'
                        setTimeout(() => {
                            warning.style.visibility = 'visible'
                        }, 5000);
                    }
                }

            })
        // alert att visas om nånting går fel med fetch
    } catch (err) {
        alert('404 the item you are looking for is lost in space')
    }
}
getExtras()
// if kod block at kollas ID från local storge and sättas up rätt bilder och spelas rätt ljud
if (ID == 1) {
    itemImg.style.backgroundImage = 'url(./img/pluto.jpg)'
    character.style.backgroundImage = 'url(./img/falco.png)'
    setTimeout(() => {
        falcoTwo.play()
    }, 5000);

} else if (ID == 2) {
    itemImg.style.backgroundImage = 'url(./img/asteroid-belt.jpg)'
    character.style.backgroundImage = 'url(./img/Slippy.png)'
    setTimeout(() => {
        slippyTwo.play()
    }, 5000);

} else if (ID == 3) {
    itemImg.style.backgroundImage = 'url(./img/halleys-comet.jpg)'
    character.style.backgroundImage = 'url(./img/peppy.jfif)'
    setTimeout(() => {
        peppyTwo.play()
    }, 5000);
}
// användare skickas tillbaka till första siden efter 10s
setTimeout(() => {
    location.href = 'index.html'
}, 10000);