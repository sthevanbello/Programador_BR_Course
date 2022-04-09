var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
var operation = '';

console.log(person, 'Person');

operation = 'edit';
managePerson(operation, person, 'age', 15);
console.log(person, `Person after ${operation}`);

operation = 'delete';
managePerson(operation, person, 'age', 15);
console.log(person, `Person after ${operation}`);

operation = 'edit';
managePerson(operation, person, 'bilolaSize', '21cm');
console.log(person, `Person after ${operation}`);


function managePerson(operation, obj, prop, newValue) {
    if (operation == "delete") {
        Object.entries(obj).forEach(([key, value]) => {
            if (key == prop) {
                delete obj[prop];
            }
        });
    } else if(operation == "edit"){
        var edited = false;
        Object.entries(obj).forEach(([key, value]) => {
            if (key == prop) {
                obj[key] = newValue;
                edited = true;
            }
        });
        if (edited == false){
            obj[prop] = newValue;
        }
    }

    // if (person.prop !== undefined){
    //     console.log(person.prop, 'Age');
    // }else if (person.ppk === undefined){
    //     console.log(person.ppk, 'Not Found ppk');
    // }

    // delete person.prop;

}