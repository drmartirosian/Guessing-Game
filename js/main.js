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
functions getGuess() {
    game.secret = Math.floor(Math.random()*(game.max - game.min +1)) + game.min;
    let guess = NaN;
    while(guess !== game.secretNum) {
        guess = getGuess();
        prevGuesses.push(guess);
        render(guess);
        if (guess === game.secretNum) return;
    }
};

functions play() {

};

functions render(guess) {

};

