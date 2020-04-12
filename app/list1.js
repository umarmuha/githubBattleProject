import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class List extends React.Component {
	render() {
		return (
			<ul>
				{this.props.friends.map(friend => (
					<li key={friend.id}>{friend.name}</li>
				))}
			</ul>
		);
	}
}

ReactDOM.render(
	<List
		friends={[
			{ id: 893, name: "Mikenzi" },
			{ id: 871, name: "Cash" },
			{ id: 982, name: "Steven" },
			{ id: 161, name: "Kimmy" },
			{ id: 117, name: "Doug" }
		]}
	/>,
	document.getElementById("app")
);
