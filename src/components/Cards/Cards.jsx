import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import classes from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return "Loading...";
	}

	return (
		<div className={classes.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							{confirmed.value}
						</Typography>
						<Typography variant="h5">DATA</Typography>
						<Typography color="textSecondary">DATE</Typography>
						<Typography variant="body2">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							{recovered.value}
						</Typography>
						<Typography variant="h5">DATA</Typography>
						<Typography color="textSecondary">DATE</Typography>
						<Typography variant="body2">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							{deaths.value}
						</Typography>
						<Typography variant="h5">DATA</Typography>
						<Typography color="textSecondary">DATE</Typography>
						<Typography variant="body2">
							Number of deaths from COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
