//declaring variables
var startQuizButton = document.querySelector("#startButton"); //start button for quiz
var questionPrompt = document.querySelector("#questionPrompt"); //first set of questions
var correct1 = document.querySelector("#correctAnswer1"); //first set of questions -correct answer
var incorrect1 = document.getElementsByClassName("btn-primary1"); //wrong answers for first set of questions
var nextQuestion = document.querySelector("#nextQuestion");
var nextQuestionBtn = document.querySelector("#nextQuestionBtn1"); //button for next question after answering first
var correct2 = document.querySelector("#correctAnswer2"); //second set of questions -correct answer
var incorrect2 = document.getElementsByClassName("btn-primary2"); //wrong answers for second set of questions
var nextQuestionBtn2 = document.querySelector("#nextQuestionBtn2"); //button for next question after answering second
var correct3 = document.querySelector("#correctAnswer3"); //third set of questions -correct answer
var incorrect3 = document.getElementsByClassName("btn-primary3"); //wrong answers for third set of questions
var nextQuestionBtn3 = document.querySelector("#nextQuestionBtn3"); //button for next question after answering third
var correct4 = document.querySelector("#correctAnswer4"); //final set of questions -correct answer
var incorrect4 = document.getElementsByClassName("btn-primary4"); //wrong answers for fourth set of questions
var endOfQuiz = document.querySelector("#endOfQuiz");
var gameOverScreen = document.querySelector(".gameOverScreen");
var enterName = document.querySelector("#enterName");
var highScoreButton = document.querySelector("#highScoreButton");
var enterNameHere = document.querySelector("#enterName1");

const timerText = document.querySelector("#countdown");
const timerText2 = document.querySelector(".gameOverScreen")
let count = 120;
let intervalID;

//TIMER STARTS HERE ---------------------------------------------------------------------------------------------
startQuizButton.addEventListener("click", function () {
  intervalID = setInterval(function () {
    count -= 1;
    timerText.textContent = count;
    timerText2.textContent = "Your final score is " + count;
    if (count < 0) {
      alert("Game over!");
      return;
    }
  }, 1000);

  for (var i = 0; i < incorrect1.length; i++) {
    //displays incorrect if user clicks anything other than correct answer and a next question button
    incorrect1[i].addEventListener("click", function () {
      count -= 10;
    });
  }

  for (var i = 0; i < incorrect2.length; i++) {
    //displays incorrect if user clicks anything other than correct answer and a next question button
    incorrect2[i].addEventListener("click", function () {
      count -= 10;
    });
  }

  for (var i = 0; i < incorrect3.length; i++) {
    //displays incorrect if user clicks anything other than correct answer and a next question button
    incorrect3[i].addEventListener("click", function () {
      count -= 10;
    });
  }

  for (var i = 0; i < incorrect4.length; i++) {
    //displays incorrect if user clicks anything other than correct answer and a next question button
    incorrect4[i].addEventListener("click", function () {
      count -= 10;
    });
  }

  endOfQuiz.addEventListener("click", function () {
    clearInterval(intervalID); //this stops the timer
    questionPrompt4.style.display = "none";
    endOfQuiz.style.display = "none";
    gameOverScreen.style.display = "inline-block";
    enterName.style.display = "inline";
  });
});
//TIMER ENDS HERE --------------------------------------------------------------------
//QUIZ STARTS HERE -------------------------------------------------------------------
document
  .getElementById("startButton")
  .addEventListener("click", function startButton() {
    //hides the start quiz button and displays the questions on click
    startQuizPrompt.style.display = "none"; //hiding the start quiz button
    questionPrompt.style.display = "block"; //displaying the first set of questions
  });

//question 1
correct1.addEventListener("click", function correct1() {
  //displays correct if user chooses correct answer and a next question button
  correctOne.style.display = "block";
  nextQuestion.style.display = "block";
  count += 30;
});

for (var i = 0; i < incorrect1.length; i++) {
  //displays incorrect if user clicks anything other than correct answer and a next question button
  incorrect1[i].addEventListener("click", function () {
    incorrectOne.style.display = "block";
    nextQuestion.style.display = "block";
  });
}

nextQuestionBtn.addEventListener("click", function nextQuestion() {
  //upon clicking next question button
  questionPrompt.style.display = "none"; //hides the first set of questions
  nextQuestionBtn1.style.display = "none"; //hides the next question button
  questionPrompt2.style.display = "block"; //displays the second set of questions
});
//question 2
correct2.addEventListener("click", function correct2() {
  //displays correct if user chooses correct answer and a next question button
  correctTwo.style.display = "block";
  nextQuestion2.style.display = "block";
  count += 30;
});

