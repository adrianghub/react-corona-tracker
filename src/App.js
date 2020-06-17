import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import classes from "./App.module.css";

class App extends Component {
	async componentDidMount() {
		const data = await fetchData();

		console.log(data);
	}

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
