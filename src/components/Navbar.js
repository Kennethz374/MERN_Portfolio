import React from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
	return (
		<nav className="nav">
			<img src="../images/Kenz.png" alt="logo" className="logo" />
			<div className="menu-btn">
				<FaBars />
			</div>
		</nav>
	);
}

export default Navbar;
