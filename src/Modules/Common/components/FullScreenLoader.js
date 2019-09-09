import React from "react";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OverlayContainer from "./OverlayContainer";
import Colors from "../../../Config/Colors";
export const OverlayContainerStyles = theme => ({});
class FullScreenLoader extends React.Component {
	render() {
		let { visible, width, height, type, color } = this.props;
		width = width || 50;
		height = height || 50;
		type = type || "Oval";
		color = color || Colors.WHITE;
		visible = visible || true;
		return (
			<OverlayContainer>
				<Loader type={type} width={width} height={height} color={color} visible={visible} />
			</OverlayContainer>
		);
	}
}
FullScreenLoader.propTypes = {
	visible: PropTypes.bool.isRequired
};
export default withStyles(OverlayContainerStyles)(FullScreenLoader);
