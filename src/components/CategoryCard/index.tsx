import React, { useState } from "react";
import { OPEN__MODAL } from "../../constants";
import { useQuizData } from "../../context/quizContext";
import { Card, CardTitle, CardWrap, Heading, StartButton } from "./styles";

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
	const { state, dispatch } = useQuizData();
	console.log("state in category", state);

	const onClickHandler = (e: React.MouseEvent<HTMLDivElement>, item: string) => {
		return setChosen(item);
	};

	const openModalHandler = () => {
		return dispatch({ type: OPEN__MODAL, payload: { modalType: "addName", data: chosen } });
	};

	return (
		<>
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
			<StartButton onClick={openModalHandler}>Start</StartButton>
		</>
	);
}

export default CategoryCard;
