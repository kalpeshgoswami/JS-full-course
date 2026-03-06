document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let primeNumber = [];

    for (let i = 2; i <= 50; i++) {  // start from 2
        let prime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            primeNumber.push(i);
        }
    }

    document.getElementById("result").innerHTML = primeNumber.join(", ");
});