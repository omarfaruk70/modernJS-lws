// array.find() method 
// array.find method first of all 1ta function ney.. oi function er parameter e 1ta parameter ney(currentValue) namee.
// jokhon condition checking true hoy tokhn iteration off hoye jay and 1ta(fixed) value return kore.
// array.find() method diye kono ekta array theke nidristo ekta element k find(khuje pete) use kora hoy
// find total 3ta param nite pare segula holo 'currentValue, currentIndex, fullArray'
// find method main array k change kore nah


// normal function
let arr = [1,5,6,8,9,11,17];
let result = arr.find(function(currentValue){
    return currentValue > 9;
});
console.log(result)


// arrow function case
// let arr = [1,5,6,8,9,11,17];
// let result = arr.find( currentValue => currentValue > 9)
// console.log(result)
