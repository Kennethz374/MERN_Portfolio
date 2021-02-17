import React from "react";
import Experience from "./Experience";
import Project from "./Project";

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
					<a href="/Experience">projects</a>
					<a href="/reference">reference</a>
				</div>
			</section>
			<Experience />
			<Project />
		</>
	);
}

export default Home;
