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

// Test Person
const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
});

fred.speak();