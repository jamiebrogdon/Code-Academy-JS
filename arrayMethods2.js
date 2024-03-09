/* when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function also. (what we’re passing into the function is a reference to where the variable memory is stored and changing the memory) */

//create array named concept
const concept = ['arrays', 'can', 'be', 'mutated'];
//created a function where our parameter is 'arr'. The function will alter the array by changing the index 3 of our array to "MUTATED" as opposed to lowercase 'mutated'
function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
//passing in the array 'concept' as the argument through the function 'changeArr'
console.log(concept);
/*console: [ 'arrays', 'can', 'be', 'MUTATED' ] */

//created a function named 'removeElement' that will take whatever (an array in this case) is passed in as an argument, and modify the array by use of the .pop() method. Which will remove the last element in the array.
function removeElement(newArr){
  newArr.pop()
}
removeElement(concept)
console.log(concept)
/*console: [ 'arrays', 'can', 'be' ] */
