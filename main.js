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
 
