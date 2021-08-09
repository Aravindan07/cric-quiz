import styled from "styled-components";

export const CardWrapper = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 5px;
	text-align: center;
	padding: 20px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	margin: 2rem 0;
`;

export const QuestionText = styled.p`
	margin: 1rem 0rem;
	font-size: 20px;
	font-weight: 600;
`;

type ButtonProps = {
	correct?: boolean;
	disabled?: boolean;
};

export const AnswerButton = styled.button<ButtonProps>`
	user-select: none;
	font-size: 16px;
	width: 100%;
	min-height: 40px;
	margin: 10px 0;
	border: none;
	background: ${(props) =>
		props.correct ? "linear-gradient(90deg, #56FFA4, #59BC86)" : "#e5e7eb"};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	color: #052e25;
	letter-spacing: 0.8px;
	text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	transition: all 0.3s ease;
	cursor: pointer;
	:hover {
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
	}
`;
