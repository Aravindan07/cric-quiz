import React, { useState } from "react";
import { useHistory } from "react-router";
import { OPEN__MODAL, SET__QUIZ__CATEGORY } from "../../constants";
import { useQuizData } from "../../context/quizContext";
import { Card, CardTitle, CardWrap, ErrorMessage, Heading, Main, StartButton } from "./styles";

const categories = [
	{
		id: "1",
		name: "Random",
		type: "random",
	},
	{
		id: "2",
		name: "IPL",
		type: "ipl",
	},
];

function CategoryCard() {
	const [chosen, setChosen] = useState("");
	const { dispatch, state } = useQuizData();
	const [message, setMessage] = useState("");
	const history = useHistory();

	const onClickHandler = (e: React.MouseEvent<HTMLDivElement>, item: string) => {
		return setChosen(item);
	};

	const openModalHandler = () => {
		if (chosen === "") {
			return setMessage("Please click on a Category");
		}

		dispatch({ type: SET__QUIZ__CATEGORY, payload: chosen });

		if (state.isAuthenticated) {
			return history.push("/quiz");
		}

		return dispatch({
			type: OPEN__MODAL,
			payload: { modalType: "login", data: { chosen, type: "login" } },
		});
	};

	return (
		<Main>
			<Heading>Choose a Category</Heading>
			<CardWrap>
				{categories.map(({ id, type, name }) => (
					<Card
						key={id}
						type={type}
						onClick={(e) => onClickHandler(e, type)}
						active={type === chosen}
					>
						<CardTitle>{name}</CardTitle>
					</Card>
				))}
			</CardWrap>
			{message.length > 0 && <ErrorMessage>{message}</ErrorMessage>}
			<StartButton onClick={openModalHandler}>Start</StartButton>
		</Main>
	);
}

export default CategoryCard;
