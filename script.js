document.getElementById("startButton").addEventListener("click", function () {
    const startingMinutes = 2;
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById("countdown");

    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }
});

var startQuizButton = document.querySelector("#startButton");
var questionPrompt = document.querySelector("#question-prompt");


startQuizButton.addEventListener("click", function startButton(){
    var x = document.getElementById("startQuizPrompt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    //in here is where I can create an event where the new questions appear
    questionPrompt.style.display = "block";
});

//I'm gonna try it will just an array


var questions = [
    {
        text: "What is the name of Frodo's sword?",
        options: ["Sting", "Boromire", "The Nazgul", "Denethor"],
        answer: "Sting",
    },
    //how to make sting appear as the correct answer
    {
        text: "Who created the One Ring?",
        options: ["Boromire", "Geralt of Rivia", "Goku", "Sauron"],
        answer: "Sauron",
    },
    {
        text: "Who is the strongest charater in the trilogy? (Not subjective at all)",
        options: ["Frodo", "Aragorn", "Legolas", "Samwise the brave"],
        answer:"Samwise the brave",
    },
    {
        text: "What is the name of the city where the battle for Middle Earth took place?",
        options: ["Rohan", "The Shire", "Minas Tirith", "Mordor"],
        answer: "Minas Tirith",
    },
    
];

var correctAnswer1 = questions[0].options[0];


for (var i = 0; i < questions.options; i++){

}

    