//This enables the ability for the user to be prompted for an input.
const prompt = require("readline-sync");
//A function used to display that the user was incorrect and what the correct answer is.
function wrongAnswer(corrAns){
    console.log("That's incorrect its " + corrAns)
};
let userCategories = null;
let loopDifficulty = null;
let condDifficulty = null;
let varDifficulty = null;
let javaDifficulty = null;
let num = true;
//A function that can be used to restart the quiz when called.
function quiz(){
    userCategories = prompt.question("Pick a Category \nA. Loops \nB. Conditional \nC. Variables \nD. JavaScript Basics \n");
    
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
            num2 = false;
            break;
        case "C":
            console.log(catQ[2])
            answer = prompt.question();
            num2 = false;
            break;
        case "D":
            console.log(catQ[3])
            answer = prompt.question();
            num2 = false;
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
// All arrays for each category and the questions associated with each category with answers arrays. Additionally, the options to each question
// commented out the wrong answers arrays as not sure if they are needed as we could probable do a != argument can be used if needed.

let loopCategory =  ["Which loop is most suitable when you know exactly how many times something should repeat?", "Which loop may not run at all if its condition is false from the beginning?", "Which loop may not run at all if its condition is false from the beginning?", "Which loop type is guaranteed to execute at least once?" ];
let loopCategoryAnswers = ["C","A","B","C"];
//let loopWrong = [["A","B","D"],["B","C","D"],["A","C","D"],["A","B","D"]];
let loopOptions = [["A) While","B) Do-While","C) For","D) Switch"], ["A) While","B) Do-While","C) For","D) Break"],["A) Ends the loop permanently", "B) skips the current iteration and moves to the next one", " C) Restarts the program", "D) Stops all code execution" ], ["A) For","B) While","C) Do-While","D) Switch"]];

let conditionalsCategory = ["Which operator means 'AND' in JavaScript?","What is the purpose of an if statement?", "Which operator means 'OR' in JavaScript?", "When should you use a switch statement?"];
let conditionalsCategoryAnswers = ["B","B","B","B"];
//let conditionalsWrong = [["A","C","D"],["A","C","D"],["A","C","D"]];
let conditonalOptions = [["A) ||", "B) &&", "C) !", "D) =="], ["A) To repeat code", "B) To execute code only when a condition is true", "C) To create variables", "D) To display output"], ["A) &&", "B) ||", "C) !", "D) ==="], ["A) When repeating code many times", "B) When checking one variable against many possible values", "C) When creating a constant", "D) When importing packages"]];

let variablesCategory = ["Which keyword is typically used for a variable whose value may change?", "Which keyword is used for a value that should stay constant?","What is a variable used for?", "Which of these is a Boolean value?"];
let variablesCategoryAnswers = ["B","B","B","C"];
//let varianlesWrong = [["A","C","D"],["A","C","D"],["A","C","D"],["A","B","D"]];
let variableOptions = [["A) const", " B) let", "C) fixed", "D) static"], ["A) let", "B) const", "C) var", "D) value"], ["A) Repeating code", "B) Storing data for later use", "C) Creating loops", "D) Ending a program"], ["A) 'Hello'", "B) 42", "C) true", "D) null"]];

let javascriptBasicsCategory = [" Fill in the blank: JavaScript is considered a ______ language because code is run line by line.", "What does NaN stand for?", "What is the purpose of console.log()?", "What naming style is commonly used for JavaScript variables containing multiple words?", ];
let javascriptBasicsCategoryAnswers = ["B","B","B","B"];
//let javacriptWrong = [["A","C","D"],["A","C","D"],["A","C","D"],["A","C","D"]];
let javasctriptBasicsOptions = [["A) Compiled", "B) Interpreted", "C) Binary", "D) Static"], ["A) New and Null", "B) Not a Number","C) No Assigned Name",  "D) Number as Null"], ["A) To get user input", "B) To display output in the console", "C) To create variables", "D) To stop a program"], ["A) snake_case", "B) camelCase", "C) Pascal-Case", "D) UPPERCASE"]];

// Hard questions, answers and options arrays
let loopCategoryHard = ["Which loop is most appropriate when the number of iterations depends on user input and cannot be known beforehand?", "What is the primary risk of a poorly designed loop condition?", "Why might a programmer choose a for loop instead of a while loop?", "A loop should usually stop when:"];
let loopsCategoryHardAnswers = ["A","C","B","D"];
//let loopsHardWrong = [["B","C","D"],["A","B","D"],["A","C","D"],["A","B","C"]];
let loopHardOptions = [["A) while", "B) for", "C) switch", "D) const"], ["A) Variables become constants", "B) The loop runs only once", "C) The program may enter an infinite loop", "D) Functions stop working"], ["A) It always executes at least once", "B) Initialisation, condition checking and updating can be managed in one statement", "C) It cannot create infinite loops", "D) It executes faster in all situations"], ["A) A variable is created", "B) An output is displayed", "C) The program reaches the end of the file", "D) Its termination condition becomes true or false as intended"]];

let conditionalsCategoryHard = ["What is the main benefit of using a switch statement rather than many if-else statements?", "Which of the following best describes a nested conditional?", "Why are conditional statements important in programming?", "Which logical operator would be most appropriate when only one of several conditions needs to be true?"];
let conditionalsCategoryHardAnswers = ["B","C","A","D"]
//let conditionalHardWrong = [["A","C","D"],["A","B","D"],["B","C","D"]];
let conditionalHardoptions = [["A) It uses less memory in every situation", "B) It can make code easier to read when checking one value against multiple options", "C) It can only check numbers", "D) It always executes faster"], ["A) A condition inside a loop", "B) Multiple switch statements", " C) A conditional statement placed inside another conditional statement", "D) Two conditions joined by AND"], ["A) They allow programs to make decisions based on data", "B) They store information", "C) They reduce file sizes", "D) They create functions automatically"], ["A) AND", "B) NOT", "C) Assignment", "D) OR"]];

let variablesCategoryHard = ["Why is it important to choose meaningful variable names?","What is a common advantage of using constants instead of regular variables where possible?","Which data type would be most appropriate for storing whether a student has submitted coursework?", "What is the difference between a variable's name and its value?"];
let variablesCategoryHardAnswers = ["A","C","B","D"];
//let variablesHardWrong = [["B","C","D"],["A","B","D"],["A","C","D"],["A","B","C"],["A","B","C"]];
let variablesCategoryoptions = [["A) The code becomes easier to understand and maintain","B) The program runs faster","C) It reduces memory usage", "D) The compiler requires it"],["A) They can store more data","B) They can only store numbers","C) They help prevent accidental modification of important values","D) They require less memory"], ["A) String","B) Boolean","C) Integer","D) Character"], ["A) There is no difference","B) The value identifies the variable","C) The name changes automatically when the value changes","D) The name identifies the storage location, while the value is the data stored there"]];

let javascriptBasicsCategoryHard = ["Why is JavaScript often described as a dynamically typed language?","Which principle is most important when writing maintainable JavaScript code?","Why are comments useful in a program?","JavaScript is commonly described as an event-driven language because:"];
let javascriptBasicsCategoryHardAnswers = ["B","D","C","A"];
//let javacriptHardWrong = [["A","C","D"],["A","B","C"],["A","B","D"],["B","C","D"]];
let JavaScriptHardOptions = [["A) It only works on websites","B) Variable types can be determined and changed during execution","C) Variables must always be declared as numbers","D) It converts every value into text"], ["A) Using the shortest possible variable names","B) Avoiding comments","C) Using as many global variables as possible","D) Producing clear, readable, and well-structured code"],["A) They make programs execute faster","B) They reduce memory usage","C) They help explain code to developers without affecting execution","D) They automatically fix errors"],["A) It can respond to user actions and other events as they occur","B) It processes only one variable at a time","C) It requires events to start","D) It cannot run without a web browser"]];


switch (userCategories){
    case "A":
        question(loopDifficulty, loopCategory, loopCategoryAnswers, loopWrong);
        break;
    case "B":
        question(condDifficulty, conditionalsCategory, conditionalsCategoryAnswers, conditionalsWrong);
        break;
    case "C":
        question(varDifficulty, variablesCategory, variablesCategoryAnswers, varianlesWrong);
        break;
    case "D":
        question(javaDifficulty, javascriptBasicsCategory, javascriptBasicsCategoryAnswers, javacriptWrong);
        break;
    default:
        console.log("Invalid Input");

}

