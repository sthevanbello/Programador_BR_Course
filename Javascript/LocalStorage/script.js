// localStorage.setItem("nome", "Sthevan");
// let nome = localStorage.getItem("nome");
// console.log(nome);

onload = function () {
    let value = this.localStorage.getItem("name");
    let campo = document.getElementById("campo");
    campo.innerHTML = value;

    let button = document.getElementById("clear");
    button.addEventListener("click", clear);

    let insert = document.getElementById("insert");
    insert.addEventListener("click", insertTask);
};

function atualizar(element) {
    // console.log(element.value);
    let value = element.value;
    let campo = document.getElementById("campo");
    campo.innerHTML = value;

    localStorage.setItem("name", value);
};


function clear() {
    let list = document.getElementById("list");
    
}

function insertTask(){
    let task = document.getElementById("input");
    // let line = {}
    // localStorage.setItem("task", task);
    let value = task.value;
    console.log(value);
    let list = document.getElementById("list");
    list.innerHTML += "<li>" + value + "</li>";
}

