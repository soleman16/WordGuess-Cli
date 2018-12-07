let inquirer = require('inquirer');
 let Word = require('./Word');
 let words = ["elephant", "giraffe", "Michael Bolton", "Carmen Electra", "Stockholm", "jeopardy", 
              "fish bowl", "ludacris", "triskaidekaphobia", "jellybean", "cucumber", "Happy Birthday"]
 let guessesRemaining = 10;
 let randomWord = "";

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
    if(!randomWord || isGameOver(randomWord.getWord())){
        console.log(`\n Game over! You Lose! \n`)
        randomWord = determineRandomWord();
        guessesRemaining = 10;
        console.log(`\n${randomWord.getWord()} \n\n`);
    }
    inquirer.prompt(questions).then(answers => {
        let wordBeforeGuess = randomWord.getWord();
        randomWord.guess(answers.userInput);
        let wordAfterGuess = randomWord.getWord();
        console.log(`\n ${wordAfterGuess} \n`);
        displayResults(wordBeforeGuess, wordAfterGuess);
        startWordGuess();
    });
}

/**
 * Displays the results after each guess
 * 
 * @param {*} wordBeforeGuess 
 * @param {*} wordAfterGuess 
 */
function displayResults(wordBeforeGuess, wordAfterGuess){
    if(isWordGuessed(wordAfterGuess)){
        console.log(`You got it right! Next word! \n`)
    }
    else if(wordBeforeGuess === wordAfterGuess){
        console.log(`Incorrect!!! ${--guessesRemaining} guesses remaining \n`);
    }
    else {
        console.log(`Correct! \n`);
    }
}

/**
 * Game is over if you guess all the letters in the word, or if
 * you run out of guesses
 * 
 * @param {*} word 
 */
function isGameOver(word){
    return(guessesRemaining === 0 || isWordGuessed(word));
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
    return new Word(words[Math.floor(Math.random() * words.length)]);
}

startWordGuess();


    