// global variables
let score = 0
let questionNumber = 0

// DOM elements
const questionDiv = document.getElementById("question")

// list of questions
// each question has a "prompt", a list of "answers", and a "correctAnswer"
// each "answer" in the list is an array with 2 parts: [answerId, answerText]
// the "correctAnswer" matches the answerId of the correct answer
const questions = [
    {
        prompt: "What planet is closest to the Sun?",
        answers: [
            ["earth","Earth"],
            ["saturn","Saturn"],
            ["mercury","Mercury"],
            ["neptune","Neptune"]
        ],
        correctAnswer: "mercury"
    },
    {
        prompt: "Who is Darth Vader?",
        answers: [
            ["your-father","Your Father"],
            ["obi-wan-kenobi","Obi-wan Kenobi"],
            ["han-solo","Han Solo"],
            ["anakin","Anakin Skywalker"]
        ],
        correctAnswer: "anakin"
    },
    {
        prompt: "Who is the Goddess of Love and Beauty?",
        answers: [
            ["aphrodite","Aphrodite"],
            ["persephone","Persephone"],
            ["calliope","Calliope"],
            ["antheia","Antheia"]
        ],
        correctAnswer: "aphrodite"
    },
    {
        prompt: "How many states are in the United States?",
        answers: [
            ["50","50"],
            ["13","13"],
            ["51","51"],
            ["49","49"]
        ],
        correctAnswer: "50"
    },
    {
        prompt: "What fruit has seeds on the outside?",
        answers: [
            ["watermelons","Watermelons"],
            ["strawberries","Strawberries"],
            ["peaches","Peaches"],
            ["grapes","Grapes"]
        ],
        correctAnswer: "strawberries"
    }
]

// display one question!
function ask() {

    // only true until we see all questions
    if (questionNumber < questions.length) {

        // get the current question from the list
        const currentQuestion = questions[questionNumber]

        // the backticks below let us put together a complex string with JavaScript
        questionDiv.innerHTML = `
            <p>${currentQuestion.prompt}</p>
            ${
                currentQuestion.answers.map (answer => {
                // using .map here, we include each of the possible answers in the string
                // each answer has two indexes, so we can plug in the text and the ID in appropriate places
                // inspect this element in your browser to see how it turns out!
                return `
                <input type="radio" id=${answer[0]} name=${answer[0]} value=${answer[1]}>
                <label for=${answer[0]}>${answer[1]}</label><br>
                `
                }).join('') // .join just turns our answer array into one string
            }
            <button type="button" onclick="check()">Submit</button>
        `
    } else {
        // display the score and reset after all the questions
        questionDiv.innerHTML = `
            <h3>Score: ${score} / ${questions.length}</h3>
            <button type="button" onclick="reset()">Reset and try again!</button>
        `
    }
}

function check() {

    // pull up the current question from the list
    const questionToCheck = questions[questionNumber]

    // find the input with the correct answer
    const correctRadio = document.getElementById(questionToCheck.correctAnswer)

    if (correctRadio.checked) {
        questionDiv.innerHTML = `
            <h3>CORRECT!</h3>
            <button type="button" onclick="ask()">CONTINUE</button>
        `
        // only increment the score on a correct answer
        score++
    } else {
        questionDiv.innerHTML = `
            <h3>WRONG!</h3>
            <button type="button" onclick="ask()">CONTINUE</button>
        `
    }

    // move on to the next question
    questionNumber++
}

function reset() {
    questionNumber = 0
    ask()
}

// use reset to start it up
reset()
