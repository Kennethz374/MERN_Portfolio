import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Ref() {
	return (
		<section className="reference-box">
			<div className="title-exp">
				<h3>My Reputation</h3>
				<hr />
				<p> What they say about me</p>
			</div>

			<div className="icon-container">
				<button className="ref-icon">
					<IoIosArrowBack />
				</button>
				<button className="ref-icon">
					<IoIosArrowForward />
				</button>
			</div>

			<div className="reference-container">
				<img src="https://i.ibb.co/HYmr2wB/SFU.png" alt="WY" />
				<h1 className="ref-name">William Yu</h1>
				<h2 className="ref-title">Production Manager</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet
					nesciunt eum sunt nam magnam nemo enim. Laboriosam deserunt sunt
					accusantium atque. Doloremque vero necessitatibus nulla cum, assumenda
					recusandae animi! Vitae doloribus, sed sequi eum id dolore saepe
					aspernatur illum repudiandae autem eaque quaerat voluptatibus mollitia
					repellendus voluptatum enim necessitatibus voluptates a eveniet
					veniam?
				</p>
			</div>
		</section>
	);
}

export default Ref;
