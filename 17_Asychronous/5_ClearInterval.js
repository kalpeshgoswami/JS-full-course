

function start() {

    const play = setInterval(() => {
        console.log("playing gta 5");
    }, 1000);


    setTimeout(() => {
        clearInterval(play)
    }, 5000);

}

start();