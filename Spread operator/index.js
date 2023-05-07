let numbers = [1,2,3,4];
let newNumbers = [...numbers,5,6,7,8,9]
console.log(newNumbers)


// example of spread operator
let a = [10,20,30,40,50]
let b =[...a]; //exact copy of a (its not changeable though a will change)
console.log(b)

a.push(60);
console.log(b)
console.log(a)