import { useHistory } from "react-router";
import { useQuizData } from "../../context/quizContext";
import { AnswerObject } from "../../types/quiz.types";
import { CardWrapper, QuestionText } from "../../components/QuizCard/styles";
import { StartButton } from "../../components/CategoryCard/styles";
import { CorrectAnswerText, ResultDiv, ScoreText } from "./styles";
import { PageWrapper } from "../QuizPage/styles";

function ResultPage() {
	const { state } = useQuizData();

	const history = useHistory();

	const retakeQuiz = () => {
		return history.push("/");
	};

	const score = state.userAnswers.filter((el: AnswerObject) => el.correct === true);

	return (
		<PageWrapper>
			<h2>Score Summary</h2>
			<ScoreText>
				Hey {state.name} you scored {score.length * 10}/
				{state.questions[0].questions.length * 10} points
			</ScoreText>
			{state.userAnswers.map((el: AnswerObject) => (
				<CardWrapper key={el.correctAnswer}>
					<QuestionText>{el.question}</QuestionText>
					<ResultDiv>
						<p>
							Your Answer: <span className="my-answer">{el.answer}</span>
						</p>
						<CorrectAnswerText correct={el.correct}>
							Correct Answer:
							<span> {el.correctAnswer}</span>
						</CorrectAnswerText>
					</ResultDiv>
					{el.correct ? (
						<CorrectAnswerText correct={el.correct}>
							<span>You answered correctly!</span>
						</CorrectAnswerText>
					) : (
						<CorrectAnswerText correct={el.correct}>
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
