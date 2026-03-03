const number = [10, 20, 30, 40];

const numbers = [10, 20, 30, 40];

const total = numbers.reduce((accumulator, current) => {
    return accumulator += current;
}, 0);

console.log(total);



const Games = [
    { title: "Minecraft", price: 1500 },
    { title: "GTA 5", price: 2000 },
    { title: "Call of Duty", price: 1000 }
];

const totalPrice = Games.reduce((total, game) => {
    return total + game.price;
}, 0);

console.log(totalPrice);
