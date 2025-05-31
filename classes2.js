const colors = require('colors');

class Dog{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    woof() {
        console.log('Woof!'.red);
    }
    getAge() {
        return this.age;
    }
}

module.exports = Dog

// This code defines a Dog class with a constructor that initializes the dog's name and age.
// It also includes methods to make the dog bark and to get the dog's age.
// The class is exported using module.exports so it can be used in other files.
// The Dog class can be instantiated with a name and age, and the methods can be called on the instance.
