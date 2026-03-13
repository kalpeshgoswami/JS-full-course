

// -----  syntax error -----

// In JavaScript, a SyntaxError happens when the code structure is written incorrectly, so the interpreter cannot parse it.



//  -----  Runtime Error ----- 

// Runtime Error is an error that occurs while a program is running and stops the normal flow of execution.

let num = 5;
console.log(num.toUpperCase()); // TypeError: num.toUpperCase is not a function

let obj = null;
console.log(obj.name); // TypeError: Cannot read property 'name' of null



// ----- try-catch and finally -----

// | Part      | Purpose                             |
// | --------- | ----------------------------------- |
// | `try`     | Risky code jahan error aa sakta hai |
// | `catch`   | Error ko handle karna               |
// | `finally` | Cleanup, always execute             |

// Example 1 

try {
    let result = x + 5; // x is not defined, will throw error
} catch (error) {
    console.log("Runtime error detected: " + error.message);
} finally {
    console.log("Execution completed.");
}
