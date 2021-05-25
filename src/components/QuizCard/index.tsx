import React, { useState } from "react";
import { ADD__ANSWER } from "../../constants";
import { useQuizData } from "../../context/quizContext";
import { OptionType, Question } from "../../types/quiz.types";
import { CancelButton } from "../Modal/AddName/styles";
import { AnswerButton, CardWrapper, QuestionText } from "./styles";

type Props = {
	data: Question;
	nextQuestion: (e: React.MouseEvent<HTMLButtonElement>) => void;
	scoreGetter: (e: React.MouseEvent<HTMLButtonElement>) => void;
	isLast: boolean;
};

function QuizCard({ data, nextQuestion, scoreGetter, isLast }: Props) {
	const { dispatch } = useQuizData();
	const [color, setColor] = useState("");

	const checkAnswerCorrect = (item: string) => {
		return data.options.find((option) => option.name === item);
	};

	const getCorrectAnswer = () => data.options.find((option) => option.correct === true);

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		const findOption = data.options.find((option) => option.name === color);

		const answerObj = {
			_id: findOption?._id,
			question: data?.question,
			answer: color,
			correct: checkAnswerCorrect(color)?.correct,
			correctAnswer: getCorrectAnswer(),
		};

		dispatch({ type: ADD__ANSWER, payload: answerObj });
		return isLast ? nextQuestion(e) : scoreGetter(e);
	};

	const changeColor = (e: React.MouseEvent<HTMLButtonElement>) => {
		return setColor(e.currentTarget.value);
	};

	return (
		<>
			<CardWrapper>
				<QuestionText>{data?.question}</QuestionText>
				{data?.options.map((option: OptionType) => (
					<AnswerButton
						key={option._id}
						value={option.name}
						onClick={changeColor}
						correct={option.name === color}
					>
						{option.name}
					</AnswerButton>
				))}
			</CardWrapper>
			{isLast ? (
				<CancelButton onClick={(e) => checkAnswer(e)}>Next</CancelButton>
			) : (
				<CancelButton onClick={(e) => checkAnswer(e)}>See Score</CancelButton>
			)}
		</>
	);
}

export default QuizCard;
