import {
	createSlice
} from "@reduxjs/toolkit";

const initialState = {
	break: 5,
	session: 25,
	timer: 25*60,
	currentState: "paused",
	mode: "session"
};

const lengthCheck = x => x >= 1 && x <= 60;

const clockSlice = createSlice({
	name: "clock",
	initialState,
	reducers: {
		setBreak: (state, { payload }) => {
			if (lengthCheck(payload) && state.currentState === "paused") {
				state.break = payload;
			}
		},
		setSession: (state, {payload}) => {
			if (lengthCheck(payload) && state.currentState === "paused") {
				state.session = payload;
				state.timer = payload * 60;
			}
		},
		reset: () => {
			const p = document.querySelector("#beep");
			p.pause();
			p.currentTime = 0;
			return initialState;
		},
		toggleStartStop: (state) => {
			state.currentState === "paused" ? state.currentState = "running" : state.currentState = "paused";
		},
		tick: (state) => {
			if (state.currentState === "running") {
				if (state.timer) {
					state.timer--;
					if (!state.timer) {
						const p = document.querySelector("#beep");
						p.play();
					}
				} else {
					state.timer = state.mode === "session" ? state.break * 60 : state.session * 60;
					state.mode = state.mode === "session" ? "break" : "session";
					state.currentState = "running";
				}
			}
		}
	}
});

export const { 
	setBreak, 
	setSession,
	reset,
	toggleStartStop,
	tick,
} = clockSlice.actions;
export default clockSlice.reducer;
