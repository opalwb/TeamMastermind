const wordLength = 5;
const numGuesses = 6;

let boardHolder = document.getElementById("GameHolder");
let currentGuess = 0;
let nextLetter = 0;


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
        boardHolder.appendChild(gameRow);
        for (letterNumber = 0; letterNumber < wordLength; letterNumber++){
            letterTile = document.createElement("div");
            letterTile.id = `Row${rowNumber}letter${letterNumber}`;
            letterTile.class = "emptyLetter";
            gameRow.appendChild(letterTile);
        }
    }
    
}

function onLetterTyped(e){

    //make sure it's a valid input. Later.
    input = e.key;
    console.log(input);

    //find the right box to change
    
    let guessRowID = `Row${currentGuess}`;
    let guessRow = document.getElementById(guessRowID);
    if ( nextLetter < wordLength){
        nextNode = guessRow.childNodes[nextLetter];
    }


    if(input == "Backspace"){
        if(nextLetter >= 0){
            //remove a letter
            nextNode.innerHTML = ""; //probably a better way to clear it out but we are doing science
            //go back
            nextLetter--;
        }
    }
    //assume nobody's gonna type a number because i'm lazy right now
    else{
        console.log("valid")
        nextNode.innerHTML = input;
        nextLetter++;
    } 

    //if allowed, put the letter in the box or remove a letter from the box

    //update the next letter counter
}

setupGame();

window.addEventListener("keydown", (e)=>onLetterTyped(e));
