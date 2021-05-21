import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuizDataProvider } from "./context/quizContext";

ReactDOM.render(
	<React.StrictMode>
		<QuizDataProvider>
			<App />
		</QuizDataProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
