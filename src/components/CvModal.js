import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import CV from "../images/CV.png";

function CvModal() {
	const { closeCvModal, isCvModalOpen } = useGlobalContext();
	return (
		<div className={`modal-overlay ${isCvModalOpen ? "show-modal" : null}`}>
			<div className="modal-container">
				<img src={CV} alt="CV" />
				<button className="close-modal-btn" onClick={closeCvModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
}

export default CvModal;
