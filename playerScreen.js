const wordLength = 5;
const numGuesses = 6;

let boardHolder = document.getElementById("GameHolder");
let currentGuess = 0;
let nextLetter = 0;

let gameRows = [];

function setupGame(){
    makeEmptyBoard();
    currentGuess = 0;
    nextLetter = 0
    let keyWord = "hello";
}

function makeEmptyBoard(){
    let gameRow;
    let rowNumber;
    let letterNumber;
    let letterTile;
    for(rowNumber = 0; rowNumber < numGuesses; rowNumber++){
        gameRow = document.createElement("div");
        gameRow.id = `Row${rowNumber}`;
        gameRow.classList.add("gameRow")
        gameRows.push(gameRow);
        boardHolder.appendChild(gameRow);
        for (letterNumber = 0; letterNumber < wordLength; letterNumber++){
            letterTile = document.createElement("div");
            letterTile.id = `Row${rowNumber}letter${letterNumber}`;
            letterTile.classList.add("gameTile");
            gameRow.appendChild(letterTile);
        }
    }
    
}

function onLetterTyped(e){

    let guessRow = gameRows[currentGuess];
    console.log(guessRow);

    //make sure it's a valid input. Later.
    input = e.key;
    if(input == "Enter"){
        let guess = getGuess(guessRow);
        if(validGuess(guess)){
            nextGuess(guess);
        }
    }
        //find the right box to change

    //if it's a backspace, it's the last box that changed. If it's a letter, it's the next box.
    else if(input == "Backspace"){
        if(nextLetter > 0){
            nextLetter--;
            nextNode = guessRow.childNodes[nextLetter];
            //remove a letter
            nextNode.innerHTML = ""; //probably a better way to clear it out but we are doing science
        }
    }
    else {
        if ( nextLetter < wordLength){
            nextNode = guessRow.childNodes[nextLetter];
            nextNode.innerHTML = input;
            nextLetter++;
        }
    }
    

    //update the next letter counter
}

//takes a guess row and spits out a string of the guess.
function getGuess(guessRow){
    let guess = "";
    for(child of guessRow.children){
        guess = guess.concat(child.textContent);
    }
    return guess;
}

function validGuess(guess){
    //this function checks to see if the guess is a word.
    //That sounds like work.
    //Also it's not needed to test our logic!
    return (guess.length == wordLength) ? true : false;
    
}

function nextGuess(){
    let guessRow = gameRows[currentGuess];
    guessRow.classList.add("completedGuess");
    currentGuess++;
    nextLetter = 0;
}


setupGame();

window.addEventListener("keydown", (e)=>onLetterTyped(e));
