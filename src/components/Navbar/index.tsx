import { FlexWrap, NavbarWrapper, NavTitle, TitleContainer, UserIconWrap } from "./styles";
import { ReactComponent as Logo } from "../../icons/multiple-choice-quiz.svg";
import { Link, useHistory } from "react-router-dom";
import { useQuizData } from "../../context/quizContext";

export default function Navbar() {
	const { state } = useQuizData();

	const history = useHistory();

	const accountPageHandler = () => {
		return history.push("/my-account");
	};

	return (
		<NavbarWrapper>
			<TitleContainer>
				<Logo fill="#0a5c4a" className="logo" />
				<NavTitle>
					<Link to="/">CricQuiz</Link>
				</NavTitle>
			</TitleContainer>
			{state.isAuthenticated && (
				<FlexWrap onClick={accountPageHandler}>
					<UserIconWrap>{state.user?.name[0].toUpperCase()}</UserIconWrap>
					<p style={{ cursor: "pointer" }}>{state.user?.name}</p>
				</FlexWrap>
			)}
		</NavbarWrapper>
	);
}
