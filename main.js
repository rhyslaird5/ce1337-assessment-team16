//This enables the ability for the user to be prompted for an input.
const prompt = require("readline-sync");

// control main game loop - becomes true when all categories done or user wants to stop
let isGameOver = false;

// player object constant (for sanity)
const player = {userName: "", points : 0, categoriesCompleted: []}; // renamed, added category completion check
player.userName = prompt.question("Please enter a username: ");

let chosenCategory = null; // renamed: holds one category
//once user picked valid category becomes true, not finished yet.
let isCategoryChosen = false; // renamed let num, since it's a boolean, flipped for later positive check

// difficulty setting for each category
let loopDifficulty = null;
let condDifficulty = null;
let varDifficulty = null;
let basicsDifficulty = null; // renamed: JavaScript basics
// validate difficulty inputs
const validDifficulties = ["A", "B", "C", "D"];

function getPoints(difficulty) {
    switch (difficulty) {
        case "A": return 20;
        case "B": return 15;
        case "C": return 10;
        case "D": return 5;
        default:  return 0;
    }
}

// store questions already asked so that no question is repeated
let askedQuestions = [];
// variable used later to store answers to questions asked
let userAnswer = null;

//A function used to display that the user was incorrect and what the correct answer is.
function showWrongAnswer(corrAns){ //renamed
    console.log("That's incorrect! Correct answer is " + corrAns);
};

//A function that can be used to restart the quiz when called.

//shows category menu and asks for difficulty in chosen category
function chooseCategory(){
    isCategoryChosen = false; // resets each time so that a blocked or invalid pick doesn't start a category
    chosenCategory = prompt.question("Pick a category \nA. Loops \nB. Conditionals \nC. Variables \nD. JavaScript Basics \n");
    chosenCategory = chosenCategory.toUpperCase();
    // block choosing done categories
    if (player.categoriesCompleted.includes(chosenCategory)){
        console.log("You've already completed that category, please pick a different one.");
        return;
    };
    switch(chosenCategory){
        case "A":
            console.log("Loops");
            //A prompt to ask which Loops difficulty they would like.
            // keeps prompting until difficulty input is A, B, C or D
            do {
                loopDifficulty = prompt.question("Pick a difficulty \nA. Hard = 20 points \nB. Medium = 15 points \nC. Easy = 10 points \nD. Very Easy = 5 points \n");
                loopDifficulty = loopDifficulty.toUpperCase();
                if (!validDifficulties.includes(loopDifficulty)){
                    console.log("Invalid input, please enter A, B, C or D");
                };
            } while (!validDifficulties.includes(loopDifficulty));
            isCategoryChosen = true;
            break;
        case "B":
            console.log("Conditionals");
            //A prompt to ask which Conditionals difficulty they would like.
            // keeps prompting until difficulty input is A, B, C or D
            do {
                condDifficulty = prompt.question("Pick a difficulty \nA. Hard = 20 points \nB. Medium = 15 points \nC. Easy = 10 points \nD. Very Easy = 5 points \n");
                condDifficulty = condDifficulty.toUpperCase();
                if (!validDifficulties.includes(condDifficulty)){
                    console.log("Invalid input, please enter A, B, C or D");
                };
            } while (!validDifficulties.includes(condDifficulty));
            isCategoryChosen = true;
            break;
        case "C":
            console.log("Variables");
            //A prompt to ask which Variables difficulty they would like.
            // keeps prompting until difficulty input is A, B, C or D
            do {
                varDifficulty = prompt.question("Pick a difficulty \nA. Hard = 20 points \nB. Medium = 15 points \nC. Easy = 10 points \nD. Very Easy = 5 points \n");
                varDifficulty = varDifficulty.toUpperCase();
                if (!validDifficulties.includes(varDifficulty)){
                    console.log("Invalid input, please enter A, B, C or D");
                };
            } while (!validDifficulties.includes(varDifficulty));
            isCategoryChosen = true;
            break;
        case "D":
            console.log("JavaScript Basics");
            //A prompt to ask which JavaScript Basics difficulty they would like.
            // keeps prompting until difficulty input is A, B, C or D
            do {
                basicsDifficulty = prompt.question("Pick a difficulty \nA. Hard = 20 points \nB. Medium = 15 points \nC. Easy = 10 points \nD. Very Easy = 5 points \n");
                basicsDifficulty = basicsDifficulty.toUpperCase();
                if (!validDifficulties.includes(basicsDifficulty)){
                    console.log("Invalid input, please enter A, B, C or D");
                };
            } while (!validDifficulties.includes(basicsDifficulty));
            isCategoryChosen = true;
            break;
        default:
            console.log("Invalid input, please enter A, B, C or D");
            break;
    };
    
};

