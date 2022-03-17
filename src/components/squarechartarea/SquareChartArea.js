import React from "react";
import './SquareChartArea.css'
import PropTypes from "prop-types";

function SquareChartArea(props) {
	return <>
	{props.children
	}
	</>;
}
SquareChartArea.propTypes = {
	children: PropTypes.any
  }

export default SquareChartArea;
