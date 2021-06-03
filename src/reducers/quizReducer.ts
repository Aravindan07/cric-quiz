import * as Actions from "../constants";
import { ActionsType, AppState } from "../types/quiz.types";

export const quizReducer = (state: AppState, action: ActionsType): AppState => {
	switch (action.type) {
		case Actions.OPEN__MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					isModalOpen: true,
					modalType: action.payload.modalType,
					data: action.payload.data,
				},
			};
		case Actions.CLOSE__MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					isModalOpen: false,
				},
			};

		case Actions.SET__QUIZ__CATEGORY: {
			return {
				...state,
				category: action.payload,
			};
		}

		case Actions.SET__PLAYER__NAME:
			return {
				...state,
				name: action.payload,
			};

		case Actions.SET__QUESTIONS:
			console.log("action.payload", action.payload);

			return {
				...state,
				questions: [...action.payload.questions],
			};

		case Actions.ADD__ANSWER:
			return {
				...state,
				userAnswers: state.userAnswers.concat(action.payload),
			};

		case Actions.CALCULATE__SCORE:
			return {
				...state,
				score: state.score + 10,
			};

		case Actions.UPDATE__USER__DASHBOARD:
			return {
				...state,
				dashboard: action.payload.item.quiz,
			};

		case Actions.SET__LOGIN:
			localStorage.setItem("token", action.payload.token);
			localStorage.setItem("userAuthenticated", "true");
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				dashboard: action.payload.user.userScores!.quiz,
			};

		case Actions.SET__SIGNUP:
			localStorage.setItem("token", action.payload.token);
			localStorage.setItem("userAuthenticated", "true");
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: true,
			};

		case Actions.LOAD__USER:
			localStorage.setItem("userAuthenticated", "true");
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: true,
				dashboard: action.payload.user.userScores!.quiz,
			};

		case Actions.SET__LOGOUT:
			localStorage.removeItem("token");
			localStorage.removeItem("userAuthenticated");
			return {
				...state,
				user: null,
				isAuthenticated: false,
			};

		default:
			return state;
	}
};
