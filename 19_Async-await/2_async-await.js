
const playing = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("starting Application");
        },2000)
    })
};


async function fetchData() {
    console.log("loading...")

    const data = await playing();

    console.log("data:",data);

    console.log("it will wait until promise result");
}
fetchData();