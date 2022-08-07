import {
	React,
	useEffect
} from "react";

import {
	useDispatch,
	useSelector,
} from "react-redux";

import {
	setBreak,
	setSession,
	reset,
	toggleStartStop,
	tick
} from "../../../redux/features/clockSlice";

import "./Clock.css";


function Clock() {

	const dispatch = useDispatch();
	const breakLength = useSelector(state => state.clock.break);
	const sessionLength = useSelector(state => state.clock.session);
	const timer = useSelector(state => state.clock.timer);
	const running = useSelector(state => state.clock.currentState === "running");
	const handleBreak = (e) => {
		dispatch(setBreak(e.target.innerText === "-" ? breakLength - 1 : breakLength + 1));
	};
	const handleSession = (e) => {
		dispatch(setSession(e.target.innerText === "-" ? sessionLength - 1 : sessionLength + 1));
	};

	useEffect(() => {
		let ticker = null;
		if (running) {
			ticker = setInterval(() => {
				dispatch(tick());
			} , 1000);
		}
		clearInterval(ticker);
	} , [running]);


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
				<button id="session-decrement" onClick={handleSession}>-</button>
				<button id="session-increment" onClick={handleSession}>+</button>
			</div>
			<div id="timer">
				<div id="timer-label">Timer Length</div>
				<div id="time-left">{(Math.floor(timer / 60)) + ":" + ((timer % 60) < 10 ? "0" + (timer % 60) : (timer % 60))}</div>
			</div>
			<div id="controls">
				<button id="start_stop" onClick={() => dispatch(toggleStartStop())}>Start timer</button>
				<button id="reset" onClick={() => dispatch(reset())}>Reset</button>
			</div>
		</div>
	);
}

export default Clock;