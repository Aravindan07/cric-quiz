import { GlobalStyle } from "./GlobalStyles";
import { Modal, Navbar } from "./components/index";
import CategoryCard from "./components/CategoryCard";
import styled from "styled-components";

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Modal />
			<Main>
				<CategoryCard />
			</Main>
		</>
	);
}

export default App;
