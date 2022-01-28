// Carne - 400g / pessoa até 6 horas. Maid do que 6h -> 650g / Pessoa
// Cerveja - 1200ml / adulto até 6h. Após 6h -> 2000ml
// Refri / Água - 1000ml / pessoa até 6h -> após 6h - 1500ml
// Criança vale por 0,5 pessoa

onload = function () {

    let calculate = document.getElementById("btn-calculate");
    calculate.addEventListener("click", calculateList);
}

let inputAdult = document.getElementById("input-adult");
let inputChildren = document.getElementById("input-children");
let inputDuration = document.getElementById("input-duration");
let list = document.getElementById("list");

function calculateList() {
    console.log("Calculating");

    let adults = inputAdult.value;
    let children = inputChildren.value;
    let time = inputDuration.value;

    let meet = calculateMeet(time, adults, children);
    let beer = calculateBeer(time, adults, children);
    let drink = calculateDrink(time, adults, children);
    createUl();
}

function calculateMeet(time, adults, children) {
    let meet = 0;
    if (time <= 6) {
        meet = 400;
    } else {
        meet = 600;
    }
    let quantityMeet = meet * adults + (meet / 2 * children);
    console.log(quantityMeet);
    return meet;
}
