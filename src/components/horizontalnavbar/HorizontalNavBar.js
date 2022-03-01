import * as React from "react";
// import { NavLink } from "react-router-dom";
import  "./HorizontalNavBar.css";

function HorizontalNavBar() {
	return (
		<section  className="horizontalnavbar">
			<ul>
				<li>
					{/* <NavLink
						to="/#"
						className={({isActive}) => isActive ? "active" : ""}
					> */}
						Accueil
					{/* </NavLink> */}
				</li>
				<li>
					{/* {/* <NavLink */}
						{/* to="/APropos"
						className={({isActive}) => isActive ? "active" : ""}
					> */}
						Profil
					{/* </NavLink> */} 
				</li>
                <li>
					{/* <NavLink
						to="/Reglage"
						className={({isActive}) => isActive ? "active" : ""}
					> */}
						Réglage
					{/* </NavLink> */}
				</li>
                <li>
					{/* <NavLink
						to="/Communaute"
						className={({isActive}) => isActive ? "active" : ""}
					> */}
						Communauté
					{/* </NavLink> */}
				</li>
			</ul>
		</section>
	);
}

export default HorizontalNavBar;
