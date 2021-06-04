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
	TextCenterDiv,
	FlexBetween,
} from "./styles";
import { ReactComponent as CupIcon } from "../../icons/cup.svg";
import { useHistory } from "react-router";
import { CancelButton } from "../../components/Modal/AddName/styles";
import { SET__LOGOUT, img1, img2 } from "../../constants";

function Login() {
	const {
		state: { dashboard },
		dispatch,
	} = useQuizData();

	const history = useHistory();

	const playAgainClickHandler = () => {
		return history.push("/");
	};

	const logoutClickHandler = () => {
		dispatch({ type: SET__LOGOUT });
		return history.push("/");
	};

	return (
		<AccountPageWrap>
			{dashboard?.length > 0 ? (
				<>
					<PageHeader>
						<h1 style={{ marginTop: "1rem" }}>Played Quizzes</h1>
						<PlayAgainButton onClick={playAgainClickHandler}>
							Play Again
						</PlayAgainButton>
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
										<small>
											{quiz.quizName === "random" ? 14 : 6} questions
										</small>
										<Separator></Separator>
										<small>HighScore - {quiz.highScore}</small>
									</FlexWrap>
								</CardContentDiv>
							</GameCard>
						))}
					</GameCardWrap>
					<h2>Play History</h2>
					<HistoryDiv>
						{dashboard.map((quiz) => (
							<IndividualHistoryDiv key={quiz._id}>
								<CardTitle
									isMarginNeeded={false}
									style={{ textTransform: "capitalize" }}
								>
									{quiz.quizName} Quiz
								</CardTitle>
								<ScoreDiv>
									<CupIcon />
									<p>{quiz.scores[quiz.scores.length - 1]}</p>
								</ScoreDiv>
							</IndividualHistoryDiv>
						))}
					</HistoryDiv>
					<CancelButton
						marginNotNeeded={false}
						style={{ textTransform: "none" }}
						onClick={logoutClickHandler}
					>
						Logout
					</CancelButton>
				</>
			) : (
				<TextCenterDiv>
					<h2>Your playing history is empty</h2>
					<FlexBetween>
						<CancelButton
							marginNotNeeded={true}
							style={{ textTransform: "none" }}
							onClick={logoutClickHandler}
						>
							Logout
						</CancelButton>
						<PlayAgainButton onClick={playAgainClickHandler}>Play Now</PlayAgainButton>
					</FlexBetween>
				</TextCenterDiv>
			)}
		</AccountPageWrap>
	);
}

export default Login;
