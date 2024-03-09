const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList)

/* [ 'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ] */

groceryList.unshift('popcorn');
console.log(groceryList)

/* [ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ] */

// when using slice, use the index with no brackets and go one index beyond what you're needing to go to
console.log(groceryList.slice(1, 4));

/*[ 'bananas', 'coffee beans', 'brown rice' ] */

console.log(groceryList)
/* Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step */

/* [ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ] */

  const pastaIndex = groceryList.indexOf('pasta')
  console.log(pastaIndex);
