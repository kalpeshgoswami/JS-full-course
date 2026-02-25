const person = {
  firstName: "kalpesh",
  lastName: "goswami",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);