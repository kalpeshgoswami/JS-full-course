document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let num = Number(document.getElementById("number").value);
    let result = "";

    for (let i = num; i >= 1; i--) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }

    document.getElementById("result").textContent = result;

})