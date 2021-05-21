import React from "react";
import { Input } from "./styles";

function AddName(props: any) {
	console.log("data", props.data);

	return (
		<div>
			<Input type="text" />
		</div>
	);
}

export default AddName;
