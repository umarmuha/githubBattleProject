import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";
import Battle from "./components/Battle";

/**
 * Component concern are the following
 * State
 * LifeCycle
 * UI
 */

//Javascript Land
// function isLoading() {
// 	return false;
// }

class App extends React.Component {
	// render is the method that is going to describe what the UI is going to look like.
	render() {
		//After render its Javascript Land
		// if (isLoading() === true) {
		// 	return null;
		// }
		// const name = "Muhammad";

		return (
			<div className="container">
				{/* <h1>Hello {name}</h1>
				<p>Today is {new Date().toLocaleString()}</p>
				<p>What is 2 + 2 ? {2 + 2}</p> */}
				<Battle />
			</div>
		);
	}
}

ReactDOM.render(
	// React Element
	<App />, //We know JSX will convert this into react.createElement elements
	// Where to render the Element to
	document.getElementById("app")
);
