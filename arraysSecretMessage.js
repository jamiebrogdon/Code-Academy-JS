let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop()
// console.log(secretMessage.length);
//removed the last element in the array by using the .pop() method

secretMessage.push("to", "program")
//added the words "to" & "program" to the end of the array by using the .push() method

secretMessage[7] = "right";
//changed the word 'easily' in index 7 to the word 'right'. If I didn't know which index that word was apart of, I could search it using secretMessage.indexOf() - the .indexOf method

secretMessage.shift()
//removing the first element in the array by using the .shift() method

secretMessage.unshift("Programming")
//added the word 'Programming' to the beginning of the array using the .unshift() method

secretMessage.splice(6, 5, 'know')
//removing the strings 'get, right, the, first, time,' and replacing them with the single string 'know'

console.log(secretMessage.join());
//to read it as a sentence as opposed to an array, use the .join() method in our console.log
