import PropTypes from "prop-types";
import React from "react";
import "./NavButton.css";


/**
 * Component for showing navigation buttons
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
	/**
   * Path to the logo in svg format
   */
  svg: PropTypes.string
}



export default NavButton;
