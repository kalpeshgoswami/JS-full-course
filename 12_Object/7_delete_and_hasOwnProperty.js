const person = {
  name: "kalpesh",
  age: 20,
  address: "bvn",
};

delete person.age;

console.log("person", person);

// hasOwnProperty

console.log(person.hasOwnProperty("name"));

// ObjectKeys

console.log(Object.keys(person));