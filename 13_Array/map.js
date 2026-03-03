// Example 1

const numbers = [1, 2, 3, 4, 5];

const newArr = numbers.map((num) => num * 2);

console.log(newArr);


// Example 2

const users = [
    {
        name: "Alice",
        age: 20,
        email: "alice1@example.com",
        city: "New York"
    },
    {
        name: "Bob",
        age: 21,
        email: "bob2@example.com",
        city: "Los Angeles"
    },
    {
        name: "Charlie",
        age: 22,
        email: "charlie3@example.com",
        city: "Chicago"
    }
];

const names = users.map(user => user.name);

console.log(names);
