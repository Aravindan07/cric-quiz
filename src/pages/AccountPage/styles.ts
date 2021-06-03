import styled from "styled-components";

export const LoginHeading = styled.h2`
	margin: 1rem 0;
`;

type LabelProps = {
	active: boolean;
};

export const Label = styled.label<LabelProps>`
	color: #6b7280;
	background: #fff;
	position: absolute;
	padding: 0px 5px;
	transform: ${(props) =>
		props.active === true ? "translate(15px, 3px) scale(1)" : "translate(15px, 27px) scale(1)"};
	transform-origin: top left;
	transition: all 0.2s ease-out;
`;

export const InputWrap = styled.div`
	width: 60%;
	text-align: center;
	position: relative;
	:focus-within ${Label} {
		transform: translate(15px, 3px) scale(1);
		color: #15b996;
	}
`;

export const Input = styled.input`
	width: 70%;
	height: 50px;
	margin: 15px 0px;
	outline: none;
	border: 2px solid #d2d2d2;
	border-radius: 5px;
	font-size: 18px;
	padding: 15px;
	::placeholder {
		font-weight: 500;
	}
	:focus,
	:active {
		background: #ffffff;
		border: 2px solid #15b996;
	}
`;

export const NoAccountInfo = styled.p`
	margin: 0.5rem 0 1rem 0;
	.color-success {
		color: #15b996;
		text-decoration: none;
		font-weight: 600;
		margin: 0 5px;
		letter-spacing: 1px;
	}
`;

export const CredentialsText = styled.p`
	font-weight: 600;
	margin: 2px 0;
	letter-spacing: 1px;
`;

export const AccountPageWrap = styled.div`
	display: block;
	margin: 4rem auto 0 auto;
	width: 80%;
	height: 100%;
`;

export const PageHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap-reverse;
	height: fit-content;
	margin-top: 1rem;
`;

export const PlayAgainButton = styled.button`
	border: none;
	color: #fff;
	background: linear-gradient(110.38deg, #176c5b -3.58%, #16ad70 117.18%);
	border-radius: 10px;
	letter-spacing: 0.8px;
	font-weight: 500;
	font-size: 1.2rem;
	padding: 0.5rem;
	border-radius: 5px;
	cursor: pointer;
	text-transform: capitalize;
	margin-top: 1rem;
	:hover {
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	}
`;

export const GameCardWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin: 2rem 0;
`;

export const GameCard = styled.div`
	width: 300px;
	height: 300px;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.25);
	margin: 1rem 2rem 0 0;
	border-radius: 10px;
`;

export const CardImageDiv = styled.div`
	height: 90%;
	width: 100%;
	img {
		width: 100%;
		height: 100%;
		border-radius: 10px 10px 0 0;
	}
`;

export const CardContentDiv = styled.div`
	height: 40%;
	width: 100%;
	padding: 1rem;
`;

type CardTitleProps = {
	isMarginNeeded: boolean;
};

export const CardTitle = styled.p<CardTitleProps>`
	font-weight: 700;
	font-size: 18px;
	letter-spacing: 0.8px;
	color: #000;
	margin-bottom: ${(props) => (props.isMarginNeeded ? "1rem" : "0")};
`;

export const Separator = styled.div`
	width: 5px;
	height: 5px;
	border-radius: 100%;
	margin: 0 1rem;
	background-color: #6b7280;
`;

export const HistoryDiv = styled.div`
	margin-top: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
	border-radius: 5px;
`;

export const IndividualHistoryDiv = styled.div`
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	border-bottom: 1px solid rgba(107, 114, 128, 0.25);
`;

export const ScoreDiv = styled.div`
	display: flex;
	align-items: center;
	svg {
		width: 30px;
		height: 30px;
		margin-right: 1rem;
	}
`;
