import { useEffect, useState } from "react";
import { InstructionsComponent, QuizCard } from "../../components";
import { Heading } from "../../components/CategoryCard/styles";
import { useQuizData } from "../../context/quizContext";
import { PageWrapper } from "./styles";
import axios from "axios";
import { SET__QUESTIONS } from "../../constants";
import { CancelButton } from "../../components/Modal/AddName/styles";
import { useHistory } from "react-router";

const { REACT_APP_BACKEND_URL } = process.env;

function QuizPage() {
	const { dispatch, state } = useQuizData();
	const [quizQuestion, setQuizQuestions] = useState([]);
	const [questionNumber, setQuestionNumber] = useState(0);
	const history = useHistory();

	useEffect(() => {
		(async () => {
			const response = await axios.get(
				`${REACT_APP_BACKEND_URL}/quiz?category=${state.modal.data}`
			);
			setQuizQuestions(response.data.questions);
			return dispatch({ type: SET__QUESTIONS, payload: response.data });
		})();
	}, []);

	const incrementQuestionNumber = () => {
		return setQuestionNumber((prev) => prev + 1);
	};

	const seeScoreHandler = () => {
		return history.push("/quiz/result");
	};

	return (
		<PageWrapper>
			<InstructionsComponent />
			<Heading>Let's play</Heading>
			<p>
				Question {questionNumber + 1} of {quizQuestion.length}
			</p>

			<QuizCard data={quizQuestion[questionNumber] && quizQuestion[questionNumber]} />
			{quizQuestion[questionNumber + 1] === undefined ? (
				<CancelButton onClick={seeScoreHandler}>See Score</CancelButton>
			) : (
				<CancelButton onClick={incrementQuestionNumber}>Next</CancelButton>
			)}
		</PageWrapper>
	);
}

export default QuizPage;
