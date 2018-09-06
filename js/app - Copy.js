/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// document.body.getElementsByClassName('deck').addEventListener("click", function (e) {
//         modal.removeClass("show");
//         startGame();
//     });

    // document.querySelector('i')



//     var deckCard = document.body.getElementsByClassName('deck')

//     document.querySelectorAll('i')[3].addEventListener("click", shuffle(deckCard));

// document.body.getElementsByTagName('li')[3].addEventListener('click',event =>{
// 	 event.preventDefault();
//   document.body.getElementsByTagName('li')[3].classList.add('match');
//   // check();
// });

// document.getElementsByClassName('card')[15].addEventListener('click',event =>{
// 	 event.preventDefault();
//   document.body.getElementsByClassName('card')[15].classList.add('match');
// });

// // // document.body.getElementByID('card')
// // // document.body.getElementsByClassName('card')

// document.body.getElementsByTagName('li')[5].addEventListener('click',event =>{
// 	 event.preventDefault();
//   document.body.getElementsByTagName('li')[5].classList.remove('match');
//   // document.querySelectorAll('li')[5].classList.remove("match")
//   // check();
// });


// let cardPlay = document.getElementsByClassName('fa');
// cardPlay.addEventListener("click", () => open,false);

// let cardplay = document.getElementsByClassName('card');
// cardplay.addEventListener("click", () => open());




// function Open(event){
// 	 event.preventDefault();
// 	let cardPack = document.body.getElementsByClassName('card').length
// 	for (let i =0; i<cardPack; i++) {

// 	if (document.getElementsByClassName('card')[i].className === "card"){

// 		document.getElementsByClassName('card')[i].classList.add('match');
// 	}
// }

// 		// "card"
// 	// "card match"
// }

// // Get the element, add a click listener...
// document.getElementById("parent-list").addEventListener("click", function(e) {
// // e.target is the clicked element!
// // If it was a list item
// if(e.target && e.target.nodeName == "LI") {
//     // List item found!  Output the ID!
//     console.log("List item ", e.target.id.replace("post-"), " was clicked!");
//        }
//  });




//sample 2
//  // Get the parent DIV, add click listener...
//   document.getElementById("myDiv").addEventListener("click",function(e) {
// // e.target was the clicked element
// if(e.target && e.target.nodeName == "A") {
//     // Get the CSS classes
//     var classes = e.target.className.split(" ");
//     // Search for the CSS class!
//     if(classes) {
//         // For every CSS class the element has...
//         for(var x = 0; x < classes.length; x++) {
//             // If it has the CSS class we want...
//             if(classes[x] == "classA") {
//                 // Bingo!
//                 console.log("Anchor element clicked!");
//                 // Now do something here....
//             }
//         }
//     }

//   }
// });

// var classes = e.target.className.split(" ")

// let cardDeck = document.querySelector('.deck'),
// // target = document.querySelectorAll('.card');
// // target = document.querySelectorAll('.card')

// cardDeck.addEventListener('click', open);

// function open(event){
// 	if(target && target.nodeName == "LI"){
// 	 event.preventDefault();
	
// 	let cardPack = target.length;
// 	for (let i =0; i<cardPack; i++) {
// 		if(target[i]){

// 	if (document.getElementsByClassName('card')[i].className === "card"){

// 		document.getElementsByClassName('card')[i].classList.add('match');
// 	}
// }
// 	// event.preventDefault();
// 	// if (document.querySelectorAll('.card').className === "card"){

// 	// 	document.querySelector('.card').classList.add('match');

// }
// }

// 		// "card"
// 	// "card match"
// }





// // target = document.querySelectorAll('.card');
// // currentTarget = document.querySelectorAll('.card')

// for (let i =0; i<cardPack; i++) {
// 		if(target[i]){

// 	if (document.getElementsByClassName('card')[i].className === "card"){

// 		document.getElementsByClassName('card')[i].classList.add('match');
// 	}


//parent
// let currentTarget = document.querySelectorAll('.card');

// target = document.querySelector('.deck');

// target.addEventListener('click', open);

// function open(event){
// 	 // event.preventDefault();
// 	 let cardPack = currentTarget.length; 
// 	for (let i =0; i<cardPack; i++) {

// 	if(event.target !== event.currentTarget[i]){
// 	 event.preventDefault();
	
// 	if (currentTarget[i].className === "card"){

// 		currentTarget[i].classList.add('show');
// 	}
// }
// }
//  event.stopPropagation();
// }

// let target = document.querySelectorAll('.card');
var count =3 ;
 currentTarget = document.querySelector('.deck');

currentTarget.addEventListener('click', showSymbol, false);

function showSymbol(event){
	
	if(event.target !== event.currentTarget){
	 event.preventDefault();
	
		 // const clickTarget = event.target;
			// console.log(clickTarget);	
		 
		if (event.target.className === "card"){
			event.target.classList.add('show');
			openCard(event);
			moveCounter(event);

		}

	}

	// open(event);
}

let openedCards = [],
 matchedCards =[];

