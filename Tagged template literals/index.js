//tagged template literals
// tagged template literals with modifier function
// modifier function takes 2 parameters and the first one is String and the second one is Values
function modifier(strings, ...Values){
    // console.log(strings)
    // console.log(Values)
    const modifiedValue = strings.reduce((preValue, currentValue) =>{
        return preValue + currentValue + (Values.length ? 'Mr.' + Values.shift() : '');  
    }, '')
    return modifiedValue;
}
let player1 = 'Shakib';
let player2 = 'Tamim';
console.log(modifier`we have ${player1} and ${player2} in our cricket team`)