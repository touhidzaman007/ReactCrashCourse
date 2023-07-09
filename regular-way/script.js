Array.prototype.Pushcar = function (...a) {
	this.push(a[0]);
	init();
};

const display = document.getElementById("cars");
const button = document.querySelector("#button");

let cars = ["BMW", "VolksWagon", "Mercedes-Benz", "Porche"];

const init = function () {
	document.getElementById("cars").innerHTML = "";
	cars.sort().forEach((car) => {
		let item = document.createElement("li");
		item.textContent = car;
		document.getElementById("cars").appendChild(item);
	});
};

const addItem = function () {
	cars.Pushcar(document.getElementById("input").value);
};

init();
