document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    try {

        const movieName = document.getElementById("movie").value;

        const container = document.getElementById("container");

        const response = await fetch(`https://www.omdbapi.com/?apikey=thewdb&s=${movieName}`,
        );

        const data = await response.json();

        if (data.Response === "True") {

            data.Search.forEach((movie) => {
                const img = document.createElement("img");

                img.src = movie.Poster;
                img.alt = movie.Title;
                img.style.width = "250px";
                img.style.margin = "10px"

                container.appendChild(img);
            });
        } else {
            container.innerHTML = `<h1>No movie data found</h1>`;
        }

    } catch (error) {
        console.log(error.message);
    }

})