for (var i = 0; i < incorrect2.length; i++) {
  //displays incorrect if user clicks anything other than correct answer and a next question button
  incorrect2[i].addEventListener("click", function () {
    incorrectTwo.style.display = "block";
    nextQuestion2.style.display = "block";
  });
}

nextQuestionBtn2.addEventListener("click", function () {
  //upon clicking next question button
  questionPrompt2.style.display = "none"; //hides the second set of questions
  nextQuestion2.style.display = "none"; //hides the next question button
  questionPrompt3.style.display = "block"; //displays the third set of questions
});
//question 3
correct3.addEventListener("click", function correct3() {
  //displays correct if user chooses correct answer and a next question button
  correctThree.style.display = "block";
  nextQuestion3.style.display = "block";
  count += 30;
});

for (var i = 0; i < incorrect3.length; i++) {
  //displays incorrect if user clicks anything other than correct answer and a next question button
  incorrect3[i].addEventListener("click", function () {// the [i] here is referencing index 0
    incorrectThree.style.display = "block";// after function () means is a call back function
    nextQuestion3.style.display = "block";
  });
}

nextQuestionBtn3.addEventListener("click", function () {
  //upon clicking next question button
  questionPrompt3.style.display = "none"; //hides the third set of questions
  nextQuestionBtn3.style.display = "none"; //hides the next question button
  questionPrompt4.style.display = "block"; //displays the fourth set of questions
});
//question 4
correct4.addEventListener("click", function correct4() {
  //displays correct if user chooses correct answer and a next question button
  correctFour.style.display = "block";
  endOfQuiz.style.display = "block";
  count += 30;
});

for (var i = 0; i < incorrect4.length; i++) {
  //displays incorrect if user clicks anything other than correct answer and a next question button
  incorrect4[i].addEventListener("click", function () {
    incorrectFour.style.display = "block";
    endOfQuiz.style.display = "block";
  });
}

let winnerNames = [];//if exists use as value, if not set as empty array

const addWinnerName = ()=>{
  let winnerName = {
    High_Score_Winner: document.getElementById("enterName1").value,
  };
  winnerNames.push(winnerName);

  console.warn("added" , winnerNames );
  let p = document.querySelector("#msg p");
  p.textContent = document.getElementById("enterName1").value + " ;count: " + count;
  
  //saving to localStorage
  localStorage.setItem("theWinnerList", JSON.stringify(winnerNames) );
}

var winnerNames_deserialized = JSON.parse(localStorage.getItem("winnerName"));

document.addEventListener("DOMContentLoaded" , ()=>{//fat arrow function
  document.getElementById("highScoreButton").addEventListener("click", function(){
    addWinnerName() 
  });
});
    


// highScoreButton.addEventListener("click", function store() {
//   const key = enterNameHere.value;
//   localStorage.setItem("name1", key);
  
// });

// highScoreButton.addEventListener("click", function store(){
//   for (let i = 0; i < 10; i++) {
//     const key = enterNameHere.value[i];
//     localStorage.setItem("name1", key);
//   }
// });

//QUIZ ENDS HERE --------------------------------------------------------------------------------

//things to figure out
//how to subtract from timer when user selects wrong answer - done
//how to stop timer at end of quiz - done
//how to make game end if time reaches 0 -
//how to take remaining value from timer and save it as a score -

//how we can do this... have a duplicate timer hidden, then display that on screen upon finish game button being pressed
//with a message that says your score is _______
//prompt user below to enter name
//upon enter... display a screen that stores name and high score?




// var questions = [
// object to store questions and answers
//     {
//         text: "What is the name of Frodo's sword?",
//         options: ["Sting", "Boromire", "The Nazgul", "Denethor"],
//     },
//     //how to make sting appear as the correct answer
//     {
//         text: "Who created the One Ring?",
//         options: ["Boromire", "Geralt of Rivia", "Goku", "Sauron"],
//     },
//     {
//         text:
//             "Who is the strongest charater in the trilogy? (Not subjective at all)",
//         options: ["Frodo", "Aragorn", "Legolas", "Samwise the brave"],
//     },
//     {
//         text:
//             "What is the name of the city where the battle for Middle Earth took place?",
//         options: ["Rohan", "The Shire", "Minas Tirith", "Mordor"],
//     },
// ];

// var correctAnswer1 = questions[0].options[0]; // variables to store the answers to questions
// var correctAnswer2 = questions[1].options[3];
// var correctAnswer3 = questions[2].options[3];
// var correctAnswer4 = questions[3].options[2];
// console.log(correctAnswer1);
// console.log(correctAnswer2);
// console.log(correctAnswer3);
// console.log(correctAnswer4);