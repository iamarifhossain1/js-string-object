const person = {
    name: 'Arif Hossain',
    age: 27,
    profession: 'Bekaaaaar',
    salary: 0,
    married: false,
    'fav places': ['Sajek', 'Cox Bazar', 'Bandarban']
}


person.salary = 30000; // changing value
person['age'] = 30; // changing value
person['fav places'] = ['Maldives', 'Bali', 'Pataya'];

// console.log(person);

// another way to declart object property using variable

const profName = 'Profession';
person[profName] = 'Web Developer';
console.log(person);

