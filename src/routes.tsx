import { Route, Switch } from "react-router";
import { CategoryCard } from "./components";
import { NotFoundPage, QuizPage, ResultPage, AccountPage } from "./pages";
import { PrivateRoute } from "./privateRoutes";

export function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={CategoryCard} />
			<Route path="/my-account" exact component={AccountPage} />
			<PrivateRoute path="/quiz" exact component={QuizPage} />
			<Route path="/quiz/result" exact component={ResultPage} />
			<Route path="*" component={NotFoundPage} />
		</Switch>
	);
}
