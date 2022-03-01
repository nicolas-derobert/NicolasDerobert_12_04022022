import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Accueil from "./views/accueil/Accueil";
// import APropos from "./views/apropos/APropos";
// import FicheLogement from "./views/fichelogement/FicheLogement";
import ErroPage from "./views/erropage/ErroPage.js";

function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Navigate replace to="/Accueil" />} />
			<Route path="/Accueil" element={<Accueil />} />
			{/* <Route path="/APropos" element={<APropos />} />
			<Route
				path="/fichelogement/:FicheLogementId"
				element={<FicheLogement />}
			/> */}
			<Route path="*" element={<ErroPage />} />
		</Routes>
	);
}
export default AllRoutes;
