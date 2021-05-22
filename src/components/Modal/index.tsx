import { useEffect } from "react";
import Modal from "react-modal";
import { CLOSE__MODAL } from "../../constants";
import { useQuizData } from "../../context/quizContext";
import { useMediaQuery } from "../../utils/useMediaQueries";
import AddName from "./AddName";

const modalList: any = {
	addName: AddName,
};

function ModalComponent() {
	const {
		dispatch,
		state: { modal },
	} = useQuizData();

	const [width] = useMediaQuery();

	useEffect(() => {
		Modal.setAppElement("#root");
	});

	const closeModal = () => {
		return dispatch({ type: CLOSE__MODAL });
	};

	const overlay = {
		backgroundColor: "rgba(0,0,0,0.8)",
	};

	const content = {
		width: width <= 500 ? "80%" : "50%",
		height: "50%",
		margin: "auto",
		borderRadius: "5px",
		padding: width <= 500 ? "30px 10px" : "30px 20px 20px 20px",
		ZIndex: "10",
	};

	const ModalToShow = modalList[modal.modalType];

	return (
		<Modal
			isOpen={modal.isModalOpen}
			onRequestClose={closeModal}
			style={{
				overlay: overlay,
				content: content,
			}}
			contentLabel="Example Modal"
		>
			{modal.isModalOpen && <ModalToShow data={modal.data} />}
		</Modal>
	);
}

export default ModalComponent;
