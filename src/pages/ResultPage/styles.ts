import styled from "styled-components";
import { devices } from "../../devices";

export const ScoreText = styled.p`
	color: #0a5c4a;
	margin: 2rem 0 1rem 0;
	font-size: 20px;
	font-weight: 700;
	@media ${devices.mobileL} {
		text-align: center;
	}
`;

type ResultProps = {
	correct?: boolean;
};

export const ResultDiv = styled.div<ResultProps>`
	user-select: none;
	font-size: 16px;
	width: 100%;
	margin: 10px 0;
	border: none;
	display: block;
	border-radius: 5px;
	color: #052e25;
	letter-spacing: 0.8px;
	text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	transition: all 0.3s ease;
	p {
		margin: 0.5rem 0;
	}
	.my-answer {
		color: #15b996;
		font-weight: 600;
		font-size: 18px;
	}
`;

type CorrectAnswerProps = {
	correct?: boolean;
};

export const CorrectAnswerText = styled.p<CorrectAnswerProps>`
	span {
		color: ${(props) => (props.correct ? "#15b996" : "#b91538")};
		font-size: 18px;
		font-weight: 600;
	}
`;
