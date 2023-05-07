// destructuring 
// destructuring er main kaj holo kono object theke kono value and key ber kore ana.
// simple destructuring example
let user = {
    id: 52543,
    name: 'Jhon due',
    isRegistered: true
};
// Now we need the name property of user object
const  {name} = user
console.log(name) //expected result is "JHON due"

//jodi amra name property ta k title variable e rakhte chai tahole alias (:) use kkorete hobe
const {name: title} = user
console.log(title)  //expected result is "JHON due"

//another important example
const studentInformation = {
    name: 'Sakib',
    age: 21,
    userId: 2456,
    degree:{
        course: 'Diploma'
    }
};

// I need the value of the title which is under the degree property

const {degree : {course}} = studentInformation
console.log(course)


//another array destructuring
let number = [3,4,9,1,0,7,3];
let [,,a,b,,c] = number;
console.log(a,b,c);


//nested array destructuring
let num1 = [5,6,4,[53,43,8],0];
let [,,,[,d,e]] = num1;
console.log(d,e)