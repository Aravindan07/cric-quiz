import { useEffect } from "react";
import Modal from "react-modal";
import { CLOSE__MODAL } from "../../constants";
import { useQuizData } from "../../context/quizContext";
import { useModalStyles } from "./styles";
import AddName from "./AddName";

const modalList: any = {
	addName: AddName,
};

function ModalComponent() {
	const {
		dispatch,
		state: { modal },
	} = useQuizData();

	const { overlay, content } = useModalStyles();

	useEffect(() => {
		Modal.setAppElement("#root");
	});

	const closeModal = () => {
		return dispatch({ type: CLOSE__MODAL });
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
