// to loop through each element in an array, we use the .length() method
// using a loop in this way allows us to simplify and eliminate a lot of potential for repeat code
// naming our iterator variable 'i', which is common naming in loops
// when using i to iterate through an array, it is shorthand for the word 'index'
// the index of the last element of an array is equivalent to the length of that array minus 1

const vacationSpots = ["Bali", "Paris", "Tulum"];

// Write your code below

//SOLUTION:
for (let i = 0; i < vacationSpots.length; i++ ) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

/* console.log reads:

I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum

*/

// I personally wanted to use a template literal in the console log:
// console.log(`I would love to visit ${vacationSpots[i]}`); 
// however the code that passed was the above ^
