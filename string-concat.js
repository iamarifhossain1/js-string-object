/**
 * JS-String-Concat
 */

const firstName = 'Arif';
const lastName = 'Hossain';
// const fullName = firstName + lastName;
const fullName = firstName + ' ' + lastName;
// console.log(fullName);

const fullName2 = firstName.concat(' ').concat(lastName);
// console.log(fullName2);

/**
 * JS-String-Includes
 */

console.log(firstName.includes('A'));
console.log(lastName.includes('Hossain'));
