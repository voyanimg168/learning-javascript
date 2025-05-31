let fruits = ['apple', 'orange', 'pear']
console.log(fruits)
console.log(fruits[0]) // apple
console.log(fruits[2]) // pear

console.log(fruits.length) // 3

fruits.push('grape')
console.log(fruits) // ['apple', 'orange', 'pear', 'grape']

fruits.pop()
console.log(fruits) // ['apple', 'orange', 'pear']

fruits.splice(1, 0, 'banana')
console.log(fruits)

let cats = [
    {'name': 'Fluffy','age': 2},
    {'name': 'Mittens','age': 3},
    {'name': 'Whiskers','age': 1}
]
console.log(cats) // [{name: 'Fluffy', age: 2}, {name: 'Mittens', age: 3}, {name: 'Whiskers', age: 1}]
console.log(cats[0])
console.log(cats[1].name) // Mittens