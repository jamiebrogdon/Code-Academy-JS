// While loop:

// SOLUTION:

// delcared a variable 'currentCard'
// start the while loop with keyword 'while'
// created a stopping condition, called a test condition, this is evaluated before each round of loop
// while this condition is true, the block will continue to run
// once it evaluates false, it will stop 
// in this loop, when the condition of finding if the deck had a 'spade' card became true, it would stop
// We used the .random math method to randomize the cards in the array that were being evaluated within the loop // Math.floor(Math.random() * 4) will give us a random number from 0 to 3
// if we didn't set the variable and incriment it inside the 'currentCard' block, it would always have its initial value as 1
// this would be an infinite loop, and we always want to avoid that. Freezing computer's ain't fun yall.
// use the while loop instead of a for loop when you don't know in advance how many times the loop should run

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};
