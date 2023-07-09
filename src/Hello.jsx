import { useEffect } from "react";

function Hello() {
	useEffect(() => {
		document.title = "Hello React!";
	});

	return (
		<>
			<h1>Hello, React!</h1>
		</>
	);
}

export default Hello;
