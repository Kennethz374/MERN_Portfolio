import React from "react";
import { FaTimes } from "react-icons/fa";

function CvModal() {
	return (
		<div className={`modal-overlay`}>
			<div className="modal-container">
				<img src="https://i.ibb.co/HYmr2wB/SFU.png" alt="CV" />
				<button className="close-modal-btn">
					<FaTimes />
				</button>
			</div>
		</div>
	);
}

export default CvModal;
