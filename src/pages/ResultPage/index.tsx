import { useHistory } from "react-router";
import { useQuizData } from "../../context/quizContext";
import { AnswerObject } from "../../types/quiz.types";
import { CardWrapper, QuestionText } from "../../components";
import { StartButton } from "../../components";
import { CorrectAnswerText, ResultDiv, ScoreText } from "./styles";
import { PageWrapper } from "../QuizPage/styles";
import { useEffect } from "react";
import { CancelButton } from "../../components/Modal/AddName/styles";
import { FlexBetween } from "../AccountPage/styles";

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

	const goToDashboard = () => {
		return history.push("/my-account");
	};

	console.log("score", score);

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
			<FlexBetween>
				<CancelButton onClick={goToDashboard}>Dashboard</CancelButton>
				<StartButton onClick={retakeQuiz}>Retake</StartButton>
			</FlexBetween>
		</PageWrapper>
	);
}

export default ResultPage;