//let userAnswer = null; moved to start of file, it was feeling lonely here... 
// OR bring let askedQuestions = []; here together? maybe let isGameOver = false; too?

//
function finalReport() {
                    console.log("\nFinal Report");
                    console.log("Player: " + player.userName);
                    console.log("Score: " + player.points);
                    console.log("Categories completed: " + player.categoriesCompleted.join(", "));
        };

//Function question will be used to shorten the amount of code needed therfore saving time
//catDiff is short for Category Difficulty; obsolete: catQ is short for Category Question, catQAnswer is shsort for Category Question Answers and catWrongAns is short for Categor wrong answers.
// asks all questions in a category, checks answer, updates score
function askQuestions(catDiff, questions, correctAnswers, wrongAnswers, categoryOptions){
    for (let i =0; i<4;i++){
        // check and skip already asked questions; then later record answered questions
        if (askedQuestions.includes(questions[i])){
            continue;
        };
        switch(catDiff){
            case "A":
                console.log(questions[i])
                for (let j =0; j <4;j++){
                    console.log(categoryOptions[i][j]+"\n")
                }
                userAnswer = prompt.question("Enter your answer: ");
                userAnswer = userAnswer.toUpperCase();
                if (userAnswer == correctAnswers[i]){
                    console.log("That's correct!");
                    player.points += getPoints(catDiff);
                    console.log(player.points);
                }
                else if (userAnswer != correctAnswers[i]){
                    showWrongAnswer(correctAnswers[i]);
                }
                else {
                    console.log("Invalid input");
                    askQuestions();
                };
                break;
            case "B":
                console.log(questions[i])
                for (let j =0; j <4;j++){
                    console.log(categoryOptions[i][j]+"\n")
                }
                userAnswer = prompt.question("Enter your answer: ");
                userAnswer = userAnswer.toUpperCase();
                if (userAnswer == correctAnswers[i]){
                    console.log("That's correct!");
                    player.points += getPoints(catDiff);
                    console.log(player.points);
                }
                else if (userAnswer != correctAnswers[i]){
                    showWrongAnswer(correctAnswers[i]);
                }
                else {
                    console.log("Invalid input");
                    askQuestions();
                };
                break;
            case "C":
                console.log(questions[i])
                for (let j =0; j <4;j++){
                    console.log(categoryOptions[i][j]+"\n")
                }
                userAnswer = prompt.question("Enter your answer: ");
                userAnswer = userAnswer.toUpperCase();
                if (userAnswer == correctAnswers[i]){
                    console.log("That's correct!");
                    player.points += getPoints(catDiff);
                    console.log(player.points);
                }
                else if (userAnswer != correctAnswers[i]){
                    showWrongAnswer(correctAnswers[i]);
                }
                else {
                    console.log("Invalid input");
                    askQuestions();
                };
                break;
            case "D":
                console.log(questions[i])
                for (let j =0; j <4;j++){
                    console.log(categoryOptions[i][j]+"\n")
                }
                userAnswer = prompt.question("Enter your answer: ");
                userAnswer = userAnswer.toUpperCase();
                if (userAnswer == correctAnswers[i]){
                    console.log("That's correct!");
                    player.points += getPoints(catDiff);
                    console.log(player.points);
                }
                else if (userAnswer != correctAnswers[i]){
                    showWrongAnswer(correctAnswers[i]);
                }
                else {
                    console.log("Invalid input");
                    askQuestions();
                };
                break;
            default:
                console.log("Invalid input, please enter A, B, C or D");
                break;
        };
        //once question is answered, records so that it can't be asked again
        askedQuestions.push(questions[i]);
    }
    // once category ends - add to completed categories
    player.categoriesCompleted.push(chosenCategory);
    console.log("Categories completed: " + player.categoriesCompleted.length + "/4");

    // end game when all categories done
    if (player.categoriesCompleted.length === 4){
        console.log("You've completed all 4 categories!");
        isGameOver = true;
        
        finalReport();
return;
    };

    // asks the user if they want to continue; if yes, main loops takes user back to the category menu and if they don't then it calls a final report function then stops the program
    let userContinue = prompt.question("Would you like to continue? (yes/no): ");
    userContinue = userContinue.toUpperCase();
    if (userContinue != "YES"){
        isGameOver = true;
        
        finalReport();
    }
};

