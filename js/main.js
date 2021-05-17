// Basics of JavaScript 

/*
    Multiline Comment in JavaScript
    -- Variable Declaration in JavaScript --
    Primitive Types: strings, integers, booleans, floats, arrays, objects (aka dictionaries in python)
    Functions in JavaScript
    Control Flow in JavaScript (Loops + Conditionals)
*/

// String Variable
var firstName = 'Brian';

// Display our value to the JS console (aka print equivalent)
console.log(firstName);

// Integer Variable
var someNum = 21;

console.log(someNum);
console.log(typeof(someNum));

// Float Variable
var someFloat = 3.14;

console.log(someFloat);
console.log(typeof(someFloat));

// Boolean Variable
var someBool = true;
var someOtherBool = false;

console.log(someBool, someOtherBool);

// Array Variable
var someArray = [1, 2, 3, 4];

console.log(someArray);

// Object Variable
// JSON - JavaScript Object Notation
var someObject = {
    "test": "This is a test!",
    "hello": "Hello World!"
}

console.table(someObject);

// JAVASCRIPT HOISTING EXAMPLE
console.log(someRandomString);
var someRandomString = 'This is a random string';
console.log(someRandomString);


// A better way to declare a variable is by using 'let' and/or 'const'

let fullName = 'Brian Stanton';
console.log(fullName);

fullName = 'Kevin Beier';
console.log(fullName);

const superHero = 'Spider-Man';
console.log(superHero);

// superHero = 'Ironman';
// console.log(superHero);



// BASIC MATH OPERATIONS

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5 // sum = sum + 5
console.log(sum);

// Subtraction
let diff = 5 - 5;
console.log(diff);
diff -= 5; // diff = diff - 5
console.log(diff);

// Multiplication
let product = 5 * 5;
console.log(product);
product *= 5; // product = product * 5
console.log(product);

// Division
let quotient = 5 / 5;
console.log(quotient);
quotient /= 5; // quotient = quotient / 5
console.log(quotient);

// Exponents
let square = 5 ** 2;
console.log(square);
square **= 2; // square = square ** 2
console.log(square);

// Floor Division
let floor = Math.floor(10/3);
console.log(floor);

// Ceiling of a decimal
let ceil = Math.ceil(28.7);
console.log(ceil);

console.log(Math.PI)

// Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2
console.log(remainder);

// Mind Bender
let crazyStuff = square + '4';
console.log(crazyStuff) //not defined, 629, 6254, 625+4
console.log(typeof(crazyStuff));

// Mind Bender 2
let moreCrazyStuff = square + parseFloat('4'); 
console.log(moreCrazyStuff); //not defined, 629, 6254, 625+4

moreCrazyStuff  = moreCrazyStuff.toString();
console.log(moreCrazyStuff);


// Kevin's mind bender
let some_float=625
let crazy_stuff = some_float * '4'; 
console.log(crazy_stuff)


/*
    JavaScript User-Defined Functions!
*/

// Regular named function
function addNums(){
    let num1 = 4;
    let num2 = 5;

    return num1 + num2;
};

console.log(addNums())

// Regular Named Function with Parameters
function addNums2(num1, num2){
    return num1+num2
};
console.log(addNums2(7, 8))


// Variable Named Function

let addNums3 = function(){
    let num1 = 10;
    let num2 = 15;
    return num1 + num2
}

console.log(addNums3());

// Variable Named Function with parameters

let addNums4 = function(num1, num2){
    return num1 + num2
}

console.log(addNums4(2, 3));

// ES6+ Arrow Function in JavaScript
let multiplyNums = () => {
    let num1 = 4;
    let num2 = 5;
    return num1 * num2
}

console.log(multiplyNums());

// Arrow function with params
let cubed = (num, exp) => num ** exp

console.log(cubed(4, 3))

// Self-invoking functions
// Console.log does not have to be provided...just using for better display

