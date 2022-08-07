import {
	React,
} from "react";

import "./Clock.css";

function Clock() {

	return (
	<div id="app">
		<div id="break">
			<div id="break-length">5</div>
			<div id="break-label">Break Length</div>
			<button id="break-decrement">-</button>
			<button id="break-increment">+</button>
		</div>
		<div id="session">
			<div id="session-length">25</div>
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
	)
}

export default Clock;