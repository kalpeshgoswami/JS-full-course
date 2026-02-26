

let games = ["cricket", "football", "tennis", "hockey"];

games.push("Volleyball");

console.log("After push", games);



let indoorGames = ["Chess", "Carrom", "Ludo"];

indoorGames.unshift("Table Tennis");

console.log("After unshift", indoorGames);



let videoGames = ["Minecraft", "GTA VC", "GTA 5"];

videoGames.pop();

console.log("After pop", videoGames);


let mobileGames = ["Free Fire", "PUBG", "Clash of Clans"];

mobileGames.shift();

console.log("After shift", mobileGames);




// The splice() method


let fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log("Original fruits:", fruits);


let removedFruits = fruits.splice(1, 2);

console.log("Removed fruits:", removedFruits);
console.log("Fruits after removal:", fruits);


let numbers = [1, 2, 5];
console.log("Original numbers:", numbers);

numbers.splice(2, 0, 3, 4);
console.log("Numbers after adding elements:", numbers);

let colors = ["Red", "Blue", "Green"];
console.log("Original colors:", colors);

let updateColor = colors.splice(1, 1, "Yellow");
console.log("color:", updateColor);
console.log("Colors after update:", colors);

