import React from "react";
import './SquareChartArea.css'
import PropTypes from "prop-types";

/**
 * Component to manage Layout of the square indicators
 *
 * @component
 */
function SquareChartArea(props) {
	return <>
	{props.children
	}
	</>;
}
SquareChartArea.propTypes = {
	/**
	 * Html node to display as a child
	 */
	children: PropTypes.node.isRequired,
  }

export default SquareChartArea;
