// first 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2
const message = "test";

function example() {
    if (true) {
        let message = "Hello, world!";
        console.log(message);
    }
    console.log(message);
}
example();

// second
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
for (let key in person) {
    console.log(person[key]);
}

// third
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for (let student of students) {
    for (let key in student) {
        console.log(student[key]);
    }
}