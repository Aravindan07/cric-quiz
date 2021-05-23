import styled from "styled-components";

export const NavbarWrapper = styled.div`
	width: 100%;
	height: 50px;
	background-color: #15b996;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	z-index: 3;
	.logo {
		width: 25px;
		height: 25px;
		margin-top: 5px;
	}
`;

export const TitleContainer = styled.div`
	margin-left: 1rem;
	display: flex;
	cursor: pointer;
`;

export const NavTitle = styled.h2`
	margin-left: 5px;
	letter-spacing: 0.8px;
	a {
		text-decoration: none;
		color: #fff;
	}
`;

export const UserIconWrap = styled.div`
	height: 80%;
	display: flex;
	align-items: center;
	background-color: #0a5c4a;
	border-radius: 50%;
	margin-right: 1rem;
	padding: 2px;
	svg {
		width: 35px;
		height: 35px;
		cursor: pointer;
	}
`;