// All arrays for each category and the questions associated with each category with answers arrays. Additionally, the options to each question

// Very easy difficulty questions, answers and options 
let loopCategoryVeryEasy = ["What does a loop do?","Which of these is a type of loop in JavaScript?","Which keyword can be used to stop a loop early?","Which loop is commonly used when you know how many times you want to repeat something?"];
let loopCategoryVeryEasyAnswers = ["A","C","B","D"];
let loopCategoryVeryEasyOptions = [["A) Repeats instructions","B) Deletes variables","C) Closes the program","D) Creates a webpage"],["A) repeat","B) switch","C) while","D) const"],["A) stop","B) break","C) exit","D) end"],["A) if","B) switch","C) while","D) for"]];

let conditionalsCategoryVeryEasy = ["Which statement is used to check if a condition is true?","Which keyword can run something when an if condition is false?","Which symbol means 'greater than'?","What type of value is usually produced when a condition is checked?"];
let conditionalsCategoryVeryEasyAnswers = ["B","C","D","A"];
let conditionalsCategoryVeryEasyOptions = [["A) for","B) if","C) let","D) break"],["A) switch","B) then","C) else","D) while"],["A) <","B) =","C) !","D) >"],[" A) Boolean","B) String","C) Array","D) Object"]];

let variablesCategoryVeryEasy = ["What is a variable used for?","Which keyword can be used to create a variable in JavaScript?","Which of these is a Boolean value?","Which data type is used for text?"];
let variablesCategoryVeryEasyAnswers = ["D","A","C","B"];
let variablesCategoryVeryEasyOptions = [["A) Repeating code","B) Ending a program","C) Making a website colourful","D) Storing data"],["A) let","B) if","C) loop","D) print"],["A) 'Hello'","B) 25","C) true","D) 'JavaScript'"],["A) Number","B) String","C) Boolean","D) Loop"]];

let javascriptBasicsCategoryVeryEasy = ["Which file extension is commonly used for JavaScript files?","What is JavaScript?","Which option is used to write a single-line comment in JavaScript?","What does console.log() mainly do?"];
let javascriptBasicsCategoryVeryEasyAnswers = ["C","A","D","B"];
let javascriptBasicsCategoryVeryEasyOptions = [["A) .css","B) .html","C) .js","D) .java"],["A) A programming language","B) A web browser","C) An operating system","D) A computer brand"],["A) ##","B) \\","C) --","D) //"],["A) Deletes information","B) Displays information in the console","C) Creates a loop","D) Closes the program"]];

// Easy difficulty questions, answers and options 

let loopCategoryEasy =  ["Which loop is most suitable when you know exactly how many times something should repeat?", "Which loop may not run at all if its condition is false from the beginning?", "What does the continue statement do?", "Which loop type is guaranteed to execute at least once?" ];
let loopCategoryEasyAnswers = ["C","A","B","C"];
let loopEasyOptions = [["A) While","B) Do-While","C) For","D) Switch"], ["A) While","B) Do-While","C) For","D) Break"],["A) Ends the loop permanently", "B) skips the current iteration and moves to the next one", "C) Restarts the program", "D) Stops all code execution" ], ["A) For","B) While","C) Do-While","D) Switch"]];