console.log((function (name){
    let hello = 'Hello, ' + name;
    return hello
})('Brian'))



/*
    JavaScript Control Flow
*/

// If Statements
// && = and
// || = or
function determineAgeGroup(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age <= 64) { 
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAgeGroup(73));

// JavaScript Ternary Operator

function determineAgeGroup2(age){
    return (age < 18) ? 'Minor' : (age >=18 && age <=64) ? 'Adult': 'Senior';
}

console.log(determineAgeGroup2(25));


console.log(someNum);

// Equal to    ==
// Double equal sign means these two VALUES are equal
if (someNum == 21){
    console.log('These are equal')
};

if (someNum == '21'){
    console.log('These are also equal')
};

// Equal to   ===
// Triple equal sign means these two VALUES AND TYPES are equal
if (someNum === 21){
    console.log('These are equal')
};

if (someNum === '21'){
    console.log('These are also equal')
};


// Not Equal to    != (Value only)
if (someNum != 12){
    console.log('These are not equal')
}

if (someNum != '21'){
    console.log('These are not equal too')
} else {
    console.log("They actually are equal in value")
}

// Not Equal to    !== (Value and Type)
if (someNum !== 12){
    console.log('These are not equal')
}

if (someNum !== '21'){
    console.log('These are not equal too')
} else {
    console.log("They actually are equal in value")
}

// Other operators - Greater than (>), Less than (<), Greater than or equal to (>=), Less than or equal to (<=)



// Loops in JavaScript
// For loop
// syntax -- for (counter; expression; incrementation/decrementation);

console.log('Loop has started');
for (let i = 0; i <= 20; i++){
    console.log(i)
}
console.log('Loop has stopped');

// decrementation

for (let i = 20; i > 0; i-=5){
    console.log(i)
}

// While Loop
function countWithWhile(){
    let i = 0; // Counter
    while (i <= 20){
        console.log(i)
        i++ // i += 1 // i = i + 1
    }
    return
}

countWithWhile();


// Do While Loop -- Do the first portion AT LEAST once
// If the while condition is still met, continue the while loop

function countWithDoWhile(){
    let i = 0; //Counter
    // Do statement
    do {
        console.log(i)
        i++
    }
    while (i > 10)

    return
}

countWithDoWhile();

/*
    Looping with Arrays and Array/String Methods
*/

// Create an array of names
let names = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty']

// Console.log the first name of my array
console.log(names[0]); // Terry


// Method 1 for looping through an array
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
};


// Method 2 using the forEach() method inside of an array

names.forEach((element, idx) => console.log(element, idx));


// names.forEach((e,index) => {
//     names[index]=e.toUpperCase()
// });
// console.log(names)
  

// Array.toString()
console.log(names.toString());





// JAVASCRIPT ARRAY METHODS
//  .map()
upperNames = names.map(element => element.toUpperCase())
console.log(upperNames);



// .filter
let long_names = names.filter(e => e.length > 4);
console.log(long_names);

// .reduce()
const nums = [2, 4, 6, 8, 10]
numsReduced = nums.reduce((accumulator, currentNum) =>{
    return accumulator + currentNum
});

console.log(numsReduced);


// Array.join()
console.log(names.join(', '));

// Array.slice()
console.log(names.slice(0,3)) // Terry, Ben, Ash

// Array.splice()
let capturedValue = names.splice(0, 1, 'Willy');
console.log('This was removed based on the splice' + capturedValue);
console.log(names);

// Using an array to produce a string value --
// Then using a string method to produce the desired result

// String.search()
let sentence = "Today is May 17th and in 5 days it will be the 22nd"
console.log(sentence.search(/[\d]/g))

// String.includes()
console.log(sentence.includes('may'))

// String.slice()
console.log(sentence.slice(0,22))

// Loop through a string
for (let i = 0; i < sentence.split(' ').length; i++){
    console.log(sentence.split(' ')[i])
}

