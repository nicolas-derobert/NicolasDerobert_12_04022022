import PropTypes from "prop-types";
import React from "react";
import "./SingeValueIndicatorArea.css";

/**
 * Component for showing navigation buttons
 *
 * @component
 */

function SingeValueIndicatorArea(props) {
	return (
		<div className="singlevalueindicatorarea">
			<div className={`iconarea ${props.cssClass}`}>
				<img src={props.svg} alt="Logo" />
			</div>
			<div className="dataarea">
				<p className="value">
					<span className="number">{props.number}</span>

					<span className="unit">{props.unit}</span>
				</p>
				<p className="category">{props.category}</p>
			</div>
		</div>
	);
}

SingeValueIndicatorArea.propTypes = {
	/**
	 * Type of figure (prop)
	 */
	category: PropTypes.any.isRequired,
	/**
	 * css class to apply (prop)
	 */
	cssClass: PropTypes.any.isRequired,
	/**
	 * Value for the figure (prop)
	 */
	number: PropTypes.any.isRequired,
	/**
	 * Logo in svg format (prop)
	 */
	svg: PropTypes.any.isRequired,
	/**
	 * Unit of Figure (prop)
	 */
	unit: PropTypes.any.isRequired,
};

export default SingeValueIndicatorArea;
