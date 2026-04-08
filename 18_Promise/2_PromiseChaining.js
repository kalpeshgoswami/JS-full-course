const watchMovie = new Promise((resolve, reject) => {
    let subscriptionActive = true;

    if (subscriptionActive) {

        console.log("Subscription verified")

        setTimeout(() => {
            console.log("loading movie library");
            let movieAvailable = true;

            if (movieAvailable) {
                resolve("Movie found");
            }
            else {
                reject("movie not available");
            }
        }, 2000);
    } else {
        reject("Subscription expired");
    }
});

watchMovie

    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("buffering movie");
                resolve();
            }, 2000);
        });
    })

    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("playing movie")
                resolve();
            }, 2000);
        })
    })

    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("movie finished");
                resolve();
            }, 2000)
        })
    })

    .catch((err) => {
        console.log("error:", err);
    })

    .finally(()=>{
        setTimeout(()=>{
            console.log("hop you enjoyed the movie");
        },2000);
    })