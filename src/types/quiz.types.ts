import { CLOSE__MODAL, OPEN__MODAL } from "../constants";

export type Question = {
	_id: string;
	category: string;
	correctAnswer: string;
	options: string[];
	question: string;
	imageUrl?: string;
	type?: string;
};

export type ModalState = {
	isModalOpen: boolean;
	modalType?: string;
	data?: string;
};

export type QuizState = {
	questions: Question[];
	currentQuestion: number;
	score: number;
	modal: ModalState;
};

export type Actions =
	| { type: typeof OPEN__MODAL; payload: ModalState }
	| { type: typeof CLOSE__MODAL; payload: ModalState };
