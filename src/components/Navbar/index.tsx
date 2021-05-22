import { NavbarWrapper, NavTitle, TitleContainer, UserIconWrap } from "./styles";
import { ReactComponent as Logo } from "../../icons/title-logo.svg";
import { ReactComponent as UserIcon } from "../../icons/user-icon.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<NavbarWrapper>
			<TitleContainer>
				<Logo className="logo" />
				<NavTitle>
					<Link to="/">CricQuiz</Link>
				</NavTitle>
			</TitleContainer>
			<UserIconWrap>
				<UserIcon />
			</UserIconWrap>
		</NavbarWrapper>
	);
}
