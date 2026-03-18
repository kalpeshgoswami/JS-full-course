

function total (result) {
    console.log(result);

}

function calculate(a, b, cb){
    const total = a + b;

    cb(total);
}

calculate(2, 5, total)