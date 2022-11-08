import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { AppBar, Tab, Tabs } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Login from "./Login";
import Signup from "./Signup";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function AuthModal() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(0);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const useStyles = makeStyles()((theme) => ({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			width: 400,
			color: "white",
			borderRadius: 10,
		},
	}));

	const { classes } = useStyles();

	return (
		<div>
			<Button onClick={handleOpen} variant="contained" style={{ width: 85, height: 40, backgroundColor: "#EEBC1D" }}>
				Login
			</Button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style} className={classes.paper}>
						<AppBar position="static" style={{ backgroundColor: "transparent", color: "white" }}>
							<Tabs value={value} onChange={handleChange} variant="fullWidth" style={{ borderRadius: 10 }}>
								<Tab label="Login" />
								<Tab label="Sign Up" />
							</Tabs>
						</AppBar>
						{value === 0 && <Login handleClose={handleClose} />}
						{value === 1 && <Signup handleClose={handleClose} />}
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
