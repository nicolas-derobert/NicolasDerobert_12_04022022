import PropTypes from "prop-types"
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
* Type of figure
*/
  category: PropTypes.any,
  //   /**
// * css class to apply
// */
  cssClass: PropTypes.any,//   /**
// * Value for the figure
// */
  number: PropTypes.any,//   /**
// * Logo in svg format
// */
  svg: PropTypes.any,//   /**
// * Unit of Figure
// */
  unit: PropTypes.any
}



export default SingeValueIndicatorArea;

