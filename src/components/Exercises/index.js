import React from "react";
import Grid from "@material-ui/core/Grid";
import LeftPane from "./leftPane";
import RightPane from "./rightPane";

export default props => {
	return (
		<Grid container spacing={2}>
			<Grid item xs>
				<LeftPane />
			</Grid>
			<Grid item xs>
				<RightPane />
			</Grid>
		</Grid>
	);
};
