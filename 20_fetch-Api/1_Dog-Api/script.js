document.getElementById("btn").addEventListener("click", async () => {

    const img = document.getElementById("img")

    const dogImage = await fetch("https://dog.ceo/api/breeds/image/random")

    const result = await dogImage.json()

    if (result.status !== "success") {
        throw new Error("failed to fetch dog image");
    } else {
        img.src = result.message;
    }

})