function openCard(event){
	
	if(event.target !== event.currentTarget){
	 event.preventDefault();	
		 
		 // const clickTarget = event.target;
		 // const clickTarget1 = event.target.className
			// console.log(clickTarget,clickTarget1 );	


		if (event.target.className === "card show"){
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

function cardMatchCheck(event){
	
	if(event.target !== event.currentTarget){
	 event.preventDefault();	
		 
		 const clickTarget = event.target;
		 const clickTarget1 = event.target.className
			console.log(clickTarget,clickTarget1 );
			// console.log( openedCards );	

			if (openedCards.length > 1 ){

// console.log( openedCards );
				if (event.target.className === "card show open"){
// console.log( event.target.className );
					if (event.target.firstElementChild.className === openedCards[0].firstElementChild.className){
						event.target.classList.add('match');
						openedCards[0].classList.add('match');

						console.log( event.target.firstElementChild.className );
						event.target.classList.remove('show');
						event.target.classList.remove('open');
						openedCards[0].classList.remove('show');
						openedCards[0].classList.remove('open');
						matchedCards.push(openedCards[1], openedCards[0]);
						openedCards = [];
						
					// openedCards.push(event.target)
					 }else{ unmatchCardCheck(event)	}

			
		}
		}
	}
}




function unmatchCardCheck(event){
	
	if(event.target !== event.currentTarget){
	 event.preventDefault();	


		if (event.target.firstElementChild.className !== openedCards[0].firstElementChild.className){
			console.log( openedCards );
			console.log( matchedCards );
				event.target.classList.remove('show');
				event.target.classList.remove('open');
				openedCards[0].classList.remove('show');
				openedCards[0].classList.remove('open');
				openedCards = [];
				// openedCards.pop(openedCards[1], openedCards[0]);
			console.log( openedCards );


				

			// openedCards.push(event.target)
			}
				
		
		}
	}



function moveCounter(event){
	
	if(event.target !== event.currentTarget){
	 event.preventDefault();	

	 	count += 1;
	 	console.log(count);

	 	let countDisplay = document.querySelector('.moves');
	 	countDisplay.innerText = count;
	 	console.log(count);

	}
}



function moveCounter1(event){
	
	if(event.target !== event.currentTarget){
	 event.preventDefault();	

	 	count += count;
	 	count++;


		if (event.target.firstElementChild.className !== openedCards[0].firstElementChild.className){
			// console.log( openedCards );
			// console.log( matchedCards );
			// 	event.target.classList.remove('show');
			// 	event.target.classList.remove('open');
			// 	openedCards[0].classList.remove('show');
			// 	openedCards[0].classList.remove('open');
			// 	openedCards = [];
			
			// console.log( openedCards );
const starMove = document.querySelector('li');
const starMoveParent = document.querySelector('.stars');

// <li class="card"><i class="fa fa-cube"></i></li>

document.querySelector('.stars').children

for (var i = 0; i < starMoveParent.length; i++) {

   starMoveParent[i].remove('li');

}
			
			}
				
		
		}
	}


// $('li').click('li',function(){
// 	this.classList.add("open");
// 	console.log('open added')
// });



// function doSomething(e) {
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.class;
//         alert("Hello " + clickedItem);
//     }
//     e.stopPropagation();
// }










// var theParent = document.querySelector("#theDude");
 
// for (var i = 0; i < theParent.children.length; i++) {
//     var childElement = theParent.children[i];
//     childElement.addEventListener('click', doSomething, false);
// }
 
// function doSomething(e) {
//     var clickedItem = e.target.id;
//     alert("Hello " + clickedItem);
// }




// let target = document.querySelectorAll('.card');

//  currentTarget = document.querySelector('.deck');
//  childrenOfCurrentTarget =currentTarget.children;

// // currentTarget.addEventListener('click', open, false);


// function open(event){
// 	  event.preventDefault();

// 	if ( childElement.className === "card"){

// 		 childElement.classList.add('show');
// 	}
	
// }

const resetButton = document.querySelector('.restart');
const allCards = currentTarget.children;

resetButton.addEventListener('click', resetGame, false);

function resetGame(event){
	  event.preventDefault();

for (var i = 0; i < allCards.length; i++) {

   allCards[i].classList.remove('show', 'open', 'match');
   openedCards = [],
   matchedCards = [];
}
}


// function cardMatchCheck(){
	
// 	// if(event.target !== event.currentTarget){
// 	 // event.preventDefault();	
		 
// 		 // const clickTarget = event.target;
// 		 // const clickTarget1 = event.target.className
// 			// console.log(clickTarget,clickTarget1 );	

// 			if ((openedCards !== null) && (openedCards[1] === "card show open") ){


// 				// if (event.target.className === "card show open"){

// 					// for (var i = 0; i < openedCards.length; i++) {

// 						if (openedCards[1].children === openedCards[0].children){
// 							openedCards[0].classList.add('match');
// 							openedCards[1].classList.add('match');
// 							openedCards[0].classList.remove('show');
// 							openedCards[1].classList.remove('show');
// 							openedCards[0].classList.remove('open');
// 							openedCards[1].classList.remove('open');
// 							matchedCards.push(openedCards[1], openedCards[0]);
// 							console.log('4match:' + openedCards );
// 							console.log(' match-array: '+ matchedCards  );

// 							}else{ unmatchCardCheck();

// 			// console.log(clickTarget );
				
// 						 	}
// 					// }

					

			
// 		// }
// 		}
// 	// }
// }




// function unmatchCardCheck(){
	
// 	// if(event.target !== event.currentTarget){
// 	//  event.preventDefault();	


// 		if (openedCards[1].children !== openedCards[0].children ){
// 				// event.target.classList.remove('show');
// 				// event.target.classList.remove('open');
// 				// openedCards[0].classList.add('match');
// 				// openedCards[1].classList.add('match');
// 				openedCards[0].classList.remove('show');
// 				openedCards[1].classList.remove('show');
// 				openedCards[0].classList.remove('open');
// 				openedCards[1].classList.remove('open');
// 				openedCards.pop(openedCards[1], openedCards[0]);
// 				console.log('4unmatch:' + openedCards );

// 			// openedCards.push(event.target) event.target.firstElementChild.className    openedCards[0].firstElementChild.className
// 			}
				
		
// 		// }
// 	}














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
