class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const myFirstCat = new Cat("Fluffy", 5);
console.log(myFirstCat); // Cat { name: 'Fluffy', age: 5 }
console.log(myFirstCat.name); // Fluffy

const mySecondCat = new Cat("Bella", 3);
console.log(mySecondCat); // Cat { name: 'Bella', age: 3 }
console.log(mySecondCat.name); // Bella

//
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}   
const myFirstDog = new Dog("Rex", 4);
console.log(myFirstDog); // Dog { name: 'Rex', age: 4 }