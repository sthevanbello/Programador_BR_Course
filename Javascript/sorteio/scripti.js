window.onload = {

}

let pessoas = ["Bruce", "Léo", "Tina", "Bolão", "Pretinha", "Layra", "Chiquinho"]

function sortear(){
    let numeroDePessoas = pessoas.length;
    let numeroSorteado = Math.floor(Math.random() * numeroDePessoas);
    console.log(numeroSorteado);
    let display = document.getElementById("number");
    display.innerHTML = pessoas[numeroSorteado];
}