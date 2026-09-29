const prompt = require("readline-sync");
//A function used to display that the user was incorrect and what the correct answer is.
function wrongAnswer(corrAns){
    console.log("That's incorrect its " + corrAns)
};
let questLoop = Array();
//A bare bones function that can be used to restart the quiz when called (need to update placeholders with correct quiz cates and questions )
function quiz(){
    let cate = prompt.question("Pick a Category \n1. Loops \n2. Arrays \n");
    cate = Number(cate);
    switch(cate){
        case 1:
            console.log("Loops");
            questLoop[1] = prompt.question("How many seconds are in a min \n1 60 \n2 30 \n");
            questLoop[1] = Number(questLoop[1]);
            break;
        case 2:
            console.log("Arrays");
            break;
        case 3:
            console.log();
            break
            
    };
};


quiz()
 switch(questLoop[1]){
        case 1:
            console.log("Correct");
            quiz();
        case 2:
            wrongAnswer("60");
            quiz();
            
    };
