import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import classes from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return "Loading...";
	}
	const cardInfo = [
		{
			title: "Infeced",
			description: "Number of active cases of COVID-19",
			class: classes.confirmed,
			case: confirmed,
		},
		{
			title: "Recovered",
			description: "Number of recovered from COVID-19",
			class: classes.recovered,
			case: recovered,
		},
		{
			title: "Deaths",
			description: "Number of deaths from COVID-19",
			class: classes.deaths,
			case: deaths,
		},
	];

	const cardPopulatedWithInfo = cardInfo.map((card, i) => {
		const cardItem = (
			<Grid
				item
				component={Card}
				xs={12}
				md={3}
				className={cx(classes.card, card.class)}
				key={i}
			>
				<CardContent>
					<Typography color="textSecondary" gutterBottom>
						{card.title}
					</Typography>
					<Typography variant="h5">
						<CountUp
							start={0}
							end={card.case.value}
							duration={2.5}
							separator=","
						/>
					</Typography>
					<Typography color="textSecondary">
						{new Date(lastUpdate).toDateString()}
					</Typography>
					<Typography variant="body2">{card.description}</Typography>
				</CardContent>
			</Grid>
		);
		return cardItem;
	});

	return (
		<div className={classes.container}>
			<Grid container spacing={3} justify="center">
				{cardPopulatedWithInfo}
			</Grid>
		</div>
	);
};

export default Cards;
