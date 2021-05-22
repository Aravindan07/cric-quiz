import {
	ADD__ANSWER,
	CLOSE__MODAL,
	OPEN__MODAL,
	SET__PLAYER__NAME,
	SET__QUESTIONS,
} from "../constants";

export type Question = {
	_id: string;
	category: string;
	correctAnswer: string;
	options: string[];
	question: string;
	imageUrl?: string;
};

export type LoadedQuestions = {
	questions: Question[];
};

export type ModalState = {
	isModalOpen: boolean;
	modalType?: string;
	data?: string;
};

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

export type QuestionState = Question & { answers: string[] };

export type QuizState = {
	questions: Question[];
	currentQuestion: number;
	score: number;
	modal: ModalState;
	name: string;
	userAnswers: AnswerObject[];
};

export type Actions =
	| { type: typeof OPEN__MODAL; payload: ModalState }
	| { type: typeof CLOSE__MODAL; payload: ModalState }
	| { type: typeof SET__PLAYER__NAME; payload: string }
	| { type: typeof SET__QUESTIONS; payload: Question }
	| { type: typeof ADD__ANSWER; payload: AnswerObject };
