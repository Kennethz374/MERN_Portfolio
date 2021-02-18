import React from "react";
import { FaTimes } from "react-icons/fa";
import { sidebar, social } from "../data";
import { useGlobalContext } from "../context";

function Sidebar() {
	const { closeSidebar, isSidebarOpen } = useGlobalContext();
	return (
		<aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : null}`}>
			<div className="sidebar-header">
				<button className="close-btn" onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>
			<ul className="links">
				{sidebar.map((link) => {
					const { id, text, icon, url } = link;
					return (
						<li key={id}>
							<a href={url}>
								{icon}
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className="social-icons">
				{social.map((link) => {
					const { id, url, icon } = link;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

export default Sidebar;
