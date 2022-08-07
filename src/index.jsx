import React from "react";

import { 
	Provider
} from "react-redux";

import {
	HashRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import {
	createRoot
} from "react-dom/client";

import { 
	store
} from "./redux/store/store";

import Clock from "./components/app/clock/Clock";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<Routes>
					<Route path="/" element={<Clock />} />
					<Route path="*" element={<Navigate replace to="/"/>} />
				</Routes>
			</Provider>
		</HashRouter>
	</React.StrictMode>
);