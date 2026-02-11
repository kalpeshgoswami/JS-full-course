//  ----- Spread Operator ------

const num = [10,20,30,40,50];

console.log(...num);

const num2 = [...num,60,70,80,90];

console.log(...num2);

//  ----- Rest Operator ------

function play(games){
    console.log("i have these games :",...games);

    console.log("i like most",games[1])
}

const games = ["Gta 5,", "forza horizon 5,", "Minecraft,", "SnowRunner."];

play(games);