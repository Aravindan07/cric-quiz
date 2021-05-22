import React, { useState } from "react";
import { ADD__ANSWER } from "../../constants";
import { useQuizData } from "../../context/quizContext";
import { Question } from "../../types/quiz.types";
import { AnswerButton, CardWrapper, QuestionText } from "./styles";

type Props = {
	data: Question;
};

function QuizCard({ data }: Props) {
	const { dispatch } = useQuizData();
	const [correct, setCorrect] = useState("");

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		setCorrect(e.currentTarget.value);
		const answerObj = {
			question: data?.question,
			answer: e.currentTarget.value,
			correct: e.currentTarget.value === data?.correctAnswer,
			correctAnswer: data?.correctAnswer,
		};

		dispatch({ type: ADD__ANSWER, payload: answerObj });
	};

	return (
		<>
			<CardWrapper>
				<QuestionText>{data?.question}</QuestionText>
				{data?.options.map((el: string) => (
					<AnswerButton
						key={el}
						value={el}
						onClick={(e) => checkAnswer(e)}
						correct={el === correct}
					>
						{el}
					</AnswerButton>
				))}
			</CardWrapper>
		</>
	);
}

export default QuizCard;
