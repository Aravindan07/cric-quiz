import { Redirect, Route } from "react-router";
import { useQuizData } from "./context/quizContext";

export const PrivateRoute = ({ path, ...props }: any) => {
	const {
		state: { isAuthenticated },
	} = useQuizData();
	// const userAuthenticated = localStorage.getItem("userAuthenticated");

	return isAuthenticated ? (
		<Route path={path} {...props} />
	) : (
		<Redirect
			to={{
				pathname: "/my-account",
				state: { from: props.location },
			}}
		/>
	);
};
