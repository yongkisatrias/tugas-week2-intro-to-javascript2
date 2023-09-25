// 1. CONCAT () = The method functions to combine two or more arrays into one new array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const newArray = array1.concat(array2, array3);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2. INCLUDES() = This method functions to check whether data is in the array or not.
const numbers = [1, 2, 3, 4, 5];
const hasNumber3 = numbers.includes(3);

console.log(hasNumber3); // Output: true

// 3. SLICE() = Method that functions to copy some array elements to a new array. The elements to copy are specified using index, start and end index.
const fruits = ["apel", "mangga", "pisang", "ceri", "strawberi"];
const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // Output: [ 'mangga', 'pisang', 'ceri' ]

// 4. POP() = Method which functions to delete the last element of the array. This method changes the length of the array and returns the deleted elements.
const fruits = ["apel", "mangga", "pisang", "ceri"];
const removedFruit = fruits.pop();

console.log(removedFruit); // Output: "ceri"
console.log(fruits); // Output: [ 'apel', 'mangga', 'pisang' ]

// 5. COPYWITHIN() = Used to copy elements in an array and place them to another position in the array without changing their length.
const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(3, 0);

console.log(numbers); // Output: [1, 2, 3, 1, 2]

// 6. FILL() = Used to replace all elements in an array with the same value. This modifies the array itself and does not return a new array.
const numbers = [1, 2, 3, 4, 5];
numbers.fill(0);

console.log(numbers); // Output: [0, 0, 0, 0, 0]

// 7. FIND() = Used to find the first element in the array that meets the conditions given in the form of a callback function.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const person = people.find((person) => person.name === "Bob");

console.log(person); // Output: { name: 'Bob', age: 30 }

console.log(removedFruit); // Output: "ceri"
console.log(fruits); // Output: [ 'apel', 'mangga', 'pisang' ]

// 8. SHIFT() = used to delete the first element of an array and shift the remaining elements to a lower position (lower index).
const fruits = ["apel", "mangga", "pisang", "ceri"];
const removedFruit = fruits.shift();

console.log(removedFruit); // Output: "apel"
console.log(fruits); // Output: [ 'mangga', 'pisang', 'ceri' ]

// 9. UNSHIFT() = Used to add one or more new elements to the beginning of an array and shift the existing elements to a higher position (higher index).
const fruits = ["mangga", "pisang", "ceri"];
fruits.unshift("apel");

console.log(fruits); // Output: [ 'apel', 'mangga', 'pisang', 'ceri' ]

// ENTRIES() = used to create an iterator that contains index-value (key-value) pairs for each element in an array. This allows you to access the index and value of each element in the array.
const fruits = ["apel", "mangga", "pisang"];
const iterator = fruits.entries();
for (const [index, value] of iterator) {
  console.log(`Indeks: ${index}, Nilai: ${value}`);
}
// Output:
// Indeks: 0, Nilai: apel
// Indeks: 1, Nilai: mangga
// Indeks: 2, Nilai: pisang
