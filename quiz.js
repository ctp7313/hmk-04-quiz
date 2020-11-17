const btnStart = document.getElementById("quizStart");
const btnHigh = document.getElementById("highScore");
const btnSave = document.getElementById("saveScore");
const timer = document.getElementById("timer");
const response = document.getElementById("response");
const question = document.getElementById("question")
var q = 0;
var choices;
var answer;
var btnAnswer;
var time;

function quizStart() {
    // Hide the start screen
    $("#startScreen").hide();
    // Set the clock to 15 seconds
    timer.innerHTML = 15;
    //Ask the question
    quizQuestion();
    // Variable time gets printed to timer id
    time = document.getElementById("timer").textContent;
    // Time counts down from 1000 milliseconds
    let countdown = setInterval(function() {
        time--;
        timer.textContent = time
        // If time reaches 0, end the timer and Print
        if (time <=0) {
            clearInterval(countdown);
            timer.textContent = "You ran out of time!";
            question.innerHTML = "Your score was " + time
            // Add in function here to reset quiz
            // If quiz is out of questions, end and Print. 
        } else if (q === 6 ){ 
            clearInterval(countdown);
            timer.textContent = "Your final score is " + time
            response.innerHTML = "";
            // Function to enter initials and save
            saveScores();
        }
    }, 1000);

}

function quizQuestion() {
    // Pulls choices and answer from questions.js
    choices = questions[q].choices;
    answer = questions[q].answer;
    // Populates the question id with the question 
    question.innerHTML = "<hr>" + questions[q].title + "<br>";
    // For loop to create possible answer buttons
    for (let i = 0; i < choices.length; i++) {
        btnAnswer = $("<button>");
        btnAnswer.addClass("btn btn-primary");
        btnAnswer.text(choices[i]);
        $("#question").append(btnAnswer);
    };
    checkAnswer()

}

function checkAnswer() {
    // if (answer === question.answer) {
    //     print "correct!"
    //     add 1 to nextQuestion and increment in questions array for quizQuestion()
    // } else if {
    //     deduct 3 seconds from timer
    // }
    btnAnswer.on("click", function(e) {
        if (e.target.innerText === answer) {
            response.innerHTML = "Correct!";
            q = q++;
            quizQuestion()
        } else {
            response.innerHTML = "Wrong!";
            time -= 3;
            q = q++;
            quizQuestion()
        };
    })
}

function highScore() {

};

function saveScore() {
    $("#endScore").hide();
    
    $("#startScreen").show();

};

btnStart.onclick = quizStart;

// btnHighScore.onclick = highScore;

// btnSave.onclick = saveScore;

