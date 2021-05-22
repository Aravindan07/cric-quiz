import { GlobalStyle } from "./GlobalStyles";
import { Modal, Navbar } from "./components/index";
import CategoryCard from "./components/CategoryCard";
import { Route, Switch } from "react-router-dom";
import { QuizPage, ResultPage } from "./pages";

function App() {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Modal />
			<Switch>
				<Route path="/quiz/result" exact component={ResultPage} />
				<Route path="/quiz" exact component={QuizPage} />
				<Route path="/" component={CategoryCard} />
			</Switch>
		</>
	);
}

export default App;
