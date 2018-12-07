let Letter = function(char){
    this.hasBeenGuessed = false;
    this.char = char;
    this.getChar = function(){
        if (this.hasBeenGuessed){
            return this.char;
        }
        else{
            if(this.char === " "){
                return " "
            }
        }
        return "_";
    }
    this.guess = function(char){
        if(this.char.toLowerCase() === char.toLowerCase()){
            this.hasBeenGuessed = true;
        }
    }
 }

 module.exports = Letter;

// Testing:

//  let myLetter = new Letter("a");
//  console.log(`hasBeenGuessed: ${myLetter.hasBeenGuessed} \n`);
//  console.log(`char: ${myLetter.char} \n`);

//  myLetter.guess("b");
//  console.log(`setting b...`)
//  console.log(`hasBeenGuessed: ${myLetter.hasBeenGuessed} \n`);

//  myLetter.guess("a");
//  console.log(`setting a...`)
//  console.log(`hasBeenGuessed: ${myLetter.hasBeenGuessed} \n`);

