// for loop , for in loop and for of loop 

// jeikuno kaj e for loop use kora jay
for(let i = 0; i <= 10; i++ ){
    console.log(i)
}

// for in loop
// for in loop use korbo object er vitor kono iteration er jnno.
const myObj = {
    name: 'javascript',
    estd: 1995,
    founder: 'Brendad Eich'
}
for(property in myObj){
    console.log(property)
}


// for off loop
// for off basically any iterable object, array and string er jnno use kora hoy
let myArr = ' Amar Sonar Bangla '
for(element of myArr){
    console.log(element)
}

// * Note.... For in index return kore and for of value return kore