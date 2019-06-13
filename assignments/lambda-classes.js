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

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.speciality = props.speciality;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
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
        console.log(`${this.favSubjects.join(' ')}`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standup(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

//Test Student
const chris = new Student({
    name: 'Chris',
    location: 'Oxford',
    age: 33,
    previousBackground: 'PREVIOUSBACKGROUND',
    className: 'CLASSNAME',
    favSubjects: ['FAVSUBJECTS1', 'FAVSUBJECT2', 'FAVSUBJECTS']
})

//Test Instructor
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    specialty: 'SPECIALITY',
    favLanguage: 'FAVLANGUAGE',
    catchPhrase: 'CATCHPHRASE'
});

//Test ProjectManager
const mary = new ProjectManager({
    name: 'Mary',
    location: 'PMLOCATION',
    age: 37,
    specialty: 'SPECIALITY',
    favLanguage: 'FAVLANGUAGE',
    catchPhrase: 'CATCHPHRASE',
    gradClassName: 'GRADCLASSNAME',
    favInstructor: 'FAVINSTRUCTOR'
})


fred.demo('ja');
fred.grade(chris, 'SUBJECT STRING');
chris.listsSubjects();
chris.PRAssignment('J-IV');
chris.sprintChallenge('J-VII');
mary.standup('#help');
mary.debugsCode(chris, 'J-XI');