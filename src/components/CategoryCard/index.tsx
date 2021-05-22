import React, { useState } from "react";
import { OPEN__MODAL } from "../../constants";
import { useQuizData } from "../../context/quizContext";
import { Card, CardTitle, CardWrap, Heading, Main, StartButton } from "./styles";

const categories = [
	{
		id: "1",
		name: "Random",
		type: "random",
	},
	{
		id: "2",
		name: "IPL",
		type: "",
	},
];

function CategoryCard() {
	const [chosen, setChosen] = useState("");
	const { dispatch } = useQuizData();
	const [message, setMessage] = useState("");

	const onClickHandler = (e: React.MouseEvent<HTMLDivElement>, item: string) => {
		return setChosen(item);
	};

	const openModalHandler = () => {
		if (chosen.length > 0) {
			return dispatch({ type: OPEN__MODAL, payload: { modalType: "addName", data: chosen } });
		}
		return setMessage("Please click on a Category");
	};

	return (
		<Main>
			<Heading>Choose a Category</Heading>
			<CardWrap>
				{categories.map((el) => (
					<Card
						key={el.id}
						type={el.type}
						onClick={(e) => onClickHandler(e, el.name)}
						active={el.name === chosen}
					>
						<CardTitle>{el.name}</CardTitle>
					</Card>
				))}
			</CardWrap>
			{message.length > 0 && <p className="error-message">{message}</p>}
			<StartButton onClick={openModalHandler}>Start</StartButton>
		</Main>
	);
}

export default CategoryCard;
