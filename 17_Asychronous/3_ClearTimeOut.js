
// setTimeout() schedules a function to run after a delay(in milliseconds).


// Example 1 

const timeoutId = setTimeout(() => {
    console.log("Set TimeOut");
}, 3000);

clearTimeout(timeoutId);

console.log("Timeout cleared");


// Example 2 

const timer = setTimeout(() => {
    console.log("Hello!");
}, 1500);

setTimeout(() => {
    clearTimeout(timer);
    console.log("Stopped");
});