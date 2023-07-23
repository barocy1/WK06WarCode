//WarCode for Promineo Tech Week 6 assignment

//2 variables using suits and values as arrays
const suits = ['Hearts', 'Diamonds', 'Spades', 'Clovers'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K',"A"];

//Standard deck of 52 cards
//Will loop through suits and values to create cards & pushes them back to the deck array.
class Deck {
    constructor() {
        this.deck = [];
        for (const suit of suits) {
            for (const value of values) {
                this.deck.push({suit, value});

            }
        }
    }
//Shuffuling deck by looping through each card.
shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
         }
    }
}
//Instance of the Deck class
const deck = new Deck()
//Performs shuffle function of deck instance created
deck.shuffle()
//Deals 26 cards to each player
const player1 = [];
const player2 = [];
 i = 0, i < 26; i++ 
    player1.push(deck.deck[i]);
    player2.push(deck.deck[i + 26]);



//Variables for scores
let player1Score = 0;
let player2Score = 0;

//Iterate through the turns
while (player1.length > 0 && player2.length > 0) {
//play the 1st element in the array
    let player1Card = player1.shift();
    let player2Card = player2.shift();

//Compares cards & creates 2 scores.
if (values.indexOf(player1Card.value) > values.indexOf(player2Card.value)) {
    player1Score++;
} else if (values.indexOf(player1Card.value) < values.indexOf(player2Card.value)) {
    player2Score++;
}
   
}
//Display scores & declare winner!
console.log('Player 1: ${player1Score} points');
console.log('Player 2: ${player2Score} points');
if (player1Score > player2Score) {
    console.log('Player1 Wins!!');
} else if (player1Score < player2Score) {
    console.log('Player2 Wins!!');
} else {
    console.log('Its a Tie!!');
}
