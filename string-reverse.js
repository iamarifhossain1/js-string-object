/**
 * JS-String-Reverse
 */

let sentence = 'I am learning web dev';

// for of loop

let reverse = '';
for (const letter of sentence) {
    reverse = letter + reverse;
}

// console.log (reverse);


// plain for loop

let reve = '';
for (let i = 0; i < sentence.length; i ++) {
    const letter = sentence[i]; // declare using variable
    reve = letter + reve;
    reve = sentence[i] + reve;   // declare without variable
}

// console.log (reve);

// while Loop

let rev = '';
let i = 0;
while (i < sentence.length) {
     rev = sentence[i] + rev;
     i++
}
// console.log (rev);

// Shortcut using Reverse

const reversed = sentence.split('').reverse('').join('');
console.log(reversed);


