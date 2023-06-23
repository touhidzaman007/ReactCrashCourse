/**
 * Destructuring
 * 
 */
const headLine = document.getElementById('root');
headLine.innerHTML = `<h1><u>Destructuring</u></h1>`;

//  Main

// Object destructuring

const student = {
    id: 71,
    name: 'Azmain',
    age: 23,
    education: {
        degree: 'Bachelors'

    }
};

// Name, id or any properties of object 

// const {education: {degree}} = student;

// const {education:{ degree } = {}} = student; 
// console.log(degree);


// Old way
var newName = student.name;
// New way

const { name, id, age, education:{degree} } = student;
console.log(name, id, age, degree);

// Arrays Destructuring
var num = [1, 2, 3, 4, 5];

[a, b, c, d, e] = num;

// console.log(a, b, c, d, e);

var newNum = [1, 2, 3, 4, [300, 400, 1200], 500, 6, 7];

var [,,,,[,,,],a,,b] = newNum; //Default Syntax

// console.log(a, b);

var a = 10;
var b = 20;

// Old process
// var temp = a;
// a = b;
// b = temp;

// Destructuring process
var [b, a] = [a, b]

console.log(a, b);
