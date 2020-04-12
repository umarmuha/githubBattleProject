import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Avatar extends React.Component {
	render() {
		//After render its Javascript Land
		// console.log(this.props);
		return <img src={this.props.user.img} />;
	}
}

class Label extends React.Component {
	render() {
		return <h1>Name: {this.props.user.name} </h1>;
	}
}

class ScreenName extends React.Component {
	render() {
		return <h3>Username: {this.props.user.username} </h3>;
	}
}

class Badge extends React.Component {
	render() {
		return (
			<div>
				{/* Using ... spread operator to pass through props from parent to child componenets */}
				<Avatar {...this.props} />
				<Label {...this.props} />
				<ScreenName {...this.props} />
			</div>
		);
	}
}

ReactDOM.render(
	<Badge
		user={{
			name: "Tyler McGinnis",
			img: "https://avatars0.githubusercontent.com/u/2933430?v=3&s=460",
			username: "tylermcginnis"
		}}
	/>,
	document.getElementById("app")
);
