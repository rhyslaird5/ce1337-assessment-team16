//This enables the ability for the user to be prompted for an input.
const prompt = require("readline-sync");

//variable for player object
let player = {userName: "", points : 0, categoriesCompleted: []}; // renamed, added category completion check
player.userName = prompt.question("Please enter a username: ");

//A function used to display that the user was incorrect and what the correct answer is.
function showWrongAnswer(corrAns){ //renamed
    console.log("That's incorrect! Correct answer is " + corrAns);
};
let chosenCategory = null; // renamed: holds one category
// difficulty setting for each category
let loopDifficulty = null;
let condDifficulty = null;
let varDifficulty = null;
let basicsDifficulty = null; // renamed: JavaScript basics

//true once user picked valid category, not finished yet.
let isCategoryChosen = false; // renamed let num, since it's a boolean, flipped for later positive check
// store questions already asked so that no question is repeated
let askedQuestions = [];
// control main game loop - becomes true when all categories done or user stops
let isGameOver = false;

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
            loopDifficulty = prompt.question("Pick a difficulty \nA. Hard = 20 points \nB. Medium = 15 points \nC. Easy = 10 points \nD. Very Easy = 5 points \n");
            loopDifficulty = loopDifficulty.toUpperCase();
            isCategoryChosen = true;
            break;
        case "B":
            console.log("Conditionals");
            //A prompt to ask which Conditionals difficulty they would like.
            condDifficulty = prompt.question("Pick a difficulty \nA. Hard = 20 points \nB. Medium = 15 points \nC. Easy = 10 points \nD. Very Easy = 5 points \n");
            condDifficulty = condDifficulty.toUpperCase();
            isCategoryChosen = true;
            break;
        case "C":
            console.log("Variables");
            //A prompt to ask which Variables difficulty they would like.
            varDifficulty = prompt.question("Pick a difficulty \nA. Hard = 20 points \nB. Medium = 15 points \nC. Easy = 10 points \nD. Very Easy = 5 points \n");
            varDifficulty = varDifficulty.toUpperCase();
            isCategoryChosen = true;
            break;
        case "D":
            console.log("JavaScript Basics");
            //A prompt to ask which JavaScript Basics difficulty they would like.
            basicsDifficulty = prompt.question("Pick a difficulty \nA. Hard = 20 points \nB. Medium = 15 points \nC. Easy = 10 points \nD. Very Easy = 5 points \n");
            basicsDifficulty = basicsDifficulty.toUpperCase();
            isCategoryChosen = true;
            break;
        default:
            console.log("Invalid input, please enter A, B, C or D");
            break;
    };
    
};

let userAnswer = null;

//Function question will be used to shorten the amount of code needed therfore saving time
//catDiff is short for Category Difficulty; obosolete: catQ is short for Category Question, catQAnswer is shsort for Category Question Answers and catWrongAns is short for Categor wrong answers.
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
                    player.points = player.points + 20;
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
                    player.points = player.points + 20;
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
                    player.points = player.points + 20;
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
                    player.points = player.points + 20;
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
        // final report function
        return;
    };

    // asks the user if they want to continue; if yes, main loops takes user back to the category menu and if they don't then it calls a final report function then stops the program
    let userContinue = prompt.question("Would you like to continue? (yes/no): ");
    userContinue = userContinue.toUpperCase();
    if (userContinue != "YES"){
        isGameOver = true;

        // final report function
    }
};

// All arrays for each category and the questions associated with each category with answers arrays. Additionally, the options to each question

let loopsQuestions =  ["Which loop is most suitable when you know exactly how many times something should repeat?", "Which loop may not run at all if its condition is false from the beginning?", "What does the continue statement do?", "Which loop type is guaranteed to execute at least once?"];
let loopsAnswers = ["C","A","B","C"];
let loopsWrongAnswers = [["A","B","D"],["B","C","D"],["A","C","D"],["A","B","D"]];
let loopsOptions = [["A) While","B) Do-While","C) For","D) Switch"], ["A) While","B) Do-While","C) For","D) Break"],["A) Ends the loop permanently", "B) Skips the current iteration and moves to the next one", "C) Restarts the program", "D) Stops all code execution"], ["A) For","B) While","C) Do-While","D) Switch"]];

let conditionalsQuestions = ["Which operator means 'AND' in JavaScript?","What is the purpose of an if statement?", "Which operator means 'OR' in JavaScript?", "When should you use a switch statement?"];
let conditionalsAnswers = ["B","B","B","B"];
let conditionalsWrongAnswers = [["A","C","D"],["A","C","D"],["A","C","D"]];
let conditionalsOptions = [["A) ||", "B) &&", "C) !", "D) =="], ["A) To repeat code", "B) To execute code only when a condition is true", "C) To create variables", "D) To display output"], ["A) &&", "B) ||", "C) !", "D) ==="], ["A) When repeating code many times", "B) When checking one variable against many possible values", "C) When creating a constant", "D) When importing packages"]];

let variablesQuestions = ["Which keyword is typically used for a variable whose value may change?", "Which keyword is used for a value that should stay constant?","What is a variable used for?", "Which of these is a Boolean value?"];
let variablesAnswers = ["B","B","B","C"];
let variablesWrongAnswers = [["A","C","D"],["A","C","D"],["A","C","D"],["A","B","D"]];
let variablesOptions = [["A) const", "B) let", "C) fixed", "D) static"], ["A) let", "B) const", "C) var", "D) value"], ["A) Repeating code", "B) Storing data for later use", "C) Creating loops", "D) Ending a program"], ["A) 'Hello'", "B) 42", "C) true", "D) null"]];

