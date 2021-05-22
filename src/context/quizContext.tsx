import React, { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers/quizReducer";

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

	return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
};

export const useQuizData = () => {
	return useContext(QuizContext);
};
