import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CLOSE__MODAL, OPEN__MODAL } from "../../../constants";
import { useQuizData } from "../../../context/quizContext";
import { NoAccountInfo } from "../../../pages/AccountPage/styles";
import { StartButton } from "../../CategoryCard/styles";
import {
	CloseIconDiv,
	Input,
	InputWrap,
	Label,
	ModalTitle,
	Wrapper,
	TestCredentialsButton,
} from "../AddName/styles";
import { ReactComponent as CloseIcon } from "../../../icons/close-icon.svg";

function LoginModal({ data }: any) {
	const initialState = {
		name: "",
		email: "",
		password: "",
	};

	const initialActive = {
		isNameActive: false,
		isEmailActive: false,
		isPasswordActive: false,
	};

	const [{ name, email, password }, setState] = useState(initialState);
	const [{ isNameActive, isEmailActive, isPasswordActive }, setIsActive] =
		useState(initialActive);
	const { logInUser, registerUser, dispatch } = useQuizData();

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, sentName: string) => {
		const name = event.target.name;
		const value = event.target.value;
		const labelName = sentName;
		setState((prevState) => ({ ...prevState, [name]: value }));
		if (value !== "") {
			return setIsActive((prevState) => ({ ...prevState, [labelName]: true }));
		} else {
			return setIsActive((prevState) => ({ ...prevState, [labelName]: false }));
		}
	};

	const loginClickHandler = () => {
		if (data.type === "login") {
			return logInUser(email, password);
		}
		return registerUser(name, email, password);
	};

	const openModalHandler = (type: string) => {
		if (type === "login") {
			return dispatch({
				type: OPEN__MODAL,
				payload: { modalType: "login", data: { chosen: data.chosen, type: "login" } },
			});
		}
		return dispatch({
			type: OPEN__MODAL,
			payload: { modalType: "register", data: { chosen: data.chosen, type: "register" } },
		});
	};

	const modalCloseHandler = () => {
		return dispatch({ type: CLOSE__MODAL });
	};

	const useTestCredentials = () => {
		const name1 = "email";
		const name2 = "password";
		const label1 = "isEmailActive";
		const label2 = "isPasswordActive";

		setState((prevState) => ({
			...prevState,
			[name1]: "check123@gmail.com",
			[name2]: "check@123",
		}));
		setIsActive((prevState) => ({ ...prevState, [label1]: true, [label2]: true }));
	};

	return (
		<Wrapper>
			<CloseIconDiv onClick={modalCloseHandler}>
				<CloseIcon />
			</CloseIconDiv>
			{data.type === "login" ? (
				<ModalTitle>Login to your account</ModalTitle>
			) : (
				<ModalTitle>Create an account</ModalTitle>
			)}
			{data.type !== "login" && (
				<InputWrap>
					<Label htmlFor="name" active={isNameActive}>
						Name
					</Label>
					<Input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => onChangeHandler(e, "isNameActive")}
						required
					/>
				</InputWrap>
			)}
			<InputWrap>
				<Label htmlFor="email" active={isEmailActive}>
					Email
				</Label>
				<Input
					type="text"
					name="email"
					id="email"
					value={email}
					onChange={(e) => onChangeHandler(e, "isEmailActive")}
					required
				/>
			</InputWrap>
			<InputWrap>
				<Label htmlFor="password" active={isPasswordActive}>
					Password
				</Label>
				<Input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={(e) => onChangeHandler(e, "isPasswordActive")}
					required
				/>
			</InputWrap>
			<StartButton onClick={loginClickHandler}>
				{data.type === "login" ? "Signin" : "Register"}
			</StartButton>
			{data.type === "login" && (
				<TestCredentialsButton onClick={useTestCredentials}>
					Test Credentials
				</TestCredentialsButton>
			)}
			{data.type === "login" ? (
				<NoAccountInfo className="mt-8 mb-8">
					Don't have an account?
					<Link
						to="/"
						className="color-success"
						onClick={() => openModalHandler("register")}
					>
						Register
					</Link>
					here
				</NoAccountInfo>
			) : (
				<NoAccountInfo className="mt-8 mb-8">
					Already have an account?
					<Link
						to="/"
						className="color-success"
						onClick={() => openModalHandler("login")}
					>
						Login
					</Link>
					here
				</NoAccountInfo>
			)}
		</Wrapper>
	);
}

export default LoginModal;
