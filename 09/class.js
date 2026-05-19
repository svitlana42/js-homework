class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, I am ${this.name}`);
    }
}
const person1 = new Person('John', 30);

person1.sayHello();

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    study() {
        console.log(`Student with ID ${this.studentId} is studying`);
    }
}

const student1 = new Student('John', 30, '7395');

student1.study();