// localStorage.setItem("nome", "Sthevan");
// let nome = localStorage.getItem("nome");
// console.log(nome);
onload = function () {
    let button = document.getElementById("clear");
    button.addEventListener("click", clear);

    let insert = document.getElementById("insert");
    insert.addEventListener("click", insertTask);

    let save = document.getElementById("btn-save");
    save.addEventListener("click", saveList);

    // let list = localStorage.getItem("item");
    // console.log(JSON.stringify(list));
    let list = localStorage.getItem("item");
    console.log(list);

    let load = document.getElementById("btn-load");
    load.addEventListener("click", loadList);

};

function atualizar(element) {

    // let value = element.value;
    // // let campo = document.getElementById("campo");
    // // campo.innerHTML = value;

    // localStorage.setItem("name", value);
};


function clear() {
    getList().innerHTML = "";
    let task = document.getElementById("input");
    task.value = "";
    localStorage.clear();
}

function insertTask() {

    let list = getList();
    let text = document.getElementById("input").value
    console.log(text);

    let obj = {
        "task": text
    };
    console.log(obj);

    fillList(getList(), text);
    saveList();
}

function fillList(list, value) {
    console.log(value);
    let li = createLi(value);
    list.appendChild(li);
}

function createLi(value){
    let li = document.createElement('li')
    li.innerHTML = value;
    return li
    
}

function saveList() {

    let ul = getList();
    console.log(ul);
    localStorage.setItem("item", ul.innerHTML);
}

function getList() {
    return document.getElementById("list");
}


function loadList() {
    if (localStorage.length > 0) {
        let list = getList();
        list.innerHTML = "";
        let storage = localStorage.getItem("item");
        console.log(storage);
        fillList(getList(), storage);
    } else {
        console.log("There isn't data in Local Storage")
    }

}