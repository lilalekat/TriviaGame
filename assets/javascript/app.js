var triviaQuestions = [
    {
        question: "Where was the Will Smith’s character “born and raised” in The Fresh Prince of Bel-Air?",
        answerChoices: ["South Side of Chicago", "East Compton", "West Philadelphia"],
        correctAnswer: "West Philadelphia"
    },
    {
        question: "What was the name of the pet monkey that Ross had during the early part of the Friends series?",
        answerChoices: ["Maurice", "Marcel", "Martell"],
        correctAnswer: "Marcel"
    },
    {
        question: "What was the name of the main female lead in the TV show, Boy Meets World?",
        answerChoices: ["Topanga", "Winny", "Blossom"],
        correctAnswer: "Topanga"
    },
];
//Declaration of Variables for Timer, If/Else, ForLoop 
var time = 60
var x = setInterval(function () {
    time = time - 1;
    $("#timer").text(time);
    if (time === 0) {
        clearInterval(x)
        time = 60
    }
}, 1000);

for (var i = 0; i < triviaQuestions.length; i++) {
    var questionP = $("<p>");
    questionP.text(triviaQuestions[i].question)
    $("#quizQuestions").append(questionP)
    for (var j = 0; j < triviaQuestions[i].answerChoices.length; j++) {
     

    }
}
