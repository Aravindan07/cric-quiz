import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ path, ...props }: any) => {
	const userAuthenticated = localStorage.getItem("userAuthenticated");

	return userAuthenticated ? (
		<Route path={path} {...props} />
	) : (
		<Redirect
			to={{
				pathname: "/",
				state: { from: props.location },
			}}
		/>
	);
};
