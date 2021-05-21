import { NavbarWrapper, NavTitle, TitleContainer, UserIconWrap } from "./Navbar.styles";
import { ReactComponent as Logo } from "../../icons/title-logo.svg";
import { ReactComponent as UserIcon } from "../../icons/user-icon.svg";

export default function Navbar() {
	return (
		<NavbarWrapper>
			<TitleContainer>
				<Logo className="logo" />
				<NavTitle>CricQuiz</NavTitle>
			</TitleContainer>
			<UserIconWrap>
				<UserIcon />
			</UserIconWrap>
		</NavbarWrapper>
	);
}
