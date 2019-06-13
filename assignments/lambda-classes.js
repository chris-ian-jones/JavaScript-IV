class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

/*Test Person
const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
});

fred.speak();
*/

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.speciality = props.speciality;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo() {
        console.log(`Today we are learning about ${}`);
    }
    grade() {
        console.log(`${} receives a perfect score on ${}`);
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects() {
        console.log(`${}`)
    }
    PRAssignment() {
        console.log(`${} has submitted a PR for ${}`);
    }
    sprintChallenge() {
        console.log(`${} has begun sprint challenge on ${}`);
    }
}


