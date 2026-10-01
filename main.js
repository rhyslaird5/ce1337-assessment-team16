//This enables the ability for the user to be prompted for an input.
const prompt = require("readline-sync");
//A function used to display that the user was incorrect and what the correct answer is.
function wrongAnswer(corrAns){
    console.log("That's incorrect its " + corrAns)
};
//A bare bones function that can be used to restart the quiz when called (need to update placeholders with correct quiz cates)
function quiz(){
    let cate = prompt.question("Pick a Category \n1. Loops \n2. Conditional \n3. Variables \n4. JavaScript Basics");
    cate = Number(cate);
    switch(cate){
        case 1:
            console.log("Loops");

            break;
        case 2:
            console.log("Conditional");

            break;
        case 3:
            console.log("Variables");

            break;
        case 4:
            console.log("JavaScript Basics")

            break;
            
    };
};

quiz() //This is used to start the quiz.
 
// All arrays for each category and the questions associated with each category with answers arrays

let loopCategory =  ["Which loop is most suitable when you know exactly how many times something should repeat?", "Which loop may not run at all if its condition is false from the beginning?", "Which loop may not run at all if its condition is false from the beginning?", "Which loop type is guaranteed to execute at least once?" ];
let loopCategoryAnswers = [3,1,2,3];

let conditionalsCategory = ["Which operator means 'AND' in JavaScript?","What is the purpose of an if statement?", "Which operator means 'OR' in JavaScript?", "When should you use a switch statement?"];
let conditionalsCategoryAnswers = [2,2,2,2];

let variablesCategory = ["Which keyword is typically used for a variable whose value may change?", "Which keyword is used for a value that should stay constant?","What is a variable used for?", "Which of these is a Boolean value?"];
let variablesCategoryAnswers = [2,2,2,3];

let javascriptBasicsCategory = [" Fill in the blank: JavaScript is considered a ______ language because code is run line by line.", "What does NaN stand for?", "What is the purpose of console.log()?", "What naming style is commonly used for JavaScript variables containing multiple words?", ]
let javascriptBasicsCategoryAnswers = [2,2,2,2];

let name = {
    name: userName,
    points : [0],
}