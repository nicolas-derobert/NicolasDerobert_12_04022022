import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ErroPage from "./views/erropage/ErroPage.js";

function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Navigate replace to="/Accueil" />} />
			<Route path="*" element={<ErroPage />} />
		</Routes>
	);
}
export default AllRoutes;
