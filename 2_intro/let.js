let message = "global scope";

function blockScope() {
    let message = "hello"

    if (true) {
        let message = "hii..";

        console.log(message);
    }
    console.log(message)
}

blockScope();

// ------ variable declaration -----

let k;

// ------ variable initialization -----

k = 45;

console.log(k);

// ------ Redeclaration ------

k = 8080;
console.log(k);

// ---- same scope you can't declare ----

// let k