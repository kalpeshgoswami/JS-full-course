// block scope

function blockScope() {

    const message = "Hii...";

    if (true) {
        const message = "how are you";
        console.log(message);
    }
    console.log(message);
}
blockScope();

// ------ variable declaration ------

//i can't able to this i must initialized const variable value at the time of declaration

// const k;     

const k = 100;

// k = 50;   // Assignment to constant variable.

console.log(k);

// const k=120  can't declare block scope variable in same scope


// ----- variable priority -----

// const -> let -> var

const person = { name: "kalpesh", age: 20 };

person.name = "jak";

console.log(person);