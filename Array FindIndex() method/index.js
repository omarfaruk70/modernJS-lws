// Array.findIndex() use kora hoy array theke element er index ber korar jnno .
// index start hoy 0 theke.
// array.find() and array.findindex() method pray same.

let arr = [2,5,8,3,4,0,1];
let result = arr.findIndex(function(currentValue, index, fullArr){
    return currentValue > 4
});
console.log(result); //expected output is 5 and the index number of 5 is 1



// let arr = [3,2,4,5,3,8];
// let result = arr.findIndex( currentValue => currentValue > 4)
// console.log(result) // expected output is 5 and it's index position is 3