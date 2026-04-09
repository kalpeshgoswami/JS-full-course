function xyz() {
    return new Promise((resolve, reject) => {

        let data = true

        setTimeout(() => {
            if (data) {
                resolve("ticket confirm");
            } else {
                reject("booking not available")

            }

        }, 2000);
    })
}

async function busTicket() {
    try {

        console.log("loading...")

        const data = await xyz();
        console.log("data:", data);

        console.log("payment successful");
    } catch (error) {

        console.log(error);
    }
}

console.log("ticket booking...")

busTicket();