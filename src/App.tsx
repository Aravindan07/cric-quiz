import { useEffect } from "react";
import { Modal, Navbar } from "./components";
import { GlobalStyle } from "./GlobalStyles";
import { Routes } from "./routes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuizData } from "./context/quizContext";

function App() {
	const { loadUser } = useQuizData();

	useEffect(() => {
		loadUser();
	}, [loadUser]);

	toast.configure();

	return (
		<>
			<GlobalStyle />
			<Navbar />
			<ToastContainer />
			<Modal />
			<Routes />
		</>
	);
}

export default App;
