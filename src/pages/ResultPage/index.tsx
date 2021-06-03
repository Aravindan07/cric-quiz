import { useHistory } from "react-router";
import { useQuizData } from "../../context/quizContext";
import { AnswerObject } from "../../types/quiz.types";
import { CardWrapper, QuestionText } from "../../components";
import { StartButton } from "../../components";
import { CorrectAnswerText, ResultDiv, ScoreText } from "./styles";
import { PageWrapper } from "../QuizPage/styles";
import { useEffect } from "react";

function ResultPage() {
	const {
		state: { userAnswers, questions, name, score },
	} = useQuizData();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const history = useHistory();

	const retakeQuiz = () => {
		return history.push("/");
	};

	console.log("questions", questions);

	return (
		<PageWrapper>
			<h2>Score Summary</h2>
			{questions && (
				<ScoreText>
					Hey {name} you scored {score}/{questions.length * 10} points
				</ScoreText>
			)}
			{userAnswers.map(({ _id, correctAnswer, answer, question, correct }: AnswerObject) => (
				<CardWrapper key={_id}>
					<QuestionText>{question}</QuestionText>
					<ResultDiv>
						<p>
							Your Answer: <span className="my-answer">{answer}</span>
						</p>
						<CorrectAnswerText correct={correct}>
							Correct Answer:
							<span> {correctAnswer.name}</span>
						</CorrectAnswerText>
					</ResultDiv>
					{correct ? (
						<CorrectAnswerText correct={correct}>
							<span>You answered correctly!</span>
						</CorrectAnswerText>
					) : (
						<CorrectAnswerText correct={correct}>
							<span>Your answer is wrong!</span>
						</CorrectAnswerText>
					)}
				</CardWrapper>
			))}
			<StartButton onClick={retakeQuiz}>Retake</StartButton>
		</PageWrapper>
	);
}

export default ResultPage;
