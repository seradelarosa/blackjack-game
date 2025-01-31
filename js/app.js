//our cards will be 

//rules
//the player wins when:
//the players total is equal to 21
//the plays total is higher than the dealer
//the dealer goes over 21

//the player loses when:
//the dealer hits 21 and the player is not at the total
//the player goes higher than 21
//the dealer is closer to 21 than the player

//varibale constants
let winner;
let playerTotal = 0;
let dealerTotal;

//cached elements
const playerDealBtn = document.querySelector("#playerDrawBtn");
// console.log(playerDealBtn);

//functions
const dealACard = () => {
    //generate random numbwer 1-11
let currentDraw = Math.floor(Math.random() * 12)
//add the number to player total
playerTotal = playerTotal + currentDraw;
console.log(playerTotal);
};

//basic logic for playerTotal
// playerTotal = playerTotal + currentDraw;

//create a button the user can click so it would mimic a draw

//event listeners
playerDealBtn.addEventListener("click", dealACard);