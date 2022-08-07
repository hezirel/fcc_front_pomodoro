import {
	createSlice
} from "@reduxjs/toolkit";

const initialState = {
	break: 5,
	session: 25,
	timer: null
};

const clockSlice = createSlice({
	name: "clock",
	initialState,
	reducers: {
		setBreak: (state, action) => {
			state.break = action.payload;
		},
		setSession: (state, action) => {
			state.session = action.payload;
		}
	},
});

export const { setBreak, setSession } = clockSlice.actions;
export default clockSlice.reducer;
