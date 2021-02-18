import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
function CvModal() {
	const { closeCvModal, isCvModalOpen } = useGlobalContext();
	return (
		<div className={`modal-overlay ${isCvModalOpen ? "show-modal" : null}`}>
			<div className="modal-container">
				<img src="https://i.ibb.co/HYmr2wB/SFU.png" alt="CV" />
				<button className="close-modal-btn" onClick={closeCvModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
}

export default CvModal;
