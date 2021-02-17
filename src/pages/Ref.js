import React, { useState } from "react";
import { reference } from "../data";

function Ref() {
	const [references, setReferences] = useState(reference);
	return (
		<section id="reference">
			<div className="title-exp">
				<h3>My Reputation</h3>
				<hr />
				<p> What they say about me</p>
			</div>

			<div className="reference-row">
				{references.map((singleRef) => {
					const { id, title, name, quote, images } = singleRef;
					return (
						<div key={id} className="reference-col">
							<div className="user">
								<img src={images} alt="" />
								<div className="user-info">
									<h4>{name}</h4>
									<small>@{title}</small>
								</div>
							</div>
							<p>{quote}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Ref;
