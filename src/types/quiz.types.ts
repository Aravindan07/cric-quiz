import {
	ADD__ANSWER,
	CLOSE__MODAL,
	OPEN__MODAL,
	SET__PLAYER__NAME,
	SET__QUESTIONS,
} from "../constants";

export type OptionType = {
	_id: string;
	name: string;
	correct: boolean;
};

export type Question = {
	_id: string;
	category: string;
	correctAnswer: string;
	options: OptionType[];
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
	questions: Question[];
	currentQuestion: number;
	score: number;
	modal: ModalState;
	name: string;
	userAnswers: Array<AnswerObject>;
};

export type Actions =
	| { type: typeof OPEN__MODAL; payload: ModalState }
	| { type: typeof CLOSE__MODAL; payload: ModalState }
	| { type: typeof SET__PLAYER__NAME; payload: string }
	| { type: typeof SET__QUESTIONS; payload: Question }
	| { type: typeof ADD__ANSWER; payload: AnswerObject };
