import { getKeres } from "./async.js"

console.log("1. üzenet")

getKeres("adatok.json", megjelenit1)

getKeres("https://www.boredapi.com/api/activity", megjelenit1)
getKeres("https://pokeapi.co/api/v2/pokemon/ditto", megjelenit1)

console.log("2. üzenet")

function megjelenit1(adat) {
    console.log(adat)
}

function megjelenitBored(adat) {
    $("body").append
}