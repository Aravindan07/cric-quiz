import React, { createContext, useCallback, useContext, useReducer } from "react";
import { quizReducer } from "../reducers/quizReducer";
import axios from "axios";
import { AppState } from "../types/quiz.types";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import * as Actions from "../constants";

const { REACT_APP_BACKEND_URL } = process.env;

export const initialState: AppState = {
	category: "",
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
	isAuthenticated: false,
	user: null,
	isLoading: false,
	dashboard: [],
};

export const TokenConfig = () => {
	//Get token from localStorage
	const token = localStorage.getItem("token");

	//Headers
	const config = {
		headers: {
			"Content-type": "application/json",
			Authorization: "",
		},
	};

	//If token add to headers
	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}

	console.log("config", config);

	return config;
};

export type ContextValuesType = {
	state: AppState;
	dispatch: React.Dispatch<any>;
	logInUser: (email: string, password: string) => any;
	loadUser: () => any;
	registerUser: (name: string, email: string, password: string) => any;
	fetchQuiz: (category: string) => any;
	addScore: (userId: string, quizName: string, score: number) => any;
};

export const QuizContext = createContext<ContextValuesType>({
	state: initialState,
	dispatch: () => null,
	logInUser: () => null,
	loadUser: () => null,
	registerUser: () => null,
	fetchQuiz: () => null,
	addScore: () => null,
});

export const QuizDataProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(quizReducer, initialState);
	const history = useHistory();

	const loadUser = useCallback(async () => {
		try {
			dispatch({ type: Actions.SET__LOADING, payload: true });
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/users`, TokenConfig());
			console.log("Data after load", data);

			dispatch({ type: Actions.LOAD__USER, payload: data });
			dispatch({ type: Actions.SET__LOADING, payload: false });
		} catch (error) {
			dispatch({ type: Actions.SET__LOADING, payload: true });
			toast.error(error.response.data.message, {
				style: { backgroundColor: "#b91538", letterSpacing: "0.8px" },
				autoClose: 2000,
				hideProgressBar: true,
			});
			localStorage.removeItem("isAuthenticated");
			dispatch({ type: Actions.SET__LOADING, payload: false });
		}
	}, []);

	const registerUser = async (name: string, email: string, password: string) => {
		try {
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/users/register`, {
				name,
				email,
				password,
			});
			console.log("data after register", data);

			dispatch({ type: Actions.SET__SIGNUP, payload: data });
			toast.success(data.message, {
				style: { backgroundColor: "##15b996" },
				autoClose: 2000,
				hideProgressBar: true,
			});
			dispatch({ type: Actions.CLOSE__MODAL });
			return history.push("/quiz");
		} catch (error) {
			console.error(error);
			return toast.error(error.response.data.message, {
				style: { backgroundColor: "#b91538" },
				autoClose: 2000,
				hideProgressBar: true,
			});
		}
	};

	const logInUser = async (email: string, password: string) => {
		try {
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/users/login`, {
				email,
				password,
			});
			console.log("data after login", data);

			dispatch({ type: Actions.SET__LOGIN, payload: data });
			toast.success(data.message, {
				autoClose: 2000,
				hideProgressBar: true,
			});
			dispatch({ type: Actions.CLOSE__MODAL });
			return history.push("/quiz");
		} catch (error) {
			console.error(error);
			return toast.error(error.response.data.message, {
				style: { backgroundColor: "#b91538" },
				autoClose: 2000,
				hideProgressBar: true,
			});
		}
	};

	const fetchQuiz = useCallback(async (category: string) => {
		try {
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/quiz?category=${category}`);
			console.log("Data after fetching quiz", data);
			dispatch({ type: Actions.SET__QUESTIONS, payload: data });
		} catch (error) {
			console.error(error);
		}
	}, []);

	const addScore = async (userId: string, quizName: string, score: number) => {
		try {
			toast.info("Generating your score ...", {
				autoClose: 2000,
				hideProgressBar: true,
			});
			const { data } = await axios.post(
				`${REACT_APP_BACKEND_URL}/users/${userId}/add-score`,
				{ userId, quizName, score },
				TokenConfig()
			);
			console.log("Data after score added!", data);
			return dispatch({ type: Actions.UPDATE__USER__DASHBOARD, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<QuizContext.Provider
			value={{
				state,
				dispatch,
				fetchQuiz,
				logInUser,
				loadUser,
				registerUser,
				addScore,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
};

export const useQuizData = () => {
	return useContext(QuizContext);
};
