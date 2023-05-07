// array filter method
// filter method codition checking kore condition er porer element gula k output dey.
// arr.filter() method main array k change kore nah]

let arr = [1,2,3,4,5,6,7,8,9]
let result = arr.filter(function(currentValue, index, fullArray){
    return currentValue > 5
});
console.log(result)
// console.log(arr)


// arrow function case
let number = [5,16,4,15,22,25,51,46,66];
let output = number.filter( currentValue => currentValue > 25);
console.log(output);
console.log(number)
