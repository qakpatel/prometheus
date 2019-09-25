import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function CustomMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="simple-menu"
      anchorEl={props.location}
      keepMounted
      open={props.isMenuOpen}
      onClose={props.handleClose}
    >
      {/* <MenuItem onClick={props.handleProfile} disabled>
        Profile
      </MenuItem> */}
      <MenuItem onClick={props.handleResetPass} disabled>
        Reset Password
      </MenuItem>
      <MenuItem onClick={props.handleLogout}>Logout</MenuItem>
    </Menu>
  );
}
