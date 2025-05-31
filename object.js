let pet = {
    name: "Fluffy",
    type: "cat",
    weight: 12,
    age: 5,
    isVaccinated: true,
    owner: {
        name: "Alice",
        age: 30
    },      
}
console.log(pet) // { name: 'Fluffy', type: 'cat', weight: 12, age: 5, isVaccinated: true, owner: { name: 'Alice', age: 30 } }
console.log(pet.name) // Fluffy

let dog = {
    name: "Fido",
    type: "dog",
    weight: 20,
    age: 3,
    toys: ["Squeaky Pretzel", "Rubber Ball", "Chew Toy"],
    isVaccinated: false,
    owner: {
        name: "Bob",
        age: 28
    }
}
console.log(dog) // { name: 'Fido', type: 'dog', weight: 20, age: 3, toys: [ 'Squeaky Pretzel', 'Rubber Ball', 'Chew Toy' ], isVaccinated: false, owner: { name: 'Bob', age: 28 } }
console.log(dog.toys[1]) // [ 'Squeaky Pretzel', 'Rubber Ball', 'Chew Toy' ]