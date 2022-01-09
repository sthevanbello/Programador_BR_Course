// console.log("Input test");
// var nameInput = prompt("Input your name");
// console.log("Your name is " + nameInput);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

var alunos = ["Mafalda", "Chiquinho", "Tina", "Léo", "Bruce", "Bolão", "Simi"];

for(var aluno of alunos){
    console.log(aluno);
}
for(var aluno in alunos){
    console.log(aluno);
}

var media = function (n1, n2){return (n1+n2)/2}; 
console.log(media(2,5));

var m = (n1, n2) => {return (n1+n2)/2};
console.log(m(5,8));

var aluno = {
    nome: "Sthevan",
    nota: [7.5, 5.0]
};

aluno.matricula = 123456;

aluno["curso"] = "Analise e desenvolvimento de sistemas";

var endereco = "endereco"

aluno[endereco] = "Rua pastor João nunes, 146";

console.log(typeof(aluno));
console.log(aluno.nome);
console.log(aluno.nota);
console.log(aluno);

var data = new Date();
console.log(data);

function changeH1(input){
    let h1 = document.getElementsByTagName("h1")[0];
    // let input = document.getElementById("texto");
    h1.innerText = input.value;
    console.log(h1);
}

function hideH1(){
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.display = "none";
}

function onOver(element){
    element.style.backgroundColor =  "red";
}

function onOut(element){
    element.style.backgroundColor = "blue";
}

let t = document.getElementById("title");
// t.innerHTML = "teste"
// t.onclick = changeText;
t.addEventListener("click", changeText);
t.addEventListener("mouseover", changeText);
t.addEventListener("mouseout", mouseOut);

function changeText(){
    // let h1 = document.getElementById("title");
    // h1.innerText = "Text changed by function changeText"
    this.innerText = "Text changed by function changeText"
}

function mouseOut(){
    this.innerText = "Mouse out"
}
