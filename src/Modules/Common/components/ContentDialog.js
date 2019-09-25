import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide, Typography, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const DialogStyles = theme => ({
	root: {
		margin: 0
	},

	closeButton: {
		position: "absolute",
		right: 10,
		top: 10
	},
	bodyArea: {
		maxHeight: 400,
		overflowY: "auto"
	},
	dialogHeader: {
		borderBottom: "solid 1px #eee"
	},
	dialogFooter: {
		justifyContent: "space-end",
		paddingLeft: 20,
		paddingRight: 5,
		paddingTop: 10,
		borderTop: "solid 1px #eee"
	}
});

class ContentDialog extends React.Component {
	state = {
		open: false
	};

	componentDidMount() {
		this.setState({ open: this.props.open });
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			open: nextProps.open
		});
	}

	handleSuccess = () => {
		this.setState({ open: false });
		this.handleCloseEvent();
	};

	handleCloseEvent = () => {
		const { onSuccess, onClose } = this.props;
		if (onSuccess) {
			onSuccess();
		}
		if(onClose){
			onClose();
		}
	}

	handleClose = () => {
		this.setState({ open: false });
		this.handleCloseEvent();
	};

	render() {
		let { open } = this.state;
		let { classes, title, children, cancelBtnText, successBtnText, closeBtn, successBtn, cancelBtn, successBtnEnabled, cancelBtnEnabled } = this.props;
		let { handleClose, handleSuccess } = this;
		closeBtn = closeBtn !== false ? true : closeBtn;
		successBtn = successBtn !== false ? true : successBtn;
		cancelBtn = cancelBtn !== false ? true : cancelBtn;
		successBtnEnabled = successBtnEnabled !== false ? true : successBtnEnabled;
		cancelBtnEnabled = cancelBtnEnabled !== false ? true : cancelBtnEnabled;
		cancelBtnText = cancelBtnText || "Cancel";
		successBtnText = successBtnText || "Ok";
		let headerEnabled = title || closeBtn;
		let footerEnabled = cancelBtn || successBtn;
		return (
			<Dialog TransitionComponent={Transition} onClose={closeBtn ? handleClose : null} disableBackdropClick={!closeBtn} disableEscapeKeyDown={!closeBtn} fullWidth={true} aria-labelledby={title} open={open}>
				{headerEnabled && (
					<DialogTitle className={classes.dialogHeader} disableTypography>
						{title && <Typography variant="h6">{title}</Typography>}
						{closeBtn ? (
							<IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}>
								<CloseIcon />
							</IconButton>
						) : null}
					</DialogTitle>
				)}
				<DialogContent>{children}</DialogContent>
				{footerEnabled && (
					<DialogActions className={classes.dialogFooter}>
						{cancelBtn && (
							<Button disabled={!cancelBtnEnabled} onClick={handleClose} variant="contained" color="default">
								{cancelBtnText}
							</Button>
						)}
						{successBtn && (
							<Button onClick={handleSuccess} variant="contained" color="primary">
								{successBtnText}
							</Button>
						)}
					</DialogActions>
				)}
			</Dialog>
		);
	}
}
ContentDialog.propTypes = {
	open : PropTypes.bool.isRequired,
}
export default withStyles(DialogStyles, { withTheme: true })(ContentDialog);
