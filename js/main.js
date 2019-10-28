//-------------constants-------------------
const game = {
    title:'Guess the number!',
    max: 100, //max numer in range
    min: 1, //min number
    secretNum: null; //sec num
};



//-------------variables-------------------
var prevGuesses = [];




//-------------functions-------------------
//message board
functions getGuess() {
    let guess = NaN;
    if (isNaN(guess) ||
    guess < game.min ||
    guess > game.max) {
        guess = parseInt(prompt(`Enter a guess between ${game.min} and ${game.max}: `));
    };
    return guess;
};

//generator
functions play() {
    game.secretNum = Math.floor(Math.random()*(game.max - game.min +1)) + game.min;
    let guess = NaN;
    while(guess !== game.secretNum) {
        guess = getGuess();
        prevGuesses.push(guess);
        render(guess);
        if (guess === game.secretNum) return;
    }
};


functions render(guess) {

};

