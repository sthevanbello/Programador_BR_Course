let users = ["Bart", "Lisa", "Homer", "Marge", "Maggie"];

function insertUser(name, callback){
    users.push(name);
    callback();
}

function listUsers(){
    console.log(users);
}

insertUser("Lenny", listUsers);


