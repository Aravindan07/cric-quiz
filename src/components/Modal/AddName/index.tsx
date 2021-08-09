import React, { useState } from "react";
import {
	ButtonsWrapper,
	CancelButton,
	CloseIconDiv,
	Input,
	InputWrap,
	Label,
	ModalTitle,
	Wrapper,
} from "./styles";
import { ErrorMessage, StartButton } from "../../CategoryCard/styles";
import { useQuizData } from "../../../context/quizContext";
import { CLOSE__MODAL, SET__PLAYER__NAME } from "../../../constants";
import { ReactComponent as CloseIcon } from "../../../icons/close-icon.svg";
import { useHistory } from "react-router";

function AddName() {
	const { dispatch } = useQuizData();
	const [name, setName] = useState("");
	const [isNameActive, setIsNameActive] = useState(false);
	const [message, setMessage] = useState("");
	const history = useHistory();
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		setName(value);
		return value.length > 0 ? setIsNameActive(true) : setIsNameActive(false);
	};

	const modalCloseHandler = () => {
		return dispatch({ type: CLOSE__MODAL });
	};

	const addNameHandler = () => {
		if (name.length === 0) {
			return setMessage("Please Enter a name");
		}
		dispatch({ type: SET__PLAYER__NAME, payload: name });
		dispatch({ type: CLOSE__MODAL });
		return history.push("/quiz");
	};

	return (
		<Wrapper>
			<CloseIconDiv onClick={modalCloseHandler}>
				<CloseIcon />
			</CloseIconDiv>
			<ModalTitle>Enter your Name</ModalTitle>
			<InputWrap>
				<Label htmlFor="name" active={isNameActive}>
					Name
				</Label>
				<Input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={(e) => onChangeHandler(e)}
					required
				/>
			</InputWrap>
			{message.length > 0 && <ErrorMessage>{message}</ErrorMessage>}
			<ButtonsWrapper>
				<CancelButton onClick={modalCloseHandler}>Cancel</CancelButton>
				<StartButton onClick={addNameHandler}>Proceed</StartButton>
			</ButtonsWrapper>
		</Wrapper>
	);
}

export default AddName;
