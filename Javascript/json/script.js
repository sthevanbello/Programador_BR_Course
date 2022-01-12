let a = {
    name: "Sthevan",
    grade: 8
};

let b = JSON.stringify(a);

console.log(a);
console.log(b);

let c = '{"name":"Bruce", "grade":7}';

let d = JSON.parse(c);
console.log(d);
