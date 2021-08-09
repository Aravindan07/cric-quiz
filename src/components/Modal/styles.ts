import { useMediaQuery } from "../../utils/useMediaQueries";

export function useModalStyles() {
	const [width] = useMediaQuery();
	const overlay = {
		backgroundColor: "rgba(0,0,0,0.8)",
	};

	const content = {
		width: width <= 500 ? "80%" : "50%",
		height: "80%",
		margin: "auto",
		borderRadius: "5px",
		padding: width <= 500 ? "30px 10px" : "30px 20px 20px 20px",
		ZIndex: "10",
	};

	return { content, overlay };
}
