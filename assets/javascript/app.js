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
    {
        question: "What was the quote that everyone seems to remember from Michelle Tanner in Full House?",
        answerChoices: ["You got it, dude.", "Cut. It. Out", "How rude!"],
        correctAnswer: "You got it, dude."
    },
    {
        question: "What was the name of the name of the blonde love interest for Buffy in Buffy the Vampire Slayer?",
        answerChoices: ["Angel", "Xander", "Spike"],
        correctAnswer: "Spike"
    },
    {
        question: "What was the candy that Kramer dropped over the side while watching a medical procedure in Seinfeld?",
        answerChoices: ["Kit Kats", "Milk Duds", "Junior Mints"],
        correctAnswer: "Junior Mints"
    },
    {
        question: "What was the name of the school principle from Saved by the Bell?",
        answerChoices: ["Mr. Belding", "Mr. Belvidere", "Mr. Burns"],
        correctAnswer: "Mr. Belding"
    },
    {
        question: "What was the name of Tim 'The Toolman' Taylor's handyman show from Home Improvement? ",
        answerChoices: ["Tool Time", "Tool Rules", "Tool Tricks"],
        correctAnswer: "Tool Time"
    },
    {
        question: "What was the catchphrase that Steve Urkel was known for in the '90s sitcom, Family Matters?",
        answerChoices: ["What does that mean?", "Did I do that?", "You know I can dig it!"],
        correctAnswer: "Did I do that?"
    },
    {
        question: "What is the name of the '90s sitcom that featured the 'Soup Nazi'?",
        answerChoices: ["Full House", "Twin Peaks", "Seinfeld"],
        correctAnswer: "Seinfeld"
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
     $("#answerChoices").append(questionP)
}
$("#startQuizButton").on("click", function (){
    $("#startQuizButton").replaceWith ();
    console.log("quizStarted");
}
// $("#submitQuizButton").on("click", function (event) {
    // event.preventDefault();
// }
)};
