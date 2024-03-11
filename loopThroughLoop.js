// Loop through a loop:

// SOLUTION: 

// created two different social media 'friends' accounts, bob & tina, listed their followers within an array.
// keeping two of the same friend names to test the code to determine which mutual friends they both have
// created an empty array to house the mutual friends after the loop has ran through its loop

let bobsFollowers = [ 'henry', 'kathy', 'lizzy', 'sebastian' ];
let tinasFollowers = [ 'cammille', 'lizzy', 'sebastian' ]
let mutualFollowers = []

// creating a for loop nested inside the for loop is comparing bob's friends to tina's friend

// both the bob & tina variables are arrays, so we will be comparing two arrays to each other
// both loops start their initialization starts at index 0, with the stopping condition ending at the last index in each array
// this is done by using the .length method for finding the total length of an array
// in this case, one array has 4 elements and the other has 3
// the iterator will incrimentally go up by 1 index each pass via the i++

// creating a if statemenet (conditional) we are determining if any of the elements within the arrays, that are returned from bob & tina variables, are the same
// using the === operator will compare both the type & value (strict equality)
// by using the .push method, we are adding the specific elements determined through the if conditional into the variable 'mutualFollowers'
// using 'bobFollowers[i]' which is our original (outer) loop as the argument for comparison

// this is the solution CA-JS accepts:

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// this was my solution:
// the difference is instead of using a general i/j for the loop variables, I used iB & iT
// I personally feel making a more literal distinction in what were comparing makes it more readable & easier to understand to an outside view

for (let iB = 0; iB < bobsFollowers.length; iB++) {
  for (let iT= 0; iT < tinasFollowers.length; iT++) {
    if (bobsFollowers[iB] === tinasFollowers[iT]) {
      mutualFollowers.push(bobsFollowers[iB]);
    }
  }
}

// this is an example loop nested into another loop by CA of how this can be built:

/*
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}
*/
