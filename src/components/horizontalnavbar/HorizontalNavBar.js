import * as React from "react";
import  "./HorizontalNavBar.css";

function HorizontalNavBar() {
	return (
		<section  className="horizontalnavbar">
			<ul>
				<li>
						Accueil
				</li>
				<li>
						Profil
				</li>
                <li>
						Réglage
				</li>
                <li>
						Communauté
				</li>
			</ul>
		</section>
	);
}

export default HorizontalNavBar;
