import { 
	combineReducers
} from "@reduxjs/toolkit";

import clock from "../features/clockSlice";

const rootReducer = combineReducers({
	clock,
});


export default rootReducer;
