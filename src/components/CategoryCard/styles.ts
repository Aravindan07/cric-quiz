import styled from "styled-components";

export const Heading = styled.h1`
	margin-bottom: 2rem;
	letter-spacing: 0.8px;
`;

export const CardWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export type CardProps = {
	type?: string;
	active: boolean;
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const Card = styled.div<CardProps>`
	width: 250px;
	height: 200px;
	border-radius: 5px;
	margin: 0 1rem;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${(props) =>
		props.type === "random"
			? "linear-gradient(90deg, #1D976C 0%, #5DCC87 100%)"
			: "linear-gradient(90deg, #2193B0 0%, #6DD5ED 100%)"};
	border: ${(props) => (props.active ? "2px solid #000" : "none")};
	:hover {
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
	}
`;

export const CardTitle = styled.p`
	color: #fff;
	font-weight: 600;
	font-size: 1.2rem;
	letter-spacing: 0.6px;
`;

export const StartButton = styled.button`
	border: none;
	color: #fff;
	background: linear-gradient(110.38deg, #176c5b -3.58%, #16ad70 117.18%);
	border-radius: 10px;
	letter-spacing: 0.8px;
	font-weight: 500;
	font-size: 1.2rem;
	padding: 10px;
	margin: 2.5rem 0;
	border-radius: 5px;
	cursor: pointer;
	text-transform: uppercase;
	:hover {
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	}
`;
