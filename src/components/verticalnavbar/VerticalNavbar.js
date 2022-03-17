import React from "react";
import { NavLink } from "react-router-dom";
import NavButton from "../navbutton/NavButton";
import "./VerticalNavbar.css";
import meditation from "../../assets/images/meditation.svg";
import swimming from "../../assets/images/swimming.svg";
import cycling from "../../assets/images/cycling.svg";
import bodybuilding from "../../assets/images/bodybuilding.svg";

function VerticalNavbar() {
	return (
		<section className="verticalnavbar">
			<NavButton svg={meditation} />
			<NavButton svg={swimming} />
			<NavButton svg={cycling} />
			<NavButton svg={bodybuilding} />
		</section>
	);
}

export default VerticalNavbar;
