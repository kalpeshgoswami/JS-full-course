let play = new Promise((resolve, reject) => {
    let enemiesKilled = 2;

    if (enemiesKilled >= 10) {
        resolve("Mission completed successfully");
    } else {
        reject("Mission failed");
    }
})

play
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));