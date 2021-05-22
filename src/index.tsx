import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuizDataProvider } from "./context/quizContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<QuizDataProvider>
				<App />
			</QuizDataProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
