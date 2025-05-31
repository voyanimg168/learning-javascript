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