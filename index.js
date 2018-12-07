let inquirer = require('inquirer');
let chalk = require('chalk');
let Word = require('./Word');
let words = ["elephant", "giraffe", "Michael Bolton", "Carmen Electra", "Stockholm", "jeopardy", 
            "fish bowl", "ludacris", "triskaidekaphobia", "jellybean", "cucumber", "Happy Birthday"]
let guessesRemaining = 10;
let randomWord = "";
let unmaskedWord = "";

let questions = [
    {
        type: "input",
        name: "userInput",
        message: "Guess a letter!"
    }
]

/**
 * Main function that runs the game. If you use up your 10 turns, you lose.
 * If you guess all the letters in the word, you win.
 */
function startWordGuess(){
    if(!randomWord){
        randomWord = determineRandomWord();
        guessesRemaining = 10;
        console.log(`\n${randomWord.getWord()} \n\n`);
    }
    inquirer.prompt(questions).then(answers => {
        randomWord.guess(answers.userInput);
        console.log(`\n ${randomWord.getWord()} \n`);
        displayResults(answers.userInput);
        startWordGuess();
    });
}

/**
 * Displays the results after each guess
 * 
 * @param {*} wordBeforeGuess 
 * @param {*} wordAfterGuess 
 */
function displayResults(userGuess){
    if(randomWord.isWordGuessed()){
        console.log(`You got it right! Next word! \n`)
        randomWord = "";
    }
    else if (randomWord.isLetterGuessed(userGuess)){
        console.log(chalk.green(`Correct! \n`));
    }
    else{
        guessesRemaining--;
        if(guessesRemaining === 0){
            console.log(`\n You lose! No guesses left! The word was ${unmaskedWord}\n`);
            randomWord = "";
        }
        else{
            console.log(chalk.red(`Incorrect!!! ${guessesRemaining} guesses remaining \n`));
        }
    }
}

/**
 * Determines if all the letters in the word were guessed
 * 
 * @param {*} word 
 */
function isWordGuessed(word){
    let wordGuessed = false;
    if(word.indexOf("_") === -1){
        wordGuessed = true;
    }
    return wordGuessed;
}

/**
 * Randomly picks a word from the word bank
 */
function determineRandomWord(){
    unmaskedWord = words[Math.floor(Math.random() * words.length)]
    return new Word(unmaskedWord);
}

startWordGuess();


    