import React from "react";
import covid from "../images/covid.png";

function Project() {
	return (
		<section className="projects-box">
			<div className="title-exp">
				<h3>My Works</h3>
				<hr />
				<p> Projects</p>
			</div>
			<div className="projects">
				<div className="project-container">
					<div className="project-title">
						<h2>Covid Tracker</h2>
					</div>

					<div className="project-img">
						<img src={covid} alt="" />
					</div>

					<div className="project-desc">
						<div className="project-nav">
							<a href="">Code</a>
							<a href="">Site</a>
						</div>
						<div className="project-content">
							<p>
								A simple application tracking down numbers of covid cases
								everyday
							</p>
						</div>
					</div>
				</div>

				<div className="project-container">
					<div className="project-title">
						<h2>Covid Tracker</h2>
					</div>

					<div className="project-img">
						<img src={covid} alt="" />
					</div>

					<div className="project-desc">
						<div className="project-nav">
							<a href="">Code</a>
							<a href="">Site</a>
						</div>
						<div className="project-content">
							<p>
								A simple application tracking down numbers of covid cases
								everyday
							</p>
						</div>
					</div>
				</div>
				<div className="project-container">
					<div className="project-title">
						<h2>Covid Tracker</h2>
					</div>

					<div className="project-img">
						<img src={covid} alt="" />
					</div>

					<div className="project-desc">
						<div className="project-nav">
							<a href="">Code</a>
							<a href="">Site</a>
						</div>
						<div className="project-content">
							<p>
								A simple application tracking down numbers of covid cases
								everyday
							</p>
						</div>
					</div>
				</div>

				<div className="project-container">
					<div className="project-title">
						<h2>Covid Tracker</h2>
					</div>

					<div className="project-img">
						<img src={covid} alt="" />
					</div>

					<div className="project-desc">
						<div className="project-nav">
							<a href="">Code</a>
							<a href="">Site</a>
						</div>
						<div className="project-content">
							<p>
								A simple application tracking down numbers of covid cases
								everyday
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Project;
