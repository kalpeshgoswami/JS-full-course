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

function unshiftBtn() {
    let value = document.getElementById("inputValue").value

    if (value !== "") {
        arr.unshift(value)
        updateArr()
    }

    document.getElementById("inputValue").value = ""
}

function popBtn() {
    if (arr.length === 0) loadArray()

    arr.pop()
    updateArr()
}

function shiftBtn() {
    if (arr.length === 0) loadArray()

    arr.shift()
    updateArr()
}

function reverseBtn() {
    if (arr.length === 0) loadArray()

    arr.reverse()
    updateArr()
}

function toStringBtn() {
    if (arr.length === 0) loadArray();

    Result .innerHTML = "Output: " + arr.toString();
};

function lengthBtn() {
    if (arr.length === 0) {
        Result.innerHTML = "Array is empty!";
        return;
    }

    Result .innerHTML = "Length: " + arr.length;
}

function indexOfBtn(){
    let value = document.getElementById("inputValue").value;

    if (arr.length === 0) loadArray();

    let index = arr.indexOf(value);

    Result .innerHTML = "Index of " + value + " : " + index;

    document.getElementById("inputValue").value = "";
}


function includesBtn(){
    let value = document.getElementById("inputValue").value;

    if (arr.length === 0) loadArray();

    let ans = arr.includes(value);

    Result .innerHTML = "Includes " + value + " : " + ans;

    document.getElementById("inputValue").value = "";
}

function sortBtn(){
    if (arr.length === 0) loadArray();

    arr.sort((a, b) => a - b);
    updateArr();
}

function ascendingBtn() {
    if (arr.length === 0) loadArray();

    arr.sort((a, b) => a - b);
    updateArr();
};

function descendingBtn() {
    if (arr.length === 0) loadArray();

    arr.sort((a, b) => b - a);
    updateArr();
};

function findBtn(){
    let value = Number(document.getElementById("inputValue").value);

    if (arr.length === 0) loadArray();

    let result = arr.find(el => el > value);

    Result .innerHTML = "First element greater than " + value + " : " + result;

    document.getElementById("inputValue").value = "";
}

function someBtn(){
    let value = Number(document.getElementById("inputValue").value);

    if (arr.length === 0) loadArray();

    let result = arr.some(el => el > value);

    Result .innerHTML = "Any element greater than " + value + " : " + result;

    document.getElementById("inputValue").value = "";
}

function everyBtn(){
    let value = Number(document.getElementById("inputValue").value);

    if (arr.length === 0) loadArray();

    let result = arr.every(el => el > value);

    Result .innerHTML = "All elements greater than " + value + " : " + result;

    document.getElementById("inputValue").value = "";
}

function filterBtn(){
    let value = Number(document.getElementById("inputValue").value);

    if (arr.length === 0) loadArray();

    let result = arr.filter(el => el %2===0);

  
        Result .innerHTML = "Even  Number : [ " + result.join(", ") + " ]";
    

    document.getElementById("inputValue").value = "";
}

function mapBtn(){
    if (arr.length === 0) loadArray();

    let result = arr.map(el => el * 2);

    Result .innerHTML = "multiplication *2 : [ " + result.join(", ") + " ]";
}

function reduceBtn(){
    if (arr.length === 0) loadArray();

    let result = arr.reduce((total, el) => total + el, 0);

    Result .innerHTML = "Sum of Array: " + result
}

function sliceBtn(){
    if (arr.length === 0) loadArray()

    let result = arr.slice(1, 4)

    Result .innerHTML = "Slice : [ " + result.join(", ") + " ]"
}

function joinBtn(){
    if (arr.length === 0) loadArray();

    let result = arr.join(" - ");

    Result .innerHTML = "Joined: " + result;
}