import React from "react";
import { withStyles } from "@material-ui/core/styles";
export const OverlayContainerStyles = theme => ({
	bgOverlay: {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
        height: "100%",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor: `rgba(0,0,0,0.5)`,
        zIndex : 99999
	}
});
class OverlayContainer extends React.Component {
	render() {
		const { classes, backgroundColor, children } = this.props;
		let style = {};
		if (backgroundColor) {
			style = {
				backgroundColor: backgroundColor
			};
		}
		return (
			<div style={style} className={classes.bgOverlay}>
				{children}
			</div>
		);
	}
}

export default withStyles(OverlayContainerStyles)(OverlayContainer);
