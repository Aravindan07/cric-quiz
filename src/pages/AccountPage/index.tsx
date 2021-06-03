import { FlexWrap } from "../../components/Navbar/styles";
import { useQuizData } from "../../context/quizContext";
import {
	AccountPageWrap,
	PageHeader,
	PlayAgainButton,
	GameCard,
	GameCardWrap,
	CardImageDiv,
	CardContentDiv,
	CardTitle,
	Separator,
	HistoryDiv,
	IndividualHistoryDiv,
	ScoreDiv,
} from "./styles";
import { ReactComponent as CupIcon } from "../../icons/cup.svg";
import { useHistory } from "react-router";
import { CancelButton } from "../../components/Modal/AddName/styles";
import { SET__LOGOUT, img1, img2 } from "../../constants";

// const quiz = [
// 	{
// 		quizName: "IPL",
// 		scores: [30, 50, 60, 10, 20],
// 		highScore: 60,
// 	},
// 	{
// 		quizName: "Random",
// 		scores: [100, 130, 90, 110, 120],
// 		highScore: 130,
// 	},
// ];

function Login() {
	const {
		state: { dashboard },
		dispatch,
	} = useQuizData();
	console.log("dashboard", dashboard);

	const history = useHistory();

	const playAgainClickHandler = () => {
		return history.push("/");
	};

	const logoutClickHandler = () => {
		dispatch({ type: SET__LOGOUT });
		return history.push("/");
	};

	const getScores = (name: string) =>
		dashboard.map((quiz) => (quiz.quizName === name ? quiz.scores : null));
	console.log("getScores", getScores("ipl"));

	return (
		<AccountPageWrap>
			<PageHeader>
				<h1 style={{ marginTop: "1rem" }}>Your Quizzes</h1>
				<PlayAgainButton onClick={playAgainClickHandler}>Play Again</PlayAgainButton>
			</PageHeader>
			<GameCardWrap>
				{dashboard.map((quiz) => (
					<GameCard key={quiz._id}>
						<CardImageDiv>
							<img
								src={quiz.quizName === "random" ? img1 : img2}
								alt="Cricket Quiz"
							/>
						</CardImageDiv>
						<CardContentDiv>
							<CardTitle
								isMarginNeeded={true}
								style={{ textTransform: "capitalize" }}
							>
								{quiz.quizName} Quiz
							</CardTitle>
							<FlexWrap>
								<small>{quiz.quizName === "random" ? 14 : 6} questions</small>
								<Separator></Separator>
								<small>Your HighScore - {quiz.highScore}</small>
							</FlexWrap>
						</CardContentDiv>
					</GameCard>
				))}
			</GameCardWrap>
			<h2>Play History</h2>
			<HistoryDiv>
				{dashboard.map((quiz) => (
					<IndividualHistoryDiv key={quiz._id}>
						<CardTitle isMarginNeeded={false} style={{ textTransform: "capitalize" }}>
							{quiz.quizName} Quiz
						</CardTitle>
						<ScoreDiv>
							<CupIcon />
							<p>{quiz.scores[quiz.scores.length - 1]}</p>
						</ScoreDiv>
					</IndividualHistoryDiv>
				))}
			</HistoryDiv>
			<CancelButton style={{ textTransform: "none" }} onClick={logoutClickHandler}>
				Logout
			</CancelButton>
		</AccountPageWrap>
	);
}

export default Login;
