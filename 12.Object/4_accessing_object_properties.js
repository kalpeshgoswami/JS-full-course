const person = {
    name: "kalpesh",
    surname: "goswami",
    city: "bvn",
    age: "20"
};

console.log(person);

//  accessing method

console.log(person.name)


console.log(person["surname"]);


const {name, surname} = person;

console.log(name);
console.log(surname);