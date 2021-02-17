import React from "react";
import { FaTimes } from "react-icons/fa";
import { sidebar, social } from "../data";

function Sidebar() {
	return (
		<aside className="sidebar show-sidebar">
			<div className="sidebar-header">
				<button className="close-btn">
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
