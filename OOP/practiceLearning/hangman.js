var Hangman = function (word, remaningGuesses) {
  this.word = word;
  this.remaningGuesses = remaningGuesses;
};

var game1 = new Hangman("Dog", 2);
console.log(game1);

var game2 = new Hangman("Beograd", 4);
console.log(game2);