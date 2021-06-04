import * as Actions from "../constants";

export type OptionType = {
	_id: string;
	name: string;
	correct: boolean;
};

export type Question = {
	_id: string;
	category: string;
	correctAnswer: string;
	options: Array<OptionType>;
	question: string;
	imageUrl?: string;
};

export type ModalState = {
	isModalOpen: boolean;
	modalType?: string;
	data?: string;
};

export type AnswerObject = {
	_id: string;
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: OptionType;
};

export type QuizState = {
	category: string;
	questions: Array<Question>;
	currentQuestion: number;
	score: number;
	modal: ModalState;
	name: string;
	userAnswers: Array<AnswerObject>;
};

export type AppState = QuizState & {
	user: UserType | null;
	isLoading: boolean;
	isAuthenticated: boolean;
	dashboard: Array<QuizResponseTypeFromDashboard>;
};

export type QuizTypeFromResponse = {
	quizName: string;
	scores: Array<Number>;
	highScore: number;
	_id: string;
};

export type UserScoreType = {
	userId: string;
	_id: string;
	quiz: Array<QuizResponseTypeFromDashboard>;
};

export type UserType = {
	_id: string;
	name: string;
	email: string;
	userScores: UserScoreType;
};

export type LoginState = {
	message: string;
	token: string;
	user: UserType;
};

export type LoadUserType = {
	user: UserType;
};

export type QuestionPayloadType = {
	message: string;
	questions: Array<Question>;
};

export type QuizResponseTypeFromDashboard = {
	highScore: number;
	quizName: string;
	scores: Array<Number>;
	_id: string;
};

export type itemType = {
	_id: string;
	userId: string;
	quiz?: Array<QuizResponseTypeFromDashboard>;
};

export type UpdateDashboardResponseType = {
	message: string;
	item: itemType;
	_id: string;
};

export type ActionsType =
	| { type: typeof Actions.OPEN__MODAL; payload: ModalState }
	| { type: typeof Actions.CLOSE__MODAL }
	| { type: typeof Actions.SET__PLAYER__NAME; payload: string }
	| { type: typeof Actions.SET__QUESTIONS; payload: QuestionPayloadType }
	| { type: typeof Actions.ADD__ANSWER; payload: AnswerObject }
	| { type: typeof Actions.SET__LOGIN; payload: LoginState }
	| { type: typeof Actions.SET__SIGNUP; payload: LoginState }
	| { type: typeof Actions.LOAD__USER; payload: LoadUserType }
	| { type: typeof Actions.SET__LOADING; payload: boolean }
	| { type: typeof Actions.SET__LOGOUT }
	| { type: typeof Actions.SET__QUIZ__CATEGORY; payload: string }
	| { type: typeof Actions.CALCULATE__SCORE }
	| { type: typeof Actions.UPDATE__USER__DASHBOARD; payload: UpdateDashboardResponseType };