let conditionalsCategory = ["Which operator means 'AND' in JavaScript?","What is the purpose of an if statement?", "Which operator means 'OR' in JavaScript?", "When should you use a switch statement?"];
let conditionalsCategoryAnswers = ["B","B","B","B"];
let conditonalOptions = [["A) ||", "B) &&", "C) !", "D) =="], ["A) To repeat code", "B) To execute code only when a condition is true", "C) To create variables", "D) To display output"], ["A) &&", "B) ||", "C) !", "D) ==="], ["A) When repeating code many times", "B) When checking one variable against many possible values", "C) When creating a constant", "D) When importing packages"]];

let variablesCategory = ["Which keyword is typically used for a variable whose value may change?", "Which keyword is used for a value that should stay constant?","What is a variable used for?", "Which of these is a Boolean value?"];
let variablesCategoryAnswers = ["B","B","B","C"];
let variableOptions = [["A) const", " B) let", "C) fixed", "D) static"], ["A) let", "B) const", "C) var", "D) value"], ["A) Repeating code", "B) Storing data for later use", "C) Creating loops", "D) Ending a program"], ["A) 'Hello'", "B) 42", "C) true", "D) null"]];

let javascriptBasicsCategory = [" Fill in the blank: JavaScript is considered a ______ language because code is run line by line.", "What does NaN stand for?", "What is the purpose of console.log()?", "What naming style is commonly used for JavaScript variables containing multiple words?", ];
let javascriptBasicsCategoryAnswers = ["B","B","B","B"];
let javasctriptBasicsOptions = [["A) Compiled", "B) Interpreted", "C) Binary", "D) Static"], ["A) New and Null", "B) Not a Number","C) No Assigned Name",  "D) Number as Null"], ["A) To get user input", "B) To display output in the console", "C) To create variables", "D) To stop a program"], ["A) snake_case", "B) camelCase", "C) Pascal-Case", "D) UPPERCASE"]];

// Medium questions, answers and options arrays 

let loopCategoryMedium = ["What is the main purpose of a loop?", "Which loop is guaranteed to run at least once?", "What does the break statement do when used inside a loop?", "What is most likely to cause an infinite loop?"];
let loopCategoryMediumAnswers = ["B", "D", "A", "C"];
let loopCategoryMediumOptions = [["A) To store multiple values", "B) To repeat a set of instructions", "C) To make decisions", "D) To create variables"], ["A) while", "B) for","C) forEach","D) do-while"], ["A) It exits the loop", "B) It skips the current iteration", "C) It restarts the loop", "D) It pauses the loop"], ["A) A fixed counter", "B) A break statement", "C) A condition that never becomes false", "D) A for loop"]];

let conditionalsCategoryMedium = ["What is the purpose of an else statement?", "Which logical operator requires BOTH conditions to be true?", "When would a switch statement be particularly useful?", "What does the ! logical operator do?"];
let conditionalsCategoryMediumAnswers = ["C","A","B","D"];
let conditionalMediumOptions = [["A) It repeats the if statement","B) It checks the same condition again","C) It runs when the previous condition is false","D) It ends the program"],["A) &&","B) ||","C) !","D) ="],["A) When repeating something a fixed number of times","B) When comparing one value against several possible cases","C) When declaring a variable","D) When displaying output"],["A) Checks if two values are equal","B) Joins two conditions together","C) Assigns a value","D) Reverses a Boolean value"]];

let variablesCategoryMedium = ["Which JavaScript keyword prevents a variable from being reassigned?","What data type would be most suitable for storing a person's age?","What value does a declared variable have if no value has been assigned to it?","What is variable scope?"];
let variablesCategoryMediumAnswers = ["D","A","C","B"];
let variablesCategoryMediumOptions = [["A) let","B) var","C) static","D) const"],["A) Number","B) Boolean","C) String","D) Undefined"],["A) null","B) false","C) undefined","D) 0"],["A) The data type stored in a variable","B) The part of a program where a variable can be accessed","C) The maximum size of a variable","D) The name given to a variable"]];

