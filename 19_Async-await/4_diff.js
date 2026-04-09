// ---- Example 1 -----

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data loaded");
        }, 2000)
    });
}


async function fetchData() {
    console.log("loading");

    const data = await loadData();

    console.log("data: ", data)

    console.log("it will wait until promise result");

}

fetchData();

// ---- Example 2 -----

const play = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("start playing");
    }, 2000);
});

play

    .then((data) => {
        console.log("starting....");
        console.log("loading: ", data);

    })

    .catch((err) => {
        console.log(err);
    })