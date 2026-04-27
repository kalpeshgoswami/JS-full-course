let Result = document.getElementById("result");
let Items = document.getElementById("arrItem");
let createArray = document.getElementById("createArray");

let arr = [];

function ArrayNum() {
    let inputNum = document.getElementById("arrSize").value;

    Items.innerHTML = "";
    arr = [];

    for (let i = 1; i <= inputNum; i++) {
        Items.innerHTML += `
        <input type="text" placeholder="Enter Element ${i}" id="el${i}" class="form-control mt-2">
        `;
    }

    Items.innerHTML += `
        <button class="btn btn-outline-primary mt-2" id="arrbtn">Create Array</button>
    `;

    document.getElementById("arrbtn").onclick = convertInArr;
}

function convertInArr() {
    let count = document.getElementById("arrSize").value;
    arr = [];

    for (let i = 1; i <= count; i++) {
        let val = document.getElementById("el" + i).value;
        if (val !== "") {
            arr.push(val);
        }
    }

    createArray.innerHTML = "Array : [ " + arr.join(", ") + " ]";
}

function updateArr() {
    Result.innerHTML = "Output: [ " + arr.join(", ") + " ]";
}

function pushBtn() {
    let value = document.getElementById("inputValue").value;

    if (value !== "") {
        arr.push(value);
        updateArr();
    }

    document.getElementById("inputValue").value = "";
}

