
let array = [];
increment = 0;

const container = document.querySelector(".container");

/*
##################
## Batch Update ##
##################
*/

// fast way


// while (increment <= 10000) {
// 	array.push(++increment);
// }

// container.innerHTML = array.join(" ");

/*
##################
## Single Iteration Update ##
##################
*/

// slow way

while(increment <= 10000){
    increment++;
    container.innerHTML += ' ' + increment;
}
