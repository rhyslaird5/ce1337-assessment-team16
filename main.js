//This enables the ability for the user to be prompted for an input.
const prompt = require("readline-sync");
//A function used to display that the user was incorrect and what the correct answer is.
function wrongAnswer(corrAns){
    console.log("That's incorrect its " + corrAns)
};
let loopDifficulty = null;
let condDifficulty = null;
let varDifficulty = null;
let javaDifficulty = null;
let num = true;
//A function that can be used to restart the quiz when called.
function quiz(){
    let userCategories = prompt.question("Pick a Category \nA. Loops \nB. Conditional \nC. Variables \nD. JavaScript Basics \n");
    
    switch(userCategories){
        case "A":
            console.log("Loops");
            //A prompt to ask which Loop difficulty they would like.
            loopDifficulty = prompt.question("Pick a difficulty \nA.Hard = 20 points \nB.Medium = 15 points \nC.Easy = 10 points \nD.Very Easy = 5 points \n");
            num = false;
            break;
        case "B":
            console.log("Conditional");
            //A prompt to ask which Conditional difficulty they would like.
            condDifficulty = prompt.question("Pick a difficulty \nA.Hard = 20 points \nB.Medium = 15 points \nC.Easy = 10 points \nD.Very Easy = 5 points \n");
            num = false;
            break;
        case "C":
            console.log("Variables");
            //A prompt to ask which Variables difficulty they would like.
            varDifficulty = prompt.question("Pick a difficulty \nA.Hard = 20 points \nB.Medium = 15 points \nC.Easy = 10 points \nD.Very Easy = 5 points \n");
            num = false;
            break;
        case "D":
            console.log("JavaScript Basics");
            //A prompt to ask which JavaScript difficulty they would like.
            javaDifficulty = prompt.question("Pick a difficulty \nA.Hard = 20 points \nB.Medium = 15 points \nC.Easy = 10 points \nD.Very Easy = 5 points \n");
            num = false;
            break;
        default:
            console.log("Invalid input");
            break;
    };
    
};

let answer = null;
let num2 = true
//Function question will be used to shorten the amount of code needed therfore saving time
//catDiff is short for Category Difficulty, catQ is short for Category Question, catQAnswer is shsort for Category Question Answers and catWrongAns is short for Categor wrong answers.
function question(catDiff, catQ, catQAnswers, catWrongAns){
    switch(catDiff){
        case "A":
            console.log(catQ[0])
            answer = prompt.question();
            if (answer == catQAnswers[0]){
                console.log("That's correct!");
                name.points = name.points + 20;
            }
            else if (answer == catWrongAns[0]){
                console.log(wrongAnswer(catQAnswers[0]));
            }
            else {
                console.log("Invalid input");
                question;
            };
            num2 = false;
            break;
        case "B":
            console.log(catQ[1])
            answer = prompt.question();
            break;
        case "C":
            console.log(catQ[2])
            answer = prompt.question();
            break;
        case "D":
            console.log(catQ[3])
            answer = prompt.question();
            break;
        default:
            ("Invalid Input")
            break;
    };
};

//for use later
let name = {userName: "", points : 0};
name.userName = prompt.question("Please enter a Username ");

quiz(); //This is used to start the quiz.
while (num == true && num2 == true) {
    quiz();
    
};
// All arrays for each category and the questions associated with each category with answers arrays

let loopCategory =  ["Which loop is most suitable when you know exactly how many times something should repeat?", "Which loop may not run at all if its condition is false from the beginning?", "Which loop may not run at all if its condition is false from the beginning?", "Which loop type is guaranteed to execute at least once?" ];
let loopCategoryAnswers = ["C","A","B","C"];
let loopWrong = [["A","B","D"],]

let conditionalsCategory = ["Which operator means 'AND' in JavaScript?","What is the purpose of an if statement?", "Which operator means 'OR' in JavaScript?", "When should you use a switch statement?"];
let conditionalsCategoryAnswers = ["B","B","B","B"];

let variablesCategory = ["Which keyword is typically used for a variable whose value may change?", "Which keyword is used for a value that should stay constant?","What is a variable used for?", "Which of these is a Boolean value?"];
let variablesCategoryAnswers = ["B","B","B","C"];

let javascriptBasicsCategory = [" Fill in the blank: JavaScript is considered a ______ language because code is run line by line.", "What does NaN stand for?", "What is the purpose of console.log()?", "What naming style is commonly used for JavaScript variables containing multiple words?", ]
let javascriptBasicsCategoryAnswers = ["B","B","B","B"];


if (userCategories == "A"){
question(loopDifficulty, loopCategory, loopCategoryAnswers, loopWrong);
}

