/*
 * Create a list that holds all of your cards
 */
// let origin = document.querySelector('.deck');
// unendittedCards =document.querySelectorAll('.card');
cardsCover = [...document.querySelectorAll('.card')];
// cardsCover = [document.querySelectorAll('.card')];
// cardsToPlay = document.querySelectorAll('.card>.fa');
d = [...document.querySelectorAll('.card>.fa')];
// cardsToPlay = document.querySelectorAll('.card>i');
newCards();
// for (item of cardsCover){let cardsCover=[]; item.classList.remove('match', 'open', 'show'); cardsCover = item; };
// const origin =  document.querySelector('.deck');
// for (item of cardsToPlay){let cardsToPlay=[]; cardsToPlay = item; };
// console.log (cardsCover);
// shuffle(cardsCover);
// u = shuffle(cardsToPlay);
// I have two issues, line 212 (setTimeout)and  below is the other one this is not iterating as intended. at it is my programme wont run because of the issue but if i comment out this for loop. it will run but no reshuffle is done.
u = shuffle(d);
// for (i=0; i<= cardsCover.length; i++){(cardsCover[i].appendChild(u[i]));}
function newBoard() {
	for (i = 0; i < 1; i++) {
		let currentTarget = document.querySelector('.deck');
		currentTarget.children[0].appendChild(u[0]);
		currentTarget.children[1].appendChild(u[1]);
		currentTarget.children[2].appendChild(u[2]);
		currentTarget.children[3].appendChild(u[3]);
		currentTarget.children[4].appendChild(u[4]);
		currentTarget.children[5].appendChild(u[5]);
		currentTarget.children[6].appendChild(u[6]);
		currentTarget.children[7].appendChild(u[7]);
		currentTarget.children[8].appendChild(u[8]);
		currentTarget.children[9].appendChild(u[9]);
		currentTarget.children[10].appendChild(u[10]);
		currentTarget.children[11].appendChild(u[11]);
		currentTarget.children[12].appendChild(u[12]);
		currentTarget.children[13].appendChild(u[13]);
		currentTarget.children[14].appendChild(u[14]);
		currentTarget.children[15].appendChild(u[15])
	}
}
// for (i=0; i<= currentTarget.children.length; i++){cardsCover[i].appendChild(u[i]);}
// for (i=0; i<= currentTarget.children.length; i++){currentTarget.children[i].appendChild(u[i]);}
//d = [...document.querySelectorAll('.card>.fa')];
// cardsToPlay = document.querySelectorAll('.card>i');
// console.log (cardsCover);
// document.querySelector('.deck').remove('card')
// u = [i.fa.fa-diamond, i.fa.fa-paper-plane-o, i.fa.fa-anchor, i.fa.fa-bolt, i.fa.fa-cube, i.fa.fa-anchor, i.fa.fa-leaf, i.fa.fa-bicycle, i.fa.fa-diamond, i.fa.fa-bomb, i.fa.fa-leaf, i.fa.fa-bomb, i.fa.fa-bolt, i.fa.fa-bicycle, i.fa.fa-paper-plane-o, i.fa.fa-cube];
// shuffle(cardsToPlay);
// for (let i =0; i<cardPack; i++) {
// if (document.getElementsByClassName('card')[i].className === "card"){
// 	document.getElementsByClassName('card')[i].classList.add('match');
// 	cardsToplay.push(/*event.target*/);
// }
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
// document.body.getElementsByClassName('deck').addEventListener("click", function (e) {
//         modal.removeClass("show");
//         startGame();
//     });
// let target = document.querySelectorAll('.card');
var count = 3;
let currentTarget = document.querySelector('.deck');
// const origin = currentTarget;
function newGame() {
	currentTarget = origin;
}
// currentTarget;
// }
currentTarget.addEventListener('click', showSymbol, false);

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
setTimeout(function() {
	unmatchCardCheck;
}, 1000, "event");

function moveCounter(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		let textDisplay = document.querySelector('.text');
		count += 1;
		// console.log(count);
		if (count < 2) {
			textDisplay.innerText = " Move";
			// console.log(textDisplay);
		} else {
			textDisplay.innerText = " Moves";
		}
		let countDisplay = document.querySelector('.moves');
		countDisplay.innerText = count;
		// console.log(count);
	}
}
console.log(origin);
// timer = ()=> {
//         t = setTimeout(add, 1000);  
// }
function gameComplete(event) {
	if (event.target !== event.currentTarget) {
		event.preventDefault();
		console.log(origin);
		if (matchedCards.length === 16) {
			console.log(origin);
			// let gameDone = document.querySelector('.deck');
			currentTarget.innerText = "Good job! Congratulations!!! \n You completed the game after " + count + " moves \n Well done!!!";
			// gameDone.style ={alignContent:"center", alignItems:"center"}
			console.log(origin);
		}
	}
}

function newCards() {
	// cardsCover;
	for (item of cardsCover) {
		let cardsCover = [];
		item.classList.remove('match', 'open', 'show');
		cardsCover = item;
	};
}
// function moveCounter1(event){
// 	if(event.target !== event.currentTarget){
// 	 event.preventDefault();	
// 	 	count += count;
// 	 	count++;
// 		if (event.target.firstElementChild.className !== openedCards[0].firstElementChild.className){
// 			// console.log( openedCards );
// 			// console.log( matchedCards );
// 			// 	event.target.classList.remove('show');
// 			// 	event.target.classList.remove('open');
// 			// 	openedCards[0].classList.remove('show');
// 			// 	openedCards[0].classList.remove('open');
// 			// 	openedCards = [];
// 			// console.log( openedCards );
// const starMove = document.querySelector('li');
// const starMoveParent = document.querySelector('.stars');
// // <li class="card"><i class="fa fa-cube"></i></li>
// document.querySelector('.stars').children
// for (var i = 0; i < starMoveParent.length; i++) {
//    starMoveParent[i].remove('li');
// }
// 			}
// 		}
// 	}
//reset function
const resetButton = document.querySelector('.restart');
const allCards = currentTarget.children;
resetButton.addEventListener('click', resetGame, false);

function resetGame(event) {
	event.preventDefault();
	for (var i = 0; i < allCards.length; i++) {
		allCards[i].classList.remove('show', 'open', 'match');
		openedCards = [],
			matchedCards = [];
		count = -1;
		moveCounter(event);
		shuffle(cardsCover);
		// let gameDone.innerHTML= document.querySelectorAll('.card');
		// for (item of cardsCover){let cardsCover=[]; item.classList.remove('match', 'open', 'show'); cardsCover = item; };
		//new addon to generate new dom tree
		currentTarget.innerHTML = matchedCards;
		newCards();
		newBoard();
		console.log(origin);
		newGame();
		// console.log(origin);
		// document.querySelector('.deck').remove(document.querySelectorAll('.card'))
		// document.querySelector('.deck').innerHTML =shuffle(cardsCover);
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