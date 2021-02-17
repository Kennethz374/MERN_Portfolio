import React from "react";
import { exp } from "../data";

function Experience() {
	return (
		<section className="exp">
			<div className="title-exp">
				<h3>My Journey</h3>
				<hr />
				<p>Experience</p>
			</div>

			<div className="exp-box">
				{exp.map((single) => {
					const { id, organization, image, date, desc } = single;
					return (
						<div key={id} className="exp-desc">
							<div className="card-title">
								<h1>{organization}</h1>
								<h4>{date}</h4>
							</div>
							<div className="card-content">
								<img src={image} alt={organization} />
								<p>{desc}</p>
							</div>
						</div>
					);
				})}
				<button className="resume">
					<a href="#">Look At My CV</a>
				</button>
			</div>
		</section>
	);
}
export default Experience;