// let students = ["Bart", "Lisa", "Homer", "Marge", "Maggie"];

function newStudent(name, age) {
    return {
        name: name,
        age: age
    }
}

let students = [
    newStudent("Marge", 40),
    newStudent("Homer", 40),
    newStudent("Bart", 11),
    newStudent("Lisa", 8),
    newStudent("Maggie", 2),
];

// console.log(students)

// let filter = students.filter((x) => x.age > 10);

// console.log(filter);

function nameAge(student) {
    return `${student.name} is ${student.age} years old`;
};

console.log(students.map(nameAge));

function ageClass(total, student) {
    return total + student.age;
}

console.log(students.reduce(ageClass, 0));

for (let student of students) {
    console.log(`${student.name} is ${student.age} years old`);
}

function total(students) {
    var total = 0;
    for (let student of students) {
        total += student.age;
    }
    return total;
}

console.log(total(students));