import { NavbarWrapper, NavTitle, TitleContainer } from "./styles";
import { ReactComponent as Logo } from "../../icons/multiple-choice-quiz.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<NavbarWrapper>
			<TitleContainer>
				<Logo fill="#0a5c4a" className="logo" />
				<NavTitle>
					<Link to="/">CricQuiz</Link>
				</NavTitle>
			</TitleContainer>
			{/* Needed in future that's why commenting the below lines */}
			{/* <UserIconWrap>
				<UserIcon />
			</UserIconWrap> */}
		</NavbarWrapper>
	);
}
