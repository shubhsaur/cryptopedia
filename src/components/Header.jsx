import { AppBar, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModel from "./Authentication/AuthModel";
import UserSidebar from "./Authentication/UserSidebar";

const useStyles = makeStyles()(() => ({
	title: {
		flex: 1,
		color: "gold",
		fontFamily: "Montserrat",
		fontWeight: "bold",
		cursor: "pointer",
	},
}));

const Header = () => {
	const { classes } = useStyles();
	const navigate = useNavigate();

	const { currency, setCurrency, user } = CryptoState();

	const darkTheme = createTheme({
		palette: {
			primary: {
				main: "#fff",
			},
			mode: "dark",
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<AppBar color="transparent" position="static">
				<Container>
					<Toolbar>
						<Typography variant="h6" onClick={() => navigate("/")} className={classes.title}>
							Cryptopedia
						</Typography>
						<Select
							variant="outlined"
							style={{ width: 100, height: 40, marginRight: 15 }}
							value={currency}
							onChange={(e) => setCurrency(e.target.value)}
						>
							<MenuItem value={"USD"}>USD</MenuItem>
							<MenuItem value={"INR"}>INR</MenuItem>
						</Select>

						{user ? <UserSidebar /> : <AuthModel />}
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
};

export default Header;
