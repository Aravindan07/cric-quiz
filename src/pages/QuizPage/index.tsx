import { useEffect, useState } from "react";
import { InstructionsComponent, QuizCard } from "../../components";
import { Heading } from "../../components/CategoryCard/styles";
import { useQuizData } from "../../context/quizContext";
import { PageWrapper } from "./styles";
import { useHistory } from "react-router";

function QuizPage() {
	const {
		state: { questions, user, score },
		fetchQuiz,
		addScore,
	} = useQuizData();

	const quizCategory = localStorage.getItem("quiz-category");

	useEffect(() => {
		fetchQuiz(quizCategory!);
	}, [fetchQuiz, quizCategory]);

	const [questionNumber, setQuestionNumber] = useState(0);
	const history = useHistory();

	const incrementQuestionNumber = () => {
		setQuestionNumber((prev) => prev + 1);
	};

	const seeScoreHandler = () => {
		addScore(user?._id!, quizCategory!, score);
		return history.push("/quiz/result");
	};

	return (
		<PageWrapper>
			<InstructionsComponent />
			<Heading>Let's play</Heading>
			<p>
				Question {questionNumber + 1} of {questions.length}
			</p>

			<QuizCard
				data={questions && questions[questionNumber]}
				nextQuestion={incrementQuestionNumber}
				scoreGetter={seeScoreHandler}
				isLast={questions[questionNumber + 1] === undefined}
			/>
		</PageWrapper>
	);
}

export default QuizPage;
