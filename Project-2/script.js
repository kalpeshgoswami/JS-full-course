document.getElementById("form").addEventListener("submit", function (e) {

    e.preventDefault();

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= 50; i++) {

        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }

    }

    document.getElementById("result").innerHTML =
        "Even Numbers: " + evenCount + "<br>Odd Numbers: " + oddCount;

});