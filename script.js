document.body.innerHTML += "<h2> Příjem divadla </h2>"

let listek = 12
let navstevnikuNaPredstaveni = 174
let predstaveniZaMesic = 15
let prijem = listek * navstevnikuNaPredstaveni * predstaveniZaMesic

document.body.innerHTML += "<p> Měsíční příjem divadla: " + prijem + " eur</p>"

let sleva = 0.65
let studenti = 0.4
let prijemSeSlevou = predstaveniZaMesic * ((navstevnikuNaPredstaveni * studenti * sleva * listek) + ((1 - studenti) * navstevnikuNaPredstaveni * listek))

document.body.innerHTML += "<p> Měsíční příjem divadla po slevě: " + prijemSeSlevou + " eur</p>"

document.body.innerHTML += "<h2> Házení kostkou bla bla </h2>"

let hodKostkou = Math.ceil(Math.random() * 6)

document.body.innerHTML += hodKostkou
