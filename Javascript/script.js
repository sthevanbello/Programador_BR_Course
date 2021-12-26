console.log("Input test");
var nameInput = prompt("Input your name");
console.log("Your name is " + nameInput);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

var alunos = ["Mafalda", "Chiquinho", "Tina", "Léo", "Bruce", "Bolão", "Simi"];

for(var aluno of alunos){
    console.log(aluno)
}
for(var aluno in alunos){
    console.log(aluno)
}

