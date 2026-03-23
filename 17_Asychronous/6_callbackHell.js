// // ----- Example 1 -----

// function wakeUp(callback) {
//   setTimeout(() => {
//     console.log("Woke up");
//     callback();
//   }, 1000);
// }

// function brushTeeth(callback) {
//   setTimeout(() => {
//     console.log("Brushed teeth");
//     callback();
//   }, 1000);
// }

// function haveBreakfast(callback) {
//   setTimeout(() => {
//     console.log("Had breakfast");
//     callback();
//   }, 1000);
// }

// function goToWork(callback) {
//   setTimeout(() => {
//     console.log("Went to work");
//     callback();
//   }, 1000);
// }

// wakeUp(() => {
//   brushTeeth(() => {
//     haveBreakfast(() => {
//       goToWork(() => {
//         console.log("Day started!");
//       });
//     });
//   });
// });



//  -----Example 2 -----

function startGame(callback){
    setTimeout(()=>{
        console.log("Game started")
        callback();
    },1000)
}

function loadLevel(callback){
    setTimeout(()=>{
        console.log("Level loaded")
        callback();
    },1000)
}

function spawnPlayer(callback){
    setTimeout(()=>{
        console.log("Player spawned")
        callback();
    },1000)
}

function fightEnemies(callback){
    setTimeout(()=>{
        console.log("Enemies defeated")
        callback();
    },1000)
}

function completeMission(callback){
    setTimeout(()=>{
        console.log("Mission completed")
        callback();
    },1000)
}

startGame(()=>{
    loadLevel(()=>{
        spawnPlayer(()=>{
            fightEnemies(()=>{
                completeMission(()=>{
                    setTimeout(()=>{
                        console.log("Level Complete! Rewards unlocked")
                    },2000)
                })
            })
        })
    })
})

