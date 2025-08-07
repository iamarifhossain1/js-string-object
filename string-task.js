/** Task-1:
 * Count how many times a string has the letter a
 */

let alphabets = 'Count how many times a string has the letter a';
let count = 0;

for(let i = 0; i < alphabets.length; i++) {
    if(alphabets[i].toLowerCase() === 'a' || alphabets[i].toUpperCase() === 'A') {
        count++;
    }
}

console.log(count);


/** Task-2:
 * Count how many times a string has the letter a or A
 */

let letters = 'Count how many times a string has the letter a or A';
let anotherCount = 0;

for (i = 0; i < letters.length; i++) {
    if (letters[i].toLowerCase() === 'a' || letters[i].toUpperCase() === 'A') {
        anotherCount++
    }
}

console.log(anotherCount);


/** Task - 3
 * Check whether a string contains all the vowels a, e, i, o, u
 */

let vowels = ['a, e, i, o, u'];

if (vowels.includes('a, e, i, o, u')) {
    console.log('Vowels Letters:', vowels);
}

else { 
    console.log('This is not a vowel letter.');
    
}

/** Task - 4
 * Capitalize Every first Letter of each word in a String
 */

let str = "hello peoples, good morning";
str = str.toLowerCase();
let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word[0].toUpperCase();
    let rest = word.slice(1);
    result = result + firstLetter + rest + " ";
}

console.log(result.trim());