let javascriptBasicsCategoryMedium = [" What is the purpose of console.log()?","2. What does NaN mean in JavaScript?","Which symbol is commonly used to write a single-line comment in JavaScript?","What is a Boolean used to represent?"];
let javascriptBasicsCategoryMediumAnswers = ["A","D","B","C"];
let javascriptBasicsCategoryMediumOptions = [["A) To display information in the console", "B) To ask the user for input","C) To create a variable","D) To display an alert"],["A) Null as Number","B) No Assigned Name","C) Negative and Null","D) Not a Number"],["A) #","B) //","C) <!--","D) **"],["A) Text values","B) Decimal numbers","C) true or false","D) Multiple values at once"]];

// Hard questions, answers and options arrays

let loopCategoryHard = ["Which loop is most appropriate when the number of iterations depends on user input and cannot be known beforehand?", "What is the primary risk of a poorly designed loop condition?", "Why might a programmer choose a for loop instead of a while loop?", "A loop should usually stop when:"];
let loopsCategoryHardAnswers = ["A","C","B","D"];
let loopHardOptions = [["A) while", "B) for", "C) switch", "D) const"], ["A) Variables become constants", "B) The loop runs only once", "C) The program may enter an infinite loop", "D) Functions stop working"], ["A) It always executes at least once", "B) Initialisation, condition checking and updating can be managed in one statement", "C) It cannot create infinite loops", "D) It executes faster in all situations"], ["A) A variable is created", "B) An output is displayed", "C) The program reaches the end of the file", "D) Its termination condition becomes true or false as intended"]];

let conditionalsCategoryHard = ["What is the main benefit of using a switch statement rather than many if-else statements?", "Which of the following best describes a nested conditional?", "Why are conditional statements important in programming?", "Which logical operator would be most appropriate when only one of several conditions needs to be true?"];
let conditionalsCategoryHardAnswers = ["B","C","A","D"]
let conditionalHardoptions = [["A) It uses less memory in every situation", "B) It can make code easier to read when checking one value against multiple options", "C) It can only check numbers", "D) It always executes faster"], ["A) A condition inside a loop", "B) Multiple switch statements", " C) A conditional statement placed inside another conditional statement", "D) Two conditions joined by AND"], ["A) They allow programs to make decisions based on data", "B) They store information", "C) They reduce file sizes", "D) They create functions automatically"], ["A) AND", "B) NOT", "C) Assignment", "D) OR"]];

let variablesCategoryHard = ["Why is it important to choose meaningful variable names?","What is a common advantage of using constants instead of regular variables where possible?","Which data type would be most appropriate for storing whether a student has submitted coursework?", "What is the difference between a variable's name and its value?"];
let variablesCategoryHardAnswers = ["A","C","B","D"];
let variablesHardoptions = [["A) The code becomes easier to understand and maintain","B) The program runs faster","C) It reduces memory usage", "D) The compiler requires it"],["A) They can store more data","B) They can only store numbers","C) They help prevent accidental modification of important values","D) They require less memory"], ["A) String","B) Boolean","C) Integer","D) Character"], ["A) There is no difference","B) The value identifies the variable","C) The name changes automatically when the value changes","D) The name identifies the storage location, while the value is the data stored there"]];

let javascriptBasicsCategoryHard = ["Why is JavaScript often described as a dynamically typed language?","Which principle is most important when writing maintainable JavaScript code?","Why are comments useful in a program?","JavaScript is commonly described as an event-driven language because:"];
let javascriptBasicsCategoryHardAnswers = ["B","D","C","A"];

let JavaScriptHardOptions = [["A) It only works on websites","B) Variable types can be determined and changed during execution","C) Variables must always be declared as numbers","D) It converts every value into text"], ["A) Using the shortest possible variable names","B) Avoiding comments","C) Using as many global variables as possible","D) Producing clear, readable, and well-structured code"],["A) They make programs execute faster","B) They reduce memory usage","C) They help explain code to developers without affecting execution","D) They automatically fix errors"],["A) It can respond to user actions and other events as they occur","B) It processes only one variable at a time","C) It requires events to start","D) It cannot run without a web browser"]];

