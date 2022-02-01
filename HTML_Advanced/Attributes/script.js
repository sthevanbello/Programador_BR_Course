let image = document.getElementById("dog");
image.addEventListener("click", function(){
    // image.src = "./assets/corinthians.png";
    let lastImage = image.getAttribute("src");
    console.log(lastImage);
    image.setAttribute("src", "./assets/corinthians.png");
    image.setAttribute("width", "65px");
    // let newImage = image.getAttribute("src");
    // console.log(newImage);
});

let lista = document.getElementById("lista");
let number = parseInt(lista.getAttribute("data-num"));
console.log(number);

// Para trabalhar com algum atributo criado, o ideal seria usar data-atributo
console.log(parseInt(lista.dataset.num));



for(let i = 1; i <= number; i++ ){
    let li = document.createElement("li");
    li.innerHTML = i;
    lista.appendChild(li);
}