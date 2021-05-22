import styled from "styled-components";
import { devices } from "../../../devices";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	position: relative;
`;

export const ModalTitle = styled.p`
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.8px;
	margin-bottom: 1rem;
`;

type LabelProps = {
	active: boolean;
};

export const CloseIconDiv = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	right: 0;
	top: 0;
	svg {
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
`;

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
	width: 80%;
	text-align: center;
	position: relative;
	:focus-within ${Label} {
		transform: translate(15px, 3px) scale(1);
		color: #15b996;
	}
`;

export const Input = styled.input`
	width: 100%;
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

export const ButtonsWrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	@media ${devices.mobileL} {
		flex-direction: column-reverse;
		align-items: center;
	}
`;

export const CancelButton = styled.button`
	background-color: #b91538;
	font-size: 18px;
	border-radius: 5px;
	padding: 10px;
	margin: 2.5rem 0;
	cursor: pointer;
	letter-spacing: 1px;
	border: none;
	color: #fff;
	text-transform: uppercase;
	:hover {
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	}

	@media ${devices.mobileL} {
		margin: 1rem 0;
	}
`;
