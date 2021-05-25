import React, { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers/quizReducer";
import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

export const initialState: any = {
	questions: [],
	currentQuestion: 1,
	score: 0,
	name: "",
	modal: {
		isModalOpen: false,
		modalType: "",
		data: "",
	},
	userAnswers: [],
};

export const QuizContext = createContext(initialState);

export const QuizDataProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(quizReducer, initialState);

	const fetchQuiz = async () => {
		const { data } = await axios.get(
			`${REACT_APP_BACKEND_URL}/quiz?category=${state.modal.data}`
		);
		return data;
	};

	return (
		<QuizContext.Provider value={{ state, dispatch, fetchQuiz }}>
			{children}
		</QuizContext.Provider>
	);
};

export const useQuizData = () => {
	return useContext(QuizContext);
};
