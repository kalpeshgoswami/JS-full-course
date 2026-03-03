

const numbers = [5, 10, 15, 20, 25];

const greaterThan15 = numbers.filter(num => num > 15);

console.log("Greater Number:", greaterThan15);


const num = [1, 2, 3, 4, 5, 6];

const evenNumbers = num.filter(num => num % 2 === 0);

console.log("Even number:", evenNumbers);



const users = [
    {
        name: "Alice",
        age: 20,
        email: "alice1@example.com",
        city: "New York",
    },
    {
        name: "Bob",
        age: 17,
        email: "bob2@example.com",
        city: "Los Angeles",
    },
    {
        name: "Charlie",
        age: 22,
        email: "charlie3@example.com",
        city: "Chicago",
    }
];

const adults = users.filter((u) => u.age > 18).map((u) => u.name);

console.log(adults);
