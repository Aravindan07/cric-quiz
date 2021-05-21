import { CLOSE__MODAL, OPEN__MODAL } from "../constants";
import { Actions, QuizState } from "../types/quiz.types";

export const quizReducer = (state: QuizState, action: Actions) => {
	console.log(action);

	switch (action.type) {
		case OPEN__MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					isModalOpen: true,
					modalType: action.payload.modalType,
					data: action.payload.data,
				},
			};
		case CLOSE__MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					isModalOpen: false,
				},
			};
	}
};
