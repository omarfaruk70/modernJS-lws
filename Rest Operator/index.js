// Rest operator
// spread and rest operator is like similar
// spread and rest operator is start with three dot(...)
// spread operator use kora hoy array and object er khetre
//Rest operator use kora hoy Function er khetre
function myFunc(a,b) {
    console.log(a,b)
}
myFunc(10,20)



// an realistic example
function restOp(...params) {  // params last e thakte hobe always
    console.log(...params)
}
restOp(5,4,8,9)
// so rest operator use kora hoy object er khetre