let basicsQuestions = ["Fill in the blank: JavaScript is considered a ______ language because code is run line by line.", "What does NaN stand for?", "What is the purpose of console.log()?", "What naming style is commonly used for JavaScript variables containing multiple words?"];
let basicsAnswers = ["B","B","B","B"];
let basicsWrongAnswers = [["A","C","D"],["A","C","D"],["A","C","D"],["A","C","D"]];
let basicsOptions = [["A) Compiled", "B) Interpreted", "C) Binary", "D) Static"], ["A) New and Null", "B) Not a Number","C) No Assigned Name",  "D) Number as Null"], ["A) To get user input", "B) To display output in the console", "C) To create variables", "D) To stop a program"], ["A) snake_case", "B) camelCase", "C) PascalCase", "D) UPPERCASE"]];

// Hard questions, answers and options arrays
let loopsHardQuestions = ["Which loop is most appropriate when the number of iterations depends on user input and cannot be known beforehand?", "What is the primary risk of a poorly designed loop condition?", "Why might a programmer choose a for loop instead of a while loop?", "A loop should usually stop when:"];
let loopsHardAnswers = ["A","C","B","D"];
let loopsHardWrongAnswers = [["B","C","D"],["A","B","D"],["A","C","D"],["A","B","C"]];
let loopsHardOptions = [["A) while", "B) for", "C) switch", "D) const"], ["A) Variables become constants", "B) The loop runs only once", "C) The program may enter an infinite loop", "D) Functions stop working"], ["A) It always executes at least once", "B) Initialisation, condition checking and updating can be managed in one statement", "C) It cannot create infinite loops", "D) It executes faster in all situations"], ["A) A variable is created", "B) An output is displayed", "C) The program reaches the end of the file", "D) Its termination condition becomes true or false as intended"]];

let conditionalsHardQuestions = ["What is the main benefit of using a switch statement rather than many if-else statements?", "Which of the following best describes a nested conditional?", "Why are conditional statements important in programming?", "Which logical operator would be most appropriate when only one of several conditions needs to be true?"];
let conditionalsHardAnswers = ["B","C","A","D"]
let conditionalsHardWrongAnswers = [["A","C","D"],["A","B","D"],["B","C","D"]];
let conditionalsHardOptions = [["A) It uses less memory in every situation", "B) It can make code easier to read when checking one value against multiple options", "C) It can only check numbers", "D) It always executes faster"], ["A) A condition inside a loop", "B) Multiple switch statements", "C) A conditional statement placed inside another conditional statement", "D) Two conditions joined by AND"], ["A) They allow programs to make decisions based on data", "B) They store information", "C) They reduce file sizes", "D) They create functions automatically"], ["A) AND", "B) NOT", "C) Assignment", "D) OR"]];

let variablesHardQuestions = ["Why is it important to choose meaningful variable names?","What is a common advantage of using constants instead of regular variables where possible?","Which data type would be most appropriate for storing whether a student has submitted coursework?", "What is the difference between a variable's name and its value?"];
let variablesHardAnswers = ["A","C","B","D"];
let variablesHardWrongAnswers = [["B","C","D"],["A","B","D"],["A","C","D"],["A","B","C"],["A","B","C"]];
let variablesHardOptions = [["A) The code becomes easier to understand and maintain","B) The program runs faster","C) It reduces memory usage", "D) The compiler requires it"],["A) They can store more data","B) They can only store numbers","C) They help prevent accidental modification of important values","D) They require less memory"], ["A) String","B) Boolean","C) Integer","D) Character"], ["A) There is no difference","B) The value identifies the variable","C) The name changes automatically when the value changes","D) The name identifies the storage location, while the value is the data stored there"]];

let basicsHardQuestions = ["Why is JavaScript often described as a dynamically typed language?","Which principle is most important when writing maintainable JavaScript code?","Why are comments useful in a program?","JavaScript is commonly described as an event-driven language because:"];
let basicsHardAnswers = ["B","D","C","A"];
let basicsHardWrongAnswers = [["A","C","D"],["A","B","C"],["A","B","D"],["B","C","D"]];
let basicsHardOptions = [["A) It only works on websites","B) Variable types can be determined and changed during execution","C) Variables must always be declared as numbers","D) It converts every value into text"], ["A) Using the shortest possible variable names","B) Avoiding comments","C) Using as many global variables as possible","D) Producing clear, readable, and well-structured code"],["A) They make programs execute faster","B) They reduce memory usage","C) They help explain code to developers without affecting execution","D) They automatically fix errors"],["A) It can respond to user actions and other events as they occur","B) It processes only one variable at a time","C) It requires events to start","D) It cannot run without a web browser"]];

//run questions for chosen categories
function startCategory(){
    switch (chosenCategory){
        case "A":
            askQuestions(loopDifficulty, loopsQuestions, loopsAnswers, loopsWrongAnswers, loopsOptions);
            break;
        case "B":
            askQuestions(condDifficulty, conditionalsQuestions, conditionalsAnswers, conditionalsWrongAnswers, conditionalsOptions);
            break;
        case "C":
            askQuestions(varDifficulty, variablesQuestions, variablesAnswers, variablesWrongAnswers, variablesOptions);
            break;
        case "D":
            askQuestions(basicsDifficulty, basicsQuestions, basicsAnswers, basicsWrongAnswers, basicsOptions);
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


