// console.log("working");
var timer = 75;
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
// var score =  

var questions = [
        {
          q:"Commonly used data types DO NOT include:",
          options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
          correct: "3. Alerts"
        }
]

startBtn.addEventListener("click", function(){
    // alert("start")
    var interval = setInterval(function() {
        timer--;
    // console.log(timer);
        timerEl.textContent = timer;
        if (timer === 0) {
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
