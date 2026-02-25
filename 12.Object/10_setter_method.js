const person = {
    name: "kalpesh",
    age: "",
    set personAge(age) {
        if (age < 21) {
            return console.log("you are not eligible");
        }

        this.age = age;
    },
};

person.personAge = 20;

console.log(person);

console.log("person age", person.age);