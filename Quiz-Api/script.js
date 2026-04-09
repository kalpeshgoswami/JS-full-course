const quizData = [
    {
        question: "What does JS stand for?",
        options: ["Java Source", "JavaScript", "Just Script", "Jumbo Script"],
        answer: "JavaScript"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "IBM"],
        answer: "Netscape"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "float"],
        answer: "var"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "**"],
        answer: "//"
    },
    {
        question: "What is the correct way to write a function?",
        options: [
            "function myFunc()",
            "def myFunc()",
            "create myFunc()",
            "func myFunc()"
        ],
        answer: "function myFunc()"
    },
    {
        question: "Which method converts JSON to a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.toObject()"
        ],
        answer: "JSON.parse()"
    },
    {
        question: "Which operator is used for strict equality?",
        options: ["==", "=", "===", "!="],
        answer: "==="
    },
    {
        question: "Which data type is NOT primitive?",
        options: ["String", "Number", "Object", "Boolean"],
        answer: "Object"
    },
    {
        question: "How do you write an arrow function?",
        options: [
            "() => {}",
            "=> () {}",
            "function => {}",
            "{} => ()"
        ],
        answer: "() => {}"
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    }
];


let Que = document.getElementById("Que")

let timer = document.getElementById("timer")

let questions = document.getElementById("questions")

let options = document.getElementById("options")



let qusCount = 0;
let queIndex = 0;

function Quizz() {

    let currantQue = quizData[queIndex]

    questions.innerText = currantQue.question

    options.innerText = ""

    currantQue.options.forEach((opt) => {
        let col = document.createElement("div")
        col.classList.add("col-md-6")
        let button = document.createElement("button")
        button.innerText = opt
        button.classList.add("btn", "btn-outline-success", "option-btn")

        col.appendChild(button)
        options.appendChild(col)

    })

}
Quizz()



function nextQuestion() {

        if (quizData.length > queIndex) {
            queIndex++
            qusCount++
        }
    Que.innerHTML =`Qns ${qusCount}/10`


    Quizz()

}
nextQuestion()