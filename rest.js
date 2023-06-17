/**
 * Rest Operator
 * 
 */
const headLine = document.getElementById('root');
headLine.innerHTML = `<h1><u>Rest Operator</u></h1>`;

//  Main

function myFunc(){
    console.log(arguments); // Arguments work as an object
}
myFunc(4, 5, 6, 7, 8, 9, 10); //How many parameters will consists in this function

function myNewFunc(x, y, z, ...params){ // Params or Args must be the last form of parameters
    console.log(x, y, z);
    console.log(params);
}

myNewFunc(12, 13, 14, 15, 16, 17, "javascript");