// match each difficulty letter to the correct question, answer and option arrays
let loopsQuestionsByDifficulty = {A: loopCategoryHard, B: loopCategoryMedium, C: loopCategoryEasy, D: loopCategoryVeryEasy};
let loopsAnswersByDifficulty = {A: loopsCategoryHardAnswers, B: loopCategoryMediumAnswers, C: loopCategoryEasyAnswers, D: loopCategoryVeryEasyAnswers};
let loopsOptionsByDifficulty = {A: loopHardOptions, B: loopCategoryMediumOptions, C: loopEasyOptions, D: loopCategoryVeryEasyOptions};

let conditionalsQuestionsByDifficulty = {A: conditionalsCategoryHard, B: conditionalsCategoryMedium, C: conditionalsCategory, D: conditionalsCategoryVeryEasy};
let conditionalsAnswersByDifficulty = {A: conditionalsCategoryHardAnswers, B: conditionalsCategoryMediumAnswers, C: conditionalsCategoryAnswers, D: conditionalsCategoryVeryEasyAnswers};
let conditionalsOptionsByDifficulty = {A: conditionalHardoptions, B: conditionalMediumOptions, C: conditonalOptions, D: conditionalsCategoryVeryEasyOptions};

let variablesQuestionsByDifficulty = {A: variablesCategoryHard, B: variablesCategoryMedium, C: variablesCategory, D: variablesCategoryVeryEasy};
let variablesAnswersByDifficulty = {A: variablesCategoryHardAnswers, B: variablesCategoryMediumAnswers, C: variablesCategoryAnswers, D: variablesCategoryVeryEasyAnswers};
let variablesOptionsByDifficulty = {A: variablesHardoptions, B: variablesCategoryMediumOptions, C: variableOptions, D: variablesCategoryVeryEasyOptions};

let basicsQuestionsByDifficulty = {A: javascriptBasicsCategoryHard, B: javascriptBasicsCategoryMedium, C: javascriptBasicsCategory, D: javascriptBasicsCategoryVeryEasy};
let basicsAnswersByDifficulty = {A: javascriptBasicsCategoryHardAnswers, B: javascriptBasicsCategoryMediumAnswers, C: javascriptBasicsCategoryAnswers, D: javascriptBasicsCategoryVeryEasyAnswers};
let basicsOptionsByDifficulty = {A: JavaScriptHardOptions, B: javascriptBasicsCategoryMediumOptions, C: javasctriptBasicsOptions, D: javascriptBasicsCategoryVeryEasyOptions};

//run questions for chosen categories
function startCategory(){
    switch (chosenCategory){
        case "A":
            askQuestions(loopDifficulty, loopsQuestionsByDifficulty[loopDifficulty], loopsAnswersByDifficulty[loopDifficulty], [], loopsOptionsByDifficulty[loopDifficulty]);
            break;
        case "B":
            askQuestions(condDifficulty, conditionalsQuestionsByDifficulty[condDifficulty], conditionalsAnswersByDifficulty[condDifficulty], [], conditionalsOptionsByDifficulty[condDifficulty]);
            break;
        case "C":
            askQuestions(varDifficulty, variablesQuestionsByDifficulty[varDifficulty], variablesAnswersByDifficulty[varDifficulty], [], variablesOptionsByDifficulty[varDifficulty]);
            break;
        case "D":
            askQuestions(basicsDifficulty, basicsQuestionsByDifficulty[basicsDifficulty], basicsAnswersByDifficulty[basicsDifficulty], [], basicsOptionsByDifficulty[basicsDifficulty]);
            break;
        default:
            console.log("Invalid input");
    }
};

//(new) main game loop; keeps showing the category menu until game over
while (!isGameOver){
    chooseCategory();
    if (isCategoryChosen){
        startCategory();
    };
};


