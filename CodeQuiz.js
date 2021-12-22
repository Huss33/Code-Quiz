// console.log("working");
var timer = 75;
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
// var questions = questionInfo[0]
// var userOptions = questionInfo[0].options[0];
// var correctAnswer = questionInfo[0].correct[2];
// console.log(questions)
// var score =  
// console.log(correctAnswer);
var questionInfo = [
        {
          q:"Commonly used data types DO NOT include:",                                        
          //<br><br>Strings <br>Booleans <br>Alerts <br>Numbers",
          opt: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
          correct: "3. Alerts"
        },
        {
          q:"The condition in an if/else statement is enclosed within ______.", 
          opt: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
          correct: "2. Curly Brackets"
        },
        {
          q:"Arrays in JavaScript can be used to store _____.",
          opt: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
          correct: "4. All of the Above"
        },
        {
          q:"String values must be enclosed within _____ when being assigned to variables.",
          opt: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
          correct: "3. Quotes"
        },
        {
          q:"A very useful tool used during development and debugging for printing content to the debugger is _____.",
          opt: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console Log"],
          correct: "4. Console Log"
        }
]
// var questions = questionInfo[0].q
// var questionCurrent = questionInfo(0) 
// console.log(questions)
// var quizComplete = answer final q within timeframe 

// document.getElementById(questions).innerHTML = questionInfo[0].opt;

for (var i = 0; i < questionInfo.length; i++) {
  console.log(questionInfo[i])
}

// for (var i = 0; i < opt.length; i++) {
  // console.log(opt[i]);
// }
startBtn.addEventListener("click", function(){
    // alert("start")
  document.getElementById("firstPage").remove()
  // document.getElementById("questions").innerHTML = myString;
  // document.getElementById(questions).innerHTML = questionInfo[0].opt[i];
  // console.log(JSON.stringify("opt"));
  let questions = JSON.stringify(questionInfo[0].q);
  let options = JSON.stringify(choice);
  // console.log(myString);
  document.getElementById("questions").innerHTML = questions;
  
  var choice = document.createElement("input");
  choice.setAttribute("type", "checkbox")
  document.body.appendChild(choice);
  choice.textContent = options
  // console.log(choice);
  
    // function myFunction() {
    //   var displayQ = function () {
    //     console.log(questionInfo[0].q);
    //   }
    //   // document.getElementById("questions").innerHTML = questionInfo; possibly have to convert to string via .join to make work
    //   for (var i = 0; i < questionInfo.length; i++) {
    //     console.log(questionInfo[i])
    //   }
    // }
    var interval = setInterval(function() {
        timer--;
    // console.log(timer);
        timerEl.textContent = timer;
        if (timer === 0) {                                     // || quizComplete  //
          clearInterval(interval);
          // displayWord.textContent = "All Done!"
          console.log(timer);
      }
    }, 1000);
})




// var questions = [
//     {
//         q: "",
//         options: ["", "", "", ""],
//         correct: ""
//     },
//     {
//         q: "",
//         options: ["", "", "", ""],
//         correct: ""
//     }
// ]

//Click on Start button
  // start the timer
  // display the first question with options 
    // check if index < questions.length
    //create a function with index as an argument
  //each option is a button with click event on it // may be use event.target with matches function

//Stopt the timer
  // if timer = 0;
  // if user finished the quiz

//Find out if user clicked option is correct or not
  //if correct : display message (for certain time period)
  //wrong : display msg for certain time period)
  // calculate the score (but don't display) and change the timer accordingly
// index++
//display the next question

//once user finished with last question
 // stop timer
 //ask for user initials in a form > take that info and display it with score
 //save initials and score in local storage
 // a href will refer to second html file

 //possibly use array.prototype.find() to select answer to questions//
        //const array1 = [5,12,8,130,44];
        //const found = array1.find(element => element >10)
        //console.log(found);
        //expected output: 12// The first item in the array to meet the requirments