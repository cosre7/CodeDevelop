import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
	// 방법 1 -> 더 많이 사용 
	useEffect(() => {
		console.log("hi :)");
		return () => console.log('')
	}, []);
	// 방법 2
	useEffect(function() {
		console.log("hi :)");
		return function() {
			console.log("bye :(" );
		}
	}, []);
	return <h1>Hello</h1>
}

function App() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
		</div>
	);
}

export default App;
