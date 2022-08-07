import {
	React,
} from "react";

import {
	useDispatch,
	useSelector
} from "react-redux";

import {
	setBreak,
} from "../../../redux/features/clockSlice";

import "./Clock.css";


function Clock() {

	const dispatch = useDispatch();
	const breakLength = useSelector(state => state.clock.break);
	const sessionLength = useSelector(state => state.clock.session);
	const handleBreak = (e) => {
		dispatch(setBreak(e.target.innerText === "-" ? breakLength - 1 : breakLength + 1));
	};

	return (
		<div id="app">
			<div id="break">
				<div id="break-length">{breakLength}</div>
				<div id="break-label">Break Length</div>
				<button id="break-decrement" onClick={handleBreak}>-</button>
				<button id="break-increment" onClick={handleBreak}>+</button>
			</div>
			<div id="session">
				<div id="session-length">{sessionLength}</div>
				<div id="session-label">Session Length</div>
				<button id="session-decrement">-</button>
				<button id="session-increment">+</button>
			</div>
			<div id="timer">
				<div id="timer-label">Timer Length</div>
				<div id="timer-left">mm:ss</div>
			</div>
			<div id="controls">
				<button id="start_stop">Start timer</button>
				<button id="reset">Reset</button>
			</div>
		</div>
	);
}

export default Clock;