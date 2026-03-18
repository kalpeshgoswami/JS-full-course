

// function name() {

//     console.log("name:")

//     setTimeout(function play() {
//         console.log("Kalpesh");
//     },2000);

//     console.log("Goswami")
// }

// name()




const checkYear = () => {

    console.log("Checking current year.....");

    setTimeout(() => {
        const currentYear = new Date().getFullYear();
        console.log("current year is ", currentYear);
    }, 5000);

};

checkYear();