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
        options: ["function myFunc()", "def myFunc()", "create myFunc()", "func myFunc()"],
        answer: "function myFunc()"
    },
    {
        question: "Which method converts JSON to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
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
        options: ["() => {}", "=> () {}", "function => {}", "{} => ()"],
        answer: "() => {}"
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    }
];

let Que = document.getElementById("Que");
let questions = document.getElementById("questions");
let options = document.getElementById("options");
let button = document.getElementById("btn");

let queIndex = 0;
let score = 0;
let userAnswers = [];

function loadQuestion() {
    let current = quizData[queIndex];

    Que.innerText = `${queIndex + 1}/${quizData.length}`;
    questions.innerText = current.question;

    options.innerHTML = "";

    current.options.forEach((opt) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("btn", "btn-outline-success", "m-2");

        btn.onclick = () => selectAnswer(opt);

        options.appendChild(btn);
    });
}

function selectAnswer(selected) {
    let correct = quizData[queIndex].answer;

    userAnswers[queIndex] = selected;

    if (selected === correct) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    queIndex++;

    if (queIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector("button").style.display = "none";

    button.style.display = "none"

    questions.innerHTML = `Your Score: ${score}/${quizData.length}`;
    options.innerHTML = "";

    const result = document.getElementById("Result");
    result.innerHTML = "";

    quizData.forEach((q, index) => {
        let userAns = userAnswers[index] || "Not Attempted";

        let container = document.createElement("div");

        container.innerHTML = `
            <h5>${index + 1}. ${q.question}</h5>
            <p style="color:green;">Correct: ${q.answer}</p>
            <p style="color:${userAns === q.answer ? "green" : "red"};">
                Your Answer: ${userAns}
            </p>
        `;

        result.appendChild(container);
    });
}

loadQuestion();