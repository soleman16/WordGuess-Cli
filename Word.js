let Letter = require('./Letter');

 let Word = function (word){
    this.letters = populateLetters(word);
    this.getWord = function(){
        let wordArray = [];
        for(let index in this.letters){
            let currentLetter = this.letters[index];
            let char = currentLetter.getChar();
            wordArray.push(char);
        }
        return wordArray.join(" ");
    }
    this.guess = function(char){
        for(let index in this.letters){
            let currentLetter = this.letters[index];
            currentLetter.guess(char);
        }
    }
    this.isWordGuessed = function(){
        return this.letters.every(function(letter){
            return letter.hasBeenGuessed;
        })
    },
    this.isLetterGuessed = function(char){
        let letterGuessed = false;
        this.letters.forEach(function(letter){
            if(letter.char === char){
                letterGuessed = true;
            }
        })
        return letterGuessed;
    }
 }

 function populateLetters(word){
    let charArray = word.split('');
    let letterArray = [];
    for(let index in charArray){
        let currentChar = charArray[index];
        letterArray.push(new Letter(currentChar));
    }
    return letterArray;
 }

 module.exports = Word;

 // Testing:

//  let myWord = new Word("elephant");
//  console.log(myWord.getWord());
//  console.log(myWord.guess("e"));
//  console.log(myWord.getWord());
//  console.log(myWord.guess("l"));
//  console.log(myWord.getWord());
//  console.log(myWord.guess("e"));
//  console.log(myWord.getWord());
//  console.log(myWord.guess("p"));
//  console.log(myWord.getWord());
//  console.log(myWord.guess("h"));
//  console.log(myWord.getWord());
//  console.log(myWord.guess("a"));
//  console.log(myWord.getWord());
//  console.log(myWord.guess("n"));
//  console.log(myWord.getWord());
//  console.log(myWord.guess("t"));
//  console.log(myWord.getWord());