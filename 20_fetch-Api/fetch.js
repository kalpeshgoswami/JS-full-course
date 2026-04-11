async function fetchData() {

    try {

        const data = await fetch("https://jsonplaceholder.typicode.com/users")

        console.log("Data: ", data)

        const user = await data.json();

        console.log("user data: ",user)

    } catch (error) {
        console.log(error);
    }

}

fetchData();