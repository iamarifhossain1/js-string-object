const school = {
    name: 'VNC',
    class: ['9', '10'],
    events: ['Science Fair', 'Bijoy Dibosh', '21st Feb'],
    uniqe: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'Top'
        }
    }
}

console.log (school.name);
school.uniqe.result.merit = 'Top Top';
school.events[1] = 'Pohela Boishakh'
console.log (school.uniqe.result);
console.log(school.events);
delete school.class;
console.log(school);

