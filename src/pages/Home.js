import React from "react";
import Project from "./Experience";

function Home() {
	return (
		<>
			<section className="banner">
				<h1> Hi, I am K Z</h1>
				<p>
					a creative full-stack web developer with a background in Economics and
					7 years of experience in Manufacturing. My main goal in tech industry
					is to make web applications that help people solve problems.
				</p>
				<div class="banner-btn">
					<a href="/experience">experience</a>
					<a href="/project">projects</a>
					<a href="/reference">reference</a>
				</div>
			</section>
			<Project />
		</>
	);
}

export default Home;
