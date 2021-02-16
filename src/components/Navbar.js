import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/Kenz.png";

function Navbar() {
	return (
		<nav className="nav">
			<img src={logo} alt="logo" className="logo" />
			<div className="menu-btn">
				<FaBars />
			</div>
		</nav>
	);
}

export default Navbar;
