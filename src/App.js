import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import classes from "./App.module.css";

class App extends Component {
	state = {
		data: {},
		country: "",
	};

	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);

		this.setState({ data: fetchedData, country: country });
	};

	render() {
		const { data, country } = this.state;

		return (
			<div className={classes.App}>
				CORONA TRACKER
				<img src="" alt="" />
				<Cards data={data} />
				<CountryPicker changed={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
