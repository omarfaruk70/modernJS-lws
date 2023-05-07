// map() method in js
// map() coultn't change the main array and it returns a new array

let numbers = [1,2,3,4,56,7,8,9]
let result = numbers.map( (element) => {
    return element * 2;
});
console.log(numbers)
console.log(result)