import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";

import classes from "./App.module.css";

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Cards />
				<CountryPicker />
				<Chart />
			</div>
		);
	}
}

export default App;
