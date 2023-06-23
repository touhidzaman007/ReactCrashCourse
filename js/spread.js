/**
 * Spread Operator
 *
 */
const headLine = document.getElementById("root");
headLine.innerHTML = `<h1><u>Spread Operator</u></h1>`;

//  Main

var num = [1, 2, 3, 4, 5, 6]; //Mirror

// Array Mutate
var new_array = num; // Mirror

console.log(new_array);

// Array Immutate
var a = [...num, 11, 12, 14, 15]; // New Look

console.log(a);
