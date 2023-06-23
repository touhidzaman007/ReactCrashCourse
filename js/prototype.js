/**
 * ProtoType
 *
 */
const headLine = document.getElementById("root");
headLine.innerHTML = `<h1><u>ProtoType</u></h1>`;

// Main

function Person(first, last, age) {
	this.firstname = first;
	this.lastname = last;
	this.age = age;
	this.fullReport = function () {
		return (
			this.firstname + " " + this.lastname + " is " + this.age + " years old"
		);
	};
}

const samir = new Person("Samir", "Kumar", 34);
const dulal = new Person("Dulal", "AJ", 33);

Person.prototype.country = "Bangladesh";

console.dir(Person);
console.log(samir.country);
console.log(dulal.country);

String.prototype.azmain = function(){
    return "Hello! I am Azmain...";
};

const a = 'Hello World';

console.dir(String);
console.log(a.azmain());

console.dir(Array);