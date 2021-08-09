import styled from "styled-components";
import { devices } from "../../devices";

export const InstructionsWrap = styled.div`
	text-align: center;
	margin: 1rem 0;
	@media ${devices.mobileL} {
		padding: 0 1rem;
	}
`;

export const IndividualInstruction = styled.p`
	letter-spacing: 0.8px;
	margin: 0.5rem 0;
`;
