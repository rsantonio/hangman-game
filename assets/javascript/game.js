//List of Variables I need

// Wins
var Wins = 0;

//Losses
var Loss = 0;

// Number of Guesses

var Guesses = 10;

//Empty array to push wrong letters

var Letters = [];

// list of animals
var animals =["elephant", "giraffe","albatross", "buffalo","cougar", "tortoise", "dolphin", "koala", "whale", "goldfish", "monkey"];

var Words;
var choosenWord = [];

var blanks = [];

var wordIndex;

var guessedIndex; 

// Create varible to keep track of letters that remain to be guessed.

var spanChoosenWord = document.getElementById("spanChoosenWord");
var spanNumberTries = document.getElementById("spanNumberTries");
var spanGuessedLetters = document.getElementById("spanGuessedLetters");
var spanWins = document.getElementById("spanWins");
var spanLoss = document.getElementById("spanLoss");
var gameStatus = document.getElementById("gameStatus");

// functions
function wordSelection ()
{
	// randomly choosing from the list for the player to guess
	wordIndex = Math.floor(Math.random() * animals.length);
	Words = animals[wordIndex];
	
}

// setting up the words and replacing letters with underscores
function wordSetup () 
{
	choosenWord = [];
	blanks = [];
	for ( var i = 0; i < Words.length; i++)
	{
		choosenWord.push(Words[i]);
		blanks[i] = "_";
	}
	spanChoosenWord.innerHTML = blanks.join(" ");
	console.log(choosenWord);
}

//the start the game when the page loads
function startGame ()
{
	wordSelection ();
	wordSetup ();

	for ( var i =0; i < choosenWord.length; i++)
	{
		if (choosenWord[i] === " ") 
		{
			blanks[i] = "&nbsp;";
			spanChoosenWord.innerHTML = blanks.join(" ");
		}
	}

	Guesses = 10;
	Letters = [];
	spanGuessedLetters.innerHTML = Letters;
	spanWins.innerHTML = Wins;
	spanLoss.innerHTML = Loss;
	spanNumberTries.innerHTML = Guesses;
	gameStatus.innerHTML = "Press any key to start";

}

// user lost
function gameOver () 
{
	Loss++;
	spanLoss.innerHTML = Loss;
	gameStatus.innerHTML = "You lost.";
}

//user won 
function gameWon ()
{
	Wins++;
	spanWins.innerHTML = Wins;
	gameStatus.innerHTML = "You won."; 
}

//reset the game 
function resetGame ()
{
	Letters = [];
	Guesses = 10;
}


// Game Loop
startGame ();

	//On key up of any key, the game will start and choosen word will display.
	document.onkeyup = function(event) 
	{

		if (Guesses < 1)
			{
			return;
			} 
		else if (blanks.indexOf("_") < 0)
			{
				return;
			}

		var keyHit = event.key;
		var game = keyHit.toLowerCase();
		console.log(keyHit);

		if ((Words.indexOf(game) > -1))
			{
				for (var i = 0; i < Words.length; i++)
					{
						if (choosenWord[i] === game)
							{
								blanks[i] = game;
								spanChoosenWord.innerHTML = blanks.join(" ");
							}
					}
		} else
			{
				Letters.push(game);
				spanGuessedLetters.innerHTML = Letters.join(" ");
				Guesses--;
				spanNumberTries.innerHTML = Guesses;
			}

		if (blanks.indexOf("_") < 0 ) 
		{
			gameWon();
			resetGame();
		} else if (Guesses === 0)
			{
				gameOver();
				resetGame();
			}
	}





