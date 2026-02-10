// document.getElementById("form").addEventListener("submit", (e)=>{
//     e.preventDefault();

//     let Number=number(document.getElementById("number")).value;
//     let result=documnet.getElementById("result");

//     if(number %2 == 0){
//         result.textContain="This is Even Number"
//     }else{
//         result.textContain="This is Odd Number"
//     }

// });

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let num = Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    if (num % 2 === 0) {
        result.textContent = "This is an Even Number";
    } else {
        result.textContent = "This is an Odd Number";
    }
});
