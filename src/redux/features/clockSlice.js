import {
	createSlice
} from "@reduxjs/toolkit";

const initialState = {
	break: 5,
	session: 25,
	timer: 1 * 60,
	currentState: "paused",
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
		reset: () => initialState,
		toggleStartStop: (state) => {
			state.currentState === "paused" ? state.currentState = "running" : state.currentState = "paused";
		},
		tick: (state) => {
			if (state.currentState === "running") {
				state.timer > 0 ? state.timer-- : false;
			}
		}
	},
});

export const { 
	setBreak, 
	setSession,
	reset,
	toggleStartStop,
	tick,
} = clockSlice.actions;
export default clockSlice.reducer;
