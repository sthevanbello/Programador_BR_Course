// Carne - 400g / pessoa até 6 horas. Maid do que 6h -> 650g / Pessoa
// Cerveja - 1200ml / adulto até 6h. Após 6h -> 2000ml
// Refrigerante / Água - 1000ml / pessoa até 6h -> após 6h - 1500ml
// Criança vale por 0,5 pessoa

onload = function () {


    let calculate = document.getElementById("btn-calculate");
    calculate.addEventListener("click", cleanList);
    calculate.addEventListener("click", calculateList);
}

let inputAdult = document.getElementById("input-adult");
let inputChildren = document.getElementById("input-children");
let inputDuration = document.getElementById("input-duration");
let list = document.getElementById("list");

function cleanList(){
    let ul = getList();
    ul.innerHTML = "";
}

function calculateList() {
    console.log("Calculating barbecue");

    let adults = inputAdult.value;
    let children = inputChildren.value;
    let time = inputDuration.value;

    let meat = calculateMeet(time, adults, children);
    let beer = calculateBeer(time, adults);
    let drink = calculateDrink(time, adults, children);
    createUl(meat, beer, drink);
}

function calculateMeet(time, adults, children) {
    let meat = 0;
    if (time <= 6) {
        meat = 400;
    } else {
        meat = 600;
    }
    let quantityMeet = meat * adults + (meat / 2 * children);
    return quantityMeet;
}

function calculateBeer(time, adults) {
    let beer = 0;
    let quantity = 0;
    if (time <= 6) {
        quantity = 1200;
    }else{
        quantity = 2000;
    }
    return adults * quantity;
}

function calculateDrink(time, adults, children) {
    let drink = 0;
    let quantity = 1000;
    if (time <= 6) {
        quantity = 1000;
    }else{
        quantity = 1500;
    }
    return (adults * quantity) + (children / 2 * quantity);
}

function createUl(meat, beer, drink) {
    let ul = getList();
    let liMeat = createLi("meat", meat);
    let liBeer = createLi("beer", beer);
    let liDrink = createLi("drink", drink);
    ul.appendChild(liMeat);
    ul.appendChild(liBeer);
    ul.appendChild(liDrink);
}

function getList() {
    return document.getElementById("list");
}

function createLi(type, item){
    let li = document.createElement("li");
    switch (type) {
        case "meat":
            li.innerHTML = formatMeat(item);
            return li;
        case "beer":
            li.innerHTML = formatBeer(item);
            return li;
        case "drink":
            li.innerHTML = formatDrink(item);
            return li;
        default:
            break;
    }
}

function formatMeat(meat){
    return "Meat = " + (meat / 1000) + " Kg";
}

function formatBeer(beer){
    return "Beer = " + (beer / 1000) + " liters"
}

function formatDrink(drink){
    return "Drink = "+ (drink / 1000) +" liters";
}