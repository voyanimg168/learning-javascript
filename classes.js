class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name} says meow!`);
    }
    scratch(numberOfTimes) {
        for (let x = 1; x <= numberOfTimes; x++) {
            console.log('Scratch');
        }
    }
//    scratch(numberOfTimes) {
//        console.log(`${this.name} scratches ${numberOfTimes} times!`);
//    }
}

const myFirstCat = new Cat("Fluffy", 5);
console.log(myFirstCat); // Cat { name: 'Fluffy', age: 5 }
console.log(myFirstCat.name); // Fluffy

const mySecondCat = new Cat("Bella", 3);
console.log(mySecondCat); // Cat { name: 'Bella', age: 3 }
console.log(mySecondCat.name); // Bella

myFirstCat.meow(); // Fluffy says meow!
mySecondCat.meow(); // Bella says meow!

myFirstCat.scratch(4); // Fluffy scratches 3 times!
