import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Mulish', sans-serif;
  margin: 0;
	padding: 0;
  background-color: #f6fefc;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
*{
  box-sizing: border-box;
	margin: 0;
	padding: 0;
}
`;
