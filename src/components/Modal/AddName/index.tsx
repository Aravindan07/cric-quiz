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
import { StartButton } from "../../CategoryCard/styles";
import { useQuizData } from "../../../context/quizContext";
import { CLOSE__MODAL, SET__PLAYER__NAME } from "../../../constants";
import { ReactComponent as CloseIcon } from "../../../icons/close-icon.svg";
import { useHistory } from "react-router";

function AddName() {
	const { dispatch } = useQuizData();
	const [name, setName] = useState("");
	const [isNameActive, setIsNameActive] = useState(false);
	const history = useHistory();
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		if (e.target.value.length > 0) {
			return setIsNameActive(true);
		}
		return setIsNameActive(false);
	};

	const modalCloseHandler = () => {
		return dispatch({ type: CLOSE__MODAL });
	};

	const addNameHandler = () => {
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
			<ButtonsWrapper>
				<CancelButton onClick={modalCloseHandler}>Cancel</CancelButton>
				<StartButton onClick={addNameHandler}>Proceed</StartButton>
			</ButtonsWrapper>
		</Wrapper>
	);
}

export default AddName;
