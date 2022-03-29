let users = ["Bart", "Lisa", "Homer", "Marge", "Maggie"];

function insertUser(name) {

    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            users.push(name);
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject({
                    msg: "Generic error"
                });
            }
        }, 1000);
    });
    return promise;
}

function listUsers() {
    console.log(users);
}

// insertUser("Lenny", listUsers);

// insertUser("Lenny")
//     .then(listUsers)
//     .catch((error) => {
//         console.log(error.msg)
//     });

async function execute(){
    await insertUser("Lenny");
    listUsers(users);
}

execute();