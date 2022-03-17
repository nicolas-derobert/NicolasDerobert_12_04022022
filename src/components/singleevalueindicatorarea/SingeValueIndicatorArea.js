import PropTypes from "prop-types"
import React from "react";
import "./SingeValueIndicatorArea.css";

/**
 * 
 * @param {Object} props 
 * @returns 
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
  category: PropTypes.string,
  cssClass: PropTypes.string,
  number: PropTypes.number,
  svg: PropTypes.string,
  unit: PropTypes.string
}

export default SingeValueIndicatorArea;
