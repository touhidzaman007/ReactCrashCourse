/**
 * Callback function
 *
 */
const headLine = document.getElementById("root");
headLine.innerHTML = `<h1><u>Callback Function</u></h1>`;

//  Main

// Synchronous

// function show(res){
//     console.log(res);
// }

// function addition(a, b, callback){
//     let sum = a + b;
//     if(callback) callback(sum)
//     return sum;
// }

// addition(5, 10, show);

// Asynchronous

// console.log("Class 1");

// setTimeout(function () {
// 	console.log("Class 2");
// }, 2000);

// console.log("Class 3");


const marks = 84;
const payment = false;

function enroll(callback){
    console.log("BSc Course enrollemnt is in process");
    setTimeout(function(){
        if(payment){
            callback();
        }else{
            console.log('Payment is Failed!');
        }
    }, 2000);
}

function admission(callback){
    console.log("Admission on progress");
    setTimeout(function(){
        if(marks >= 85){
            callback();
        }else{
            console.log('You could not get enough marks to admit into this instution');
        }
    }, 3000);
}

function seatBooking(){
    console.log("Date of seatbooking has been published");

    setTimeout(function(){
        console.log("Congrats! You got admitted in University!");
    }, 1000);
}

// General way of calling
// enroll(admission);
// admission(seatBooking);
// seatBooking();

// Convention way of calling
// Callback hell

enroll(function(){
    admission(seatBooking);
});