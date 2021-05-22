import { IndividualInstruction, InstructionsWrap } from "./styles";

function InstructionsComponent() {
	return (
		<>
			<h2>Instructions to Read</h2>
			<InstructionsWrap>
				<IndividualInstruction>This quiz is of level: Easy. </IndividualInstruction>
				<IndividualInstruction>Each question is of 10 points.</IndividualInstruction>
				<IndividualInstruction>
					There are no negative points for wrong answers.
				</IndividualInstruction>
				<IndividualInstruction>
					Score 80% or above to proceed to the next level
				</IndividualInstruction>
			</InstructionsWrap>
		</>
	);
}

export default InstructionsComponent;
