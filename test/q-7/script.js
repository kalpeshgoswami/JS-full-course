document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var n = document.getElementById("number").value;
    var result = document.getElementById("result");

    var output = "";

    for (var i = 2; i <= n; i++) {
        var count = 0;

        for (var j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }

        if (count == 2) {
            output += i + ", ";
        }
    }

    result.innerHTML = output;
});