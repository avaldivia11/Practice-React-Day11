import React from "react";
import ReactDOM from "react-dom";

const buttonStyles = {
	background: "yellow",
	color: "black",
	border: "none",
};

const badgeStyles = {
	background: "red",
	color: "white",
};
export const Clock = () =>{
    return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
}

/**
 * first, import the clock component that is being exported as default on the Clock.js file
 * (the same way you did on exercise 03
 *
 * second, update the <Clock /> tag to pass the currentDate property to it, with todays current date as a value.
 */

//fake html tag           //where
ReactDOM.render(<Clock />, document.querySelector("#myDiv"));
