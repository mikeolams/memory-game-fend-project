/*
 * Create a list that holds all of your cards
 */
const cardDisplayBoard = document.querySelector('.deck'),
	cards = document.querySelectorAll('.card'),
	cardsArray = [...cards];
let countDisplay = document.querySelector('.moves');
let textDisplay = document.querySelector('.text');
let cardsShuffled = shuffle(cardsArray);
let startBtn = document.querySelector('.start');
startBtn.addEventListener('click', gameCommence, false);
let on = 0;
// calling of new card function
function gameCommence() {
	swal("Please type your name here:", {
		content: "input",
	}).then((value) => {
		swal(`You are identify as: ${value}`);
	});
	on = 1;
	clock();
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		// console.log(array);
		array[randomIndex] = temporaryValue;
		// console.log(array);
	}
	return array;
}
let count = 0;
let currentTarget = document.querySelector('.deck');
rating();
// function defined to attached the shuffled cards to the board in order to make it ready for a new game
function newGame() {
	if (matchedCards.length >= 2) {
		for (let i = 0; i <= cardsShuffled.length; i++) {
			cardDisplayBoard.appendChild(cardsShuffled[i]);
		}
	}
}
// adding listerner to cards.
currentTarget.addEventListener('click', showSymbol, false);
//function defined to show any clicked card on the board
function showSymbol(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		if (event.target.className === "card") {
			if (on == 1) {
				event.target.classList.add('show');
				openCard(event);
			}
		}
	}
}
//defining some parameters for the open and match cards
let openedCards = [],
	matchedCards = [];
//function defined to open any clicked card on the board
function openCard(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		if (event.target.className === "card show") {
			event.target.classList.add('open');
			openedCards.push(event.target);
			cardMatchCheck(event);
		}
	}
}
//function defined to check if two card opened matches or not
function cardMatchCheck(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		if (openedCards.length > 1) {
			if (event.target.className === "card show open") {
				if (event.target.firstElementChild.className === openedCards[0].firstElementChild.className) {
					event.target.classList.add('match');
					openedCards[0].classList.add('match');
					event.target.classList.remove('show');
					event.target.classList.remove('open');
					openedCards[0].classList.remove('show');
					openedCards[0].classList.remove('open');
					matchedCards.push(openedCards[1], openedCards[0]);
					openedCards = [];
					gameComplete(event);
				} else {
					unmatchCardCheck(event)
				}
			}
			moveCounter(event);
		}
	}
}
//function defined to restore opened cards to normal if they are not match
function unmatchCardCheck(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		if (event.target.firstElementChild.className !== openedCards[0].firstElementChild.className) {
			setTimeout(function() {
				event.target.classList.remove('show');
				event.target.classList.remove('open');
				openedCards[0].classList.remove('show');
				openedCards[0].classList.remove('open');
				openedCards = [];
			}, 600, "event");
			console.log(openedCards);
		}
	}
}
// // setTimeout(unmatchCardCheck, 100, "event");
// setInterval(unmatchCardCheck, 1000, "event");
//function defined to operate the score board
function moveCounter(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		if (count < 2) {
			textDisplay.innerText = " Move";
		} else {
			textDisplay.innerText = " Moves";
		}
		countDisplay.innerText = count;
		count += 1;
	}
}
//setting some parameters for the timer
var counter, tickCount = 0,
	minuteCount = 0;

function clock() {
	var counter = setInterval(gameTimer, 1000, "event"); //run it every 1 second
	var tickCount = 0,
		minuteCount = 0;
}
//function defined to tell the user game is completed
function gameComplete(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		if (matchedCards.length === 16) {
			// modal implentation by sweet swal
			swal({
				title: "Good job! Congratulations!!!",
				text: "You matched all the cards! \n by completed the game after " + count + " moves \n Well done!!!",
				icon: "success",
			});
			resetGame(event);
		}
	}
}
//function defined to generate new set of cards ready to be played
function newCards() {
	for (item of cards) {
		let cards = [];
		item.classList.remove('match', 'open', 'show');
		cards = item;
	};
}
//reset function called and parameters set
const resetButton = document.querySelector('.restart');
const allCards = currentTarget.children;
resetButton.addEventListener('click', resetGame, false);
newElement = document.createElement('li');
//reset function
function resetGame(event) {
	event.preventDefault();
	if (on == 1) {
		if(matchedCards.length<16){warning();}
		for (var i = 0; i < allCards.length; i++) {
			allCards[i].classList.remove('show', 'open', 'match');
			openedCards = [],
				matchedCards = [];
			minuteCount = 0;
			tickCount = 0;
			count = 0;
			moveCounter(event);
			newCards();
			newGame();
			restoreRating();
			on =0;
		}
	}
}
// reset function call this warning before execution
function warning() {
	swal({
		title: "Are you sure you want to reset this game?",
		text: "Once reset, you will have a new board to start a new game!",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			swal("Thanks! Your current game is reset!", {
				icon: "success",
			});
		} else {
			swal("Your current game is not reset, you can continue!");
		}
	});
}
//function defined to tell the user game is completed
function gameTimer() {
	if (on ==1){
	tickCount += 1;
	if (tickCount == 60) {
		minuteCount += 1,
			tickCount = 0;
	}
	if (minuteCount === 59) {
		clearInterval(counter);
		window.alert("Time Up!");
		document.querySelector('.time').innerText = "Time Up!"
	} else if (matchedCards.length === 16) {
		window.alert("Well done!");
		newCards();
		matchedCards = 0;
		tickCount = 0;
		minuteCount = 0;
	} else {
		tickCount;
	}
	//Do code for showing the number of seconds here
	document.querySelector('.time').innerText = minuteCount + " minutes " + tickCount + " seconds"
	rating();
}
}
//setting rating parameters
let ratingStart = document.querySelector('.stars').children;
let noStarMessage = document.querySelector('.stars');
//rating function to call for rating
function rating() {
	if (countDisplay.innerText > 14) {
		ratingStart[2].style.display = "none";
		console.log(count);
	}
	if (countDisplay.innerText > 22) {
		ratingStart[2].style.display = "none";
		ratingStart[1].style.display = "none";
		console.log(countDisplay.innerText, minuteCount);
	}
	if (countDisplay.innerText > 25) {
		ratingStart[2].style.display = "none",
			ratingStart[1].style.display = "none",
			ratingStart[0].style.display = "none";
		newElement.innerText = "You may keep trying but you\'ve got no star left after " + countDisplay.innerText + "moves";
		noStarMessage.appendChild(newElement);
		console.log(minuteCount);
	}
}
//function to restore default rating set
function restoreRating() {
	if (noStarMessage.childElementCount == 4) {
		noStarMessage.removeChild(newElement);
	}
	for (item of ratingStart) {
		item.style.display = "";
	}
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */