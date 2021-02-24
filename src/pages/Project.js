import React from "react";
import covid from "../images/covid.png";
import PhotoGallery from "../images/PhotoGallery.png";
import ShoppingCart from "../images/ShoppingCart.png";

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
						<h2>Photo Gallery</h2>
					</div>

					<div className="project-img">
						<img src={PhotoGallery} alt="" />
					</div>

					<div className="project-desc">
						<div className="project-nav">
							<a href="https://github.com/Kennethz374/PhotoGallery">Code</a>
							<a href="https://kennethz374.github.io/PhotoGallery/">Site</a>
						</div>
						<div className="project-content">
							<p>PhotoGallery with infinite scroll fetching with React</p>
						</div>
					</div>
				</div>

				<div className="project-container">
					<div className="project-title">
						<h2>E-commerce Cart</h2>
					</div>

					<div className="project-img">
						<img src={ShoppingCart} alt="" />
					</div>

					<div className="project-desc">
						<div className="project-nav">
							<a href="https://github.com/Kennethz374/Cart">Code</a>
							<a href="https://kennethz374.github.io/Cart/">Site</a>
						</div>
						<div className="project-content">
							<p>A refresher project about useReducer in React</p>
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
