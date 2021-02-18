import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/Kenz.png";
import { useGlobalContext } from "../context";
function Navbar() {
	const { openSidebar } = useGlobalContext();
	return (
		<nav className="nav">
			<img src={logo} alt="logo" className="logo" />
			<div className="menu-btn">
				<FaBars onClick={openSidebar} />
			</div>
		</nav>
	);
}

export default Navbar;
