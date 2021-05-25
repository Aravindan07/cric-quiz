import { Route, Switch } from "react-router-dom";
import { Modal, Navbar, CategoryCard } from "./components";
import { NotFoundPage, QuizPage, ResultPage } from "./pages";
import { GlobalStyle } from "./GlobalStyles";

function App() {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Modal />
			<Switch>
				<Route path="/" exact component={CategoryCard} />
				<Route path="/quiz" exact component={QuizPage} />
				<Route path="/quiz/result" exact component={ResultPage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</>
	);
}

export default App;
