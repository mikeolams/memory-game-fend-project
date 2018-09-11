/*
 * Create a list that holds all of your cards
 */
const cardDisplayBoard = document.querySelector('.deck'),
	cards = document.querySelectorAll('.card'),
	cardsArray = [...cards];
let countDisplay = document.querySelector('.moves');
let textDisplay = document.querySelector('.text');
let cardsShuffled = shuffle(cardsArray);
// calling of new card function
newCards();
// u = shuffle(cardsToPlay);
// I have two issues, line 212 (setTimeout)and  below is the other one this is not iterating as intended. at it is my programme wont run because of the issue but if i comment out this for loop. it will run but no reshuffle is done.
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
let count = 3;
let currentTarget = document.querySelector('.deck');
// function defined to attached the shuffled cards to the board in order to make it ready for a new game
function newGame() {
	for (let i = 0; i <= cardsShuffled.length; i++) {
		cardDisplayBoard.appendChild(cardsShuffled[i]);
	}
}
currentTarget.addEventListener('click', showSymbol, false);
//function defined to show any clicked card on the board
function showSymbol(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		// const clickTarget = event.target;
		// console.log(clickTarget);	
		if (event.target.className === "card") {
			event.target.classList.add('show');
			openCard(event);
		}
	}
	// open(event);
}
let openedCards = [],
	matchedCards = [],
	origin = currentTarget;
console.log(origin);
//function defined to open any clicked card on the board
function openCard(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		// const clickTarget = event.target;
		// const clickTarget1 = event.target.className
		// console.log(clickTarget,clickTarget1 );	
		if (event.target.className === "card show") {
			event.target.classList.add('open');
			openedCards.push(event.target);
			cardMatchCheck(event);
			// console.log(openedCards );	
		}
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
//function defined to check if two card opened matches or not
function cardMatchCheck(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		const clickTarget = event.target;
		const clickTarget1 = event.target.className
		console.log(clickTarget, clickTarget1);
		// console.log( openedCards );	
		if (openedCards.length > 1) {
			// console.log( openedCards );
			if (event.target.className === "card show open") {
				// console.log( event.target.className );
				if (event.target.firstElementChild.className === openedCards[0].firstElementChild.className) {
					event.target.classList.add('match');
					openedCards[0].classList.add('match');
					console.log(event.target.firstElementChild.className);
					event.target.classList.remove('show');
					event.target.classList.remove('open');
					openedCards[0].classList.remove('show');
					openedCards[0].classList.remove('open');
					matchedCards.push(openedCards[1], openedCards[0]);
					openedCards = [];
					gameComplete(event);
					// openedCards.push(event.target)
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
			console.log(openedCards);
			console.log(matchedCards);
			event.target.classList.remove('show');
			event.target.classList.remove('open');
			openedCards[0].classList.remove('show');
			openedCards[0].classList.remove('open');
			openedCards = [];
			// openedCards.pop(openedCards[1], openedCards[0]);
			console.log(openedCards);
		}
	}
}
// setTimeout(unmatchCardCheck, 1000, 'event');
//the second issue is here, the timing is not functionin as I intend. This suppose to delay the flip but it is not.
// setTimeout(function() {
// 	unmatchCardCheck;
// }, 1000, "event");
setTimeout(unmatchCardCheck, 100, "event");
//function defined to operate the score board
function moveCounter(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		// let textDisplay = document.querySelector('.text');
		console.log(count);
		count += 1;
		// console.log(count);
		if (count < 2) {
			textDisplay.innerText = " Move";
			// console.log(textDisplay);
		} else {
			textDisplay.innerText = " Moves";
		}
		countDisplay.innerText = count;
		// console.log(count);
	}
}
// timer = ()=> {
//         t = setTimeout(add, 1000);  
// }
//function defined to tell the user game is completed
function gameComplete(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		// console.log(origin);
		if (matchedCards.length === 16) {
			// console.log(origin);
			swal({
				title: "Good job! Congratulations!!!",
				text: "You matched all the cards! \n by completed the game after " + count + " moves \n Well done!!!",
				icon: "success",
			});
			newCards();
			newGame();
			count = -2;
			moveCounter(event);
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
//reset function called
const resetButton = document.querySelector('.restart');
const allCards = currentTarget.children;
resetButton.addEventListener('click', resetGame, false);
//reset function
function resetGame(event) {
	event.preventDefault();
	for (var i = 0; i < allCards.length; i++) {
		allCards[i].classList.remove('show', 'open', 'match');
		openedCards = [],
			matchedCards = [];
		count = -1;
		moveCounter(event);
		// shuffle(cardsCover);
		newCards();
		// console.log(origin);
		newGame();
		// console.log(origin);
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