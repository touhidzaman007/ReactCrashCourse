import { useState } from "react";
import "./Cars.css";

function Cars() {
	const [car, setcar] = useState("");
	const [cars, setcars] = useState([
		"BMW",
		"VolksWagon",
		"Mercedes-Benz",
		"Porche",
	]);

	return (
		<div className="container">
			<ul id="cars">
				{cars.sort().map((car, index) => (
					<li key={index}>{car}</li>
				))}
			</ul>
			<br />
			<p>
				<input
					type="text"
					value={car}
					onChange={(e) => setcar(e.target.value)}
				/>
			</p>
			<button onClick={() => setcars([...cars, car])}>Add Item</button>
		</div>
	);
}

export default Cars;
