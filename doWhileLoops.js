// do...while statements say do a task once and then keep doing it until a specified condition is no longer met
// unlike a while or for, a do...while will run at least once regardless of if the condition evaluates as true

let cupsOfSugarNeeded = 5
let cupsAdded = 0

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);
