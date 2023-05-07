let studentinformation ={
    name: 'Omar Faruk',
    age: 21,
    isStudent: true
};
let keys = Object.keys(studentinformation)
console.log(keys) //expected output is name,age,isstudent
let value = Object.values(studentinformation)
console.log(value) // expected output is 'Omar Faruk', 21, true

// key and value at a time
let all = Object.entries(studentinformation)
console.log(studentinformation)