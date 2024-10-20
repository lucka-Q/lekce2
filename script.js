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

while (hodKostkou === 0) 
    {hodKostkou = Math.ceil(Math.random() * 6)
    }

document.body.innerHTML += hodKostkou

document.body.innerHTML += "<h2> Zaokrouhlování </h2> "

const cisloNaZaokrouhleni = 56.7853453

document.body.innerHTML += "<p> Číslo " + cisloNaZaokrouhleni + " zaokrouhlené na desetiny: " + (Math.round(cisloNaZaokrouhleni * 10))/10 +"</p>" 
document.body.innerHTML += "<p> Číslo " + cisloNaZaokrouhleni + " zaokrouhlené na setiny: " + (Math.round(cisloNaZaokrouhleni*100))/100 + "</p>" 
document.body.innerHTML += "<p> Číslo " + cisloNaZaokrouhleni + " zaokrouhlené na stovky: " + (Math.round(cisloNaZaokrouhleni/100))*100 + "</p>" 
