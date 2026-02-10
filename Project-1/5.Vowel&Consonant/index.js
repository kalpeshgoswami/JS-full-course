document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let word = document.getElementById("alphabet").value;

    let result = document.getElementById("result");

    if (word == "a" || word == "A" ||
        word == "e" || word == "E" ||
        word == "i" || word == "I" ||
        word == "o" || word == "O" ||
        word == "u" || word == "U"
    ) {
        result.textContent = `${word} is Vowel`
    } else if
        (word.length == 1 && (word >= "a" && word <= "z" || word >= "A" && word <= "Z")
    ) {
        result.textContent = `${word} is consonant`
    } else {
        result.textContent = `${word} is not Alphabet, plz Enter alphabet`
    }
});