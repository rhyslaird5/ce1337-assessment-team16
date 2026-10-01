//This enables the ability for the user to be prompted for an input.
const prompt = require("readline-sync");
//A function used to display that the user was incorrect and what the correct answer is.
function wrongAnswer(corrAns){
    console.log("That's incorrect its " + corrAns)
};
let loopPoints = null;
let condPoints = null;
let varPoints = null;
let javaPoints = null;
let num = 1;
//A function that can be used to restart the quiz when called.
function quiz(){
    let userCategories = prompt.question("Pick a Category \nA. Loops \nB. Conditional \nC. Variables \nD. JavaScript Basics \n");
    
    switch(userCategories){
        case "A":
            console.log("Loops");
            //A prompt to ask which Loop difficulty they would like.
            loopDifficulty = prompt.question("Pick a difficulty \nA.Hard = 20 points \nB.Medium = 15 points \nC.Easy = 10 points \nD.Very Easy = 5 points \n");
            num = 0;
            break;
        case "B":
            console.log("Conditional");
            //A prompt to ask which Conditional difficulty they would like.
            condDifficulty = prompt.question("Pick a difficulty \nA.Hard = 20 points \nB.Medium = 15 points \nC.Easy = 10 points \nD.Very Easy = 5 points \n");
            num = 0;
            break;
        case "C":
            console.log("Variables");
            //A prompt to ask which Variables difficulty they would like.
            varDifficulty = prompt.question("Pick a difficulty \nA.Hard = 20 points \nB.Medium = 15 points \nC.Easy = 10 points \nD.Very Easy = 5 points \n");
            num = 0;
            break;
        case "D":
            console.log("JavaScript Basics");
            //A prompt to ask which JavaScript difficulty they would like.
            javaDifficulty = prompt.question("Pick a difficulty \nA.Hard = 20 points \nB.Medium = 15 points \nC.Easy = 10 points \nD.Very Easy = 5 points \n");
            num = 0;
            break;
        default:
            console.log("Invalid input");
            break;
    };
    
};

quiz(); //This is used to start the quiz.
while (num === 1) {
    quiz();
    
};
// All arrays for each category and the questions associated with each category with answers arrays

let loopCategory =  ["Which loop is most suitable when you know exactly how many times something should repeat?", "Which loop may not run at all if its condition is false from the beginning?", "Which loop may not run at all if its condition is false from the beginning?", "Which loop type is guaranteed to execute at least once?" ];
let loopCategoryAnswers = ["C","A","B","C"];

let conditionalsCategory = ["Which operator means 'AND' in JavaScript?","What is the purpose of an if statement?", "Which operator means 'OR' in JavaScript?", "When should you use a switch statement?"];
let conditionalsCategoryAnswers = ["B","B","B","B"];

let variablesCategory = ["Which keyword is typically used for a variable whose value may change?", "Which keyword is used for a value that should stay constant?","What is a variable used for?", "Which of these is a Boolean value?"];
let variablesCategoryAnswers = ["B","B","B","C"];

let javascriptBasicsCategory = [" Fill in the blank: JavaScript is considered a ______ language because code is run line by line.", "What does NaN stand for?", "What is the purpose of console.log()?", "What naming style is commonly used for JavaScript variables containing multiple words?", ]
let javascriptBasicsCategoryAnswers = ["B","B","B","B"];

let answer = null;
switch(loopDifficulty){
    case "A":
       answer = prompt.question(loopCategory[1]);
       break;
    case "B":
        answer = prompt.question(loopCategory[2]);
        break;
    case "C":
        answer = prompt.question(loopCategory[3]);
        break;
    case "D":
        answer = prompt.question(loopCategory[4]);
        break;
};
//for use later
/*let name = {
    name: userName,
    points : 0,
}*/
