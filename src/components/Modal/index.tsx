import { useEffect } from "react";
import Modal from "react-modal";
import { CLOSE__MODAL } from "../../constants";
import { useQuizData } from "../../context/quizContext";
import { useModalStyles } from "./styles";
import AddName from "./AddName";
import Login from "./Login";

const modalList: any = {
	addName: AddName,
	login: Login,
	register: Login,
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

	const type = modal.modalType;

	const ModalToShow = modalList[type!];

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
