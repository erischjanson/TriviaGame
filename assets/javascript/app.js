//Window loads
//Questions and answers are displayed
//Timer begins counting down
//User selects an answer for each questions



//$(document).ready(function(){

var questions=[
  {
    question: "What was the main character's name?",
    possibleAnswers: ["Kevin Arnold", "Arnold Johnson", "Kevin Cooper"],
    answer: "Kevin Arnold"

  },{
    question: "Who was the main character's best friend?",
    possibleAnswers: ["Jim", "Bob", "Paul"],
    answer: "Paul"
  }, {
    question:"What song is playing at the end of the 'Museum' episode?",
    possibleAnswers: ["God Only Knows", "Here, There, and Everywhere", "Crimson and Clover"],
    answer: "God Only Knows"
  }
]

var userAnswer
var incorrectGuesses=0;
var correctGuesses=0;


var number=100
var intervalId

function renderGame(){
	$("#scoreboard").hide();


}

renderGame()

    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;
      console.log(number)

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + "Time Remaining: " + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function when a user clicks on the start button and hide start button
    	$("#start").on("click", function(){
    		run();

    	})

    	



console.log(questions[2].answer)


for(var i=0; i < questions.length; i ++) {
	//$(".answers").text(questions[i].possibleAnswers);
	var questionContent=questions[i].question;
	var choices=questions[i].possibleAnswers

	var questionDiv = $("<div>");

	questionDiv.addClass("questions");
	console.log(questionDiv);

	questionDiv.text(questionContent);

	$("#questionBox").append(questionDiv);


	var answerDiv=$("<div>");
	answerDiv.addClass("answers");
	answerDiv.text(choices);

	$("#questionBox").append(answerDiv);
	

}

//if (userAnswer===questions[i].answer){
	//correctGuesses++;
//} 

//if (userAnswer!==questions[i].answer){
	//incorrectGuesses++;

//}

//when timer reaches 0, display correct and incorrect guesses in scoreboard
console.log(correctGuesses);
//$("#scoreboard").show();
$("#correctAnswers").html("You answered " + correctGuesses + " questions correctly.")

$("#incorrectAnswers").html("You answered " + incorrectGuesses + " questions incorrectly.")
//;});	
