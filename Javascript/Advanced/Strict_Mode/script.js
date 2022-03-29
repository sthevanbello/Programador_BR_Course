// Use strict force declaration using 'var', 'let', 'const'...

// "use strict"


// function print() {
//     x = 7;

//     console.log(x);
// }

// print();

// console.log(window);

function speakGeneric() {
    console.log(this.sound);
}

let dog = {
    sound: "au au",
    speak: speakGeneric
}

let cat = {
    sound: "miau",
    speak: speakGeneric
}

dog.speak();
cat.speak();

// let bindedFunction = speakGeneric.bind(dog);
let bindedFunction = speakGeneric.bind(cat);

bindedFunction();