import React, { Component } from "react";
import HorizontalNavBar from "../../components/horizontalnavbar/HorizontalNavBar";
import Logo from "../../assets/images/logo.svg";
import "./Header.css";


export class Header extends Component {
	render() {
		return (
			<header className="header">
				
				<div className="header-logo">
					
					<img src={Logo} alt="Logo" />
				</div>
				<HorizontalNavBar></HorizontalNavBar>
			</header>
		);
	}
}

export default Header;
