//declaring variables
var startQuizButton = document.querySelector("#startButton");
var questionPrompt = document.querySelector("#questionPrompt");
var correct1 = document.querySelector("#correctAnswer1");
var incorrect1 = document.getElementsByClassName("btn-primary1");
var nextQuestion = document.querySelector("#nextQuestion");
var nextQuestionBtn = document.querySelector("#nextQuestionBtn1");

var questions = [
    // object to store questions and answers
    {
        text: "What is the name of Frodo's sword?",
        options: ["Sting", "Boromire", "The Nazgul", "Denethor"],
    },
    //how to make sting appear as the correct answer
    {
        text: "Who created the One Ring?",
        options: ["Boromire", "Geralt of Rivia", "Goku", "Sauron"],
    },
    {
        text:
            "Who is the strongest charater in the trilogy? (Not subjective at all)",
        options: ["Frodo", "Aragorn", "Legolas", "Samwise the brave"],
    },
    {
        text:
            "What is the name of the city where the battle for Middle Earth took place?",
        options: ["Rohan", "The Shire", "Minas Tirith", "Mordor"],
    },
];

var correctAnswer1 = questions[0].options[0]; // variables to store the answers to questions
var correctAnswer2 = questions[1].options[3];
var correctAnswer3 = questions[2].options[3];
var correctAnswer4 = questions[3].options[2];
console.log(correctAnswer1);
console.log(correctAnswer2);
console.log(correctAnswer3);
console.log(correctAnswer4);

document.getElementById("startButton").addEventListener("click", function () {
    const startingMinutes = 2;
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById("countdown"); // defines a variable countdown, looks at HTML to <p> with an id of countdown

    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        //function to countdown
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        countdownEl.innerHTML = `${minutes}: ${seconds}`; //changes the innerHTML of the countdown element
        time--; // - 1 second each time
    }
});

startQuizButton.addEventListener("click", function startButton() {
    startQuizPrompt.style.display = "none";
    //this function hides the start button and displays the questions
    // var x = document.getElementById("startQuizPrompt");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
    //in here is where I can create an event where the new questions appear
    questionPrompt.style.display = "block";
    
});

correct1.addEventListener("click", function correct1() {
    correctOne.style.display = "block";
    nextQuestion.style.display = "block";
});

// incorrect1.addEventListener("click", function incorrect1() {
    //     incorrectOne.style.display = "block";
    // });
    
    for (var i = 0; i < incorrect1.length; i++){
    incorrect1[i].addEventListener("click", function() {
        incorrectOne.style.display = "block";
        nextQuestion.style.display = "block";
    })
}

nextQuestionBtn.addEventListener("click", function nextQuestion() {
    questionPrompt.style.display = "none";
});
