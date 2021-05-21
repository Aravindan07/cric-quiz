import React, { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers/quizReducer";

export const initialState: any = {
	questions: [],
	currentQuestion: 1,
	score: 0,
	modal: {
		isModalOpen: false,
		modalType: "",
		data: "",
	},
};

export const QuizContext = createContext(initialState);

export const QuizDataProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(quizReducer, initialState);
	console.log(state);
	return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
};

export const useQuizData = () => {
	return useContext(QuizContext);
};
