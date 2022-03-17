import PropTypes from "prop-types";
import React from "react";
import "./NavButton.css";


/**
 * Some documented component
 *
 * @component	
 */

function NavButton(props) {
	return (
		<div className="navbutton">
			<img src={props.svg} alt="Logo" />
			
		</div>
	);
}

NavButton.propTypes = {
  svg: PropTypes.any
}



export default NavButton;
