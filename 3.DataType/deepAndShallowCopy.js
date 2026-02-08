//  ----- Deep copy  in permeative data types -----   

console.log("---- passed by value ----");

let k = 45;

let g = k;

console.log(g)

g = 54;

console.log(g);

console.log(k)


// ------ shallow copy in non permeative data types -----

console.log("---- passed  by reference ----");

let student = { name: "Captain", age: 20, course: "black pearl" }

let student2 = student;

console.log("student1", student);
console.log("student2", student2);

console.log("after changes");

student2.name = "jack";

console.log("student2", student2);
console.log("student", student);