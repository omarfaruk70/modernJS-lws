// Array.reduce() method
// reduce means কমানো
let numbers = [2,4,6,8,10,12]
let output = numbers.reduce( (preValue, currentValue, CurretIndex, fullArr)=>{
    return preValue + currentValue;
}, 0)
// here 0 is the first or initial value of the first case
console.log(output)