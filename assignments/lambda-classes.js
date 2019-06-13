class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    };
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
};

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.speciality = props.speciality;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    };
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    };
};

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    };
    listsSubjects() {
        console.log(`${this.favSubjects.join(' ')}`);
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
};

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    };
    standup(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
};

// Students

const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'JavaScript']
});

const theo = new Student({
    name: "Theo",
    age: 35,
    location: "Louisiana",
    previousBackground: "Comedian",
    className: "WEB21",
    favSubjects: ['Python', 'Go', 'JavaScript']
});

// Instructors

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!'
});

const nisa = new Instructor({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!'
});

const joe = new Instructor({
    name: 'Joe',
    age: '50',
    location: 'Los Angeles',
    specialty: 'Youtube Tutorials',
    favLanguage: 'Java, Ruby, and Julia',
    catchPhrase: 'You got this!'
});

// Project Managers

const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME"
});

const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:"
});

const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!"
});

// * Method Tests * //

// Person
isaiah.speak();
dan.speak();
mary.speak();

// Instructor
dan.demo('User-Interface');
nisa.demo('UI-III-Flexbox');
joe.demo('Git-Flow-Practice');

dan.grade(isaiah, 'JavaScript-I');
nisa.grade(kevin, 'Sprint-Challenge--Advanced-CSS');
joe.grade(theo, 'Preprocessing-II');

// Student
isaiah.listsSubjects();
kevin.listsSubjects();
theo.listsSubjects();

isaiah.PRAssignment('Preprocessing-I');
kevin.PRAssignment('portfolio-website');
theo.PRAssignment('responsive-web-design-I');


isaiah.sprintChallenge('Sprint-Challenge--User-Interface');
kevin.sprintChallenge('Sprint-Challenge--Advanced-CSS');
theo.sprintChallenge('Sprint-Challenge--Javascript');

// Project Manager
mary.standup('#Web21Mary');
austin.standup('#Web21Austin');
marguel.standup('#Web21Marguel');

mary.debugsCode(isaiah, 'JavaScript-I');
austin.debugsCode(kevin, 'Sprint-Challenge--Advanced-CSS');
marguel.debugsCode(theo, 'Preprocessing-II');
