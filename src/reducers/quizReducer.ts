import {
	ADD__ANSWER,
	CLOSE__MODAL,
	OPEN__MODAL,
	SET__PLAYER__NAME,
	SET__QUESTIONS,
} from "../constants";
import { Actions, QuizState } from "../types/quiz.types";

export const quizReducer = (state: QuizState, action: Actions): QuizState => {
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

		case SET__PLAYER__NAME:
			return {
				...state,
				name: action.payload,
			};

		case SET__QUESTIONS:
			return {
				...state,
				questions: [action.payload],
			};

		case ADD__ANSWER:
			const foundAnswer = state.userAnswers.find(
				(el) => el.question === action.payload.question
			);
			return {
				...state,
				userAnswers: foundAnswer
					? state.userAnswers.map((el) =>
							el.answer === action.payload.answer
								? el
								: {
										...el,
										answer: action.payload.answer,
										correct: action.payload.correct,
								  }
					  )
					: [...state.userAnswers, action.payload],
			};

		default:
			return state;
	}
};
