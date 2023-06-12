// DOM Elements
const time = document.getElementById("time"),
      greeting = document.getElementById("greeting"),
      myname = document.getElementById("name"),
      focus = document.getElementById("focus");

// Show AM or PM
const showAmPm = true;

// Show the Time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Sets AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM';

    // 12 hours format 
    // 13 14 15 16 17 18 19 20 21 22 23 24
     
    hour = hour % 12 || 12;

    // Output the time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPM : ''}`;
    
    setTimeout(showTime, 1000);
}

// Add Zero's
function addZero(n){
    // 0 1 2 3 4 5 6 7 8 9 < 10
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background & Greeting 
function setBackgroundGreet(){
    let today = new Date(2023, 6, 4, 15, 1, 1),
    // let today = new Date(),
        hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.background ="url('../img/morning.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "#000";
        greeting.textContent = "Good Morning";
    }else if(hour < 18) {
        // Afternoon
        document.body.style.background ="url('../img/afternoon.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "#fff";
        greeting.textContent = "Good Afternoon";
    }else {
        // Evening
        document.body.style.background ="url('../img/evening.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "#fff";
        greeting.textContent = "Good Evening";
    }
}

// Get Name
function getName(){
    if(localStorage.getItem('myname') == null){
        myname.textContent = '[Enter Your Name]'
    }else {
        myname.textContent = localStorage.getItem('myname');
    }
}

// Set Name
function setName(e){
    if(e.type === 'keypress'){
        // Make sure Enter is pressed
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('myname', e.target.innerText);
            myname.blur();
        }
    }else{
        localStorage.setItem('myname', e.target.innerText);
    }
}

// Get Focus
function getFocus(){
    if(localStorage.getItem('focus') == null){
        focus.textContent = '[Enter Your Focus]'
    }else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e){
    if(e.type === 'keypress'){
        // Make sure Enter is pressed
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}


/* Event Listening */

// Listening Name event
myname.addEventListener('keypress', setName);
myname.addEventListener('blur', setName);

// Listening Focus Event
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


/* Running Methods */
// Show Time
showTime();
// Get User name
getName();
// Get User's Focus
getFocus();
// Set Background
setBackgroundGreet();