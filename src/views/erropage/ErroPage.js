import React from "react";
import { Link } from "react-router-dom";
import "./ErroPage.css";

function ErroPage() {
	return (
		<section className="errorpage">
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/Accueil">Retourner sur la page d’accueil</Link>
		</section>
	);
}

export default ErroPage;
