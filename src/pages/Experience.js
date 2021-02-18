import React, { useState } from "react";
import { exp } from "../data";
import CvModal from "../components/CvModal";
import { useGlobalContext } from "../context";

function Experience() {
	const [experience, setExperience] = useState(exp);
	const { openCvModal } = useGlobalContext();
	return (
		<>
			<section className="exp">
				<div className="title-exp">
					<h3>My Journey</h3>
					<hr />
					<p>Experience</p>
				</div>
				<div className="exp-box">
					<div className="mobile-box">
						{experience.map((single) => {
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
					</div>
					<div className="exp-img">
						<img src="https://i.ibb.co/c1Q0CK6/rpt.jpg" alt="" />
					</div>
				</div>
				<button className="resume" onClick={openCvModal}>
					Show CV
				</button>
				<CvModal />
			</section>
		</>
	);
}
export default Experience;
