import PropTypes from "prop-types";
import React from "react";
import "./HorizontalMainArea.css";
import {
	BarChart,
	Bar,
	XAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

/**
 * Function to customize Recharts Tooltip
 * @category Recharts customization
 * @function CustomTooltip
 * @param {Object} Obj Object that contain parameters that customize Tooltip
 * @param {boolean} Obj.active If set true, the tooltip is displayed
 * @param {Object} Obj.payload The source data of the content to be displayed in the tooltip
 * @returns {string}
 */
const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p className="label">{` ${payload[0].value}Kg`}</p>
				<p className="label">{` ${payload[1].value}KCal`}</p>
			</div>
		);
	}

	return null;
};
/**
 * Function to customize Recharts legend
 * @category Recharts customization
 * @function renderLegend
 * @param {Object} Obj Object that contain parameters that customize legend
 * @param {Object} Obj.payload The source data of the content to be displayed in the legend
 * @returns {string}
 */
const renderLegend = (content) => {
	const { payload } = content;
	return (
		<ul>
			<li id="poids">{payload[0].value}</li>
			<li id="calorie">{payload[1].value}</li>
		</ul>
	);
};
/**
 * Component to display main graph of page
 *
 * @component
 */
function HorizontalMainArea(props) {
	return (
		<div className="horizontalmainarea">
			<h3>Activité quotidienne</h3>
			<ResponsiveContainer height="90%" width="100%">
				<BarChart
					data={props.activity}
					margin={{
						top: 0,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					barSize={7}
					fill="#FF0101"
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="dayNumber"
						style={{
							fill: "#9B9EAC",
						}}
					></XAxis>
					<Tooltip content={<CustomTooltip />} />
					<Legend
						verticalAlign="top"
						align="right"
						height={36}
						iconType="circle"
						iconSize={8}
						content={renderLegend}
					/>
					<Bar
						name="Poids (Kg)"
						dataKey="kilogram"
						fill="#000000"
						minPointSize={5}
						radius={[3, 3, 0, 0]}
					></Bar>
					<Bar
						name="Calories brûlées (KCal)"
						dataKey="calories"
						fill="#FF0101"
						minPointSize={10}
						radius={[3, 3, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

HorizontalMainArea.propTypes = {
	/**
	 * Array of all required values used to create graph
	 */
	activity: PropTypes.arrayOf(
		/**
		 * Object
		 */
		PropTypes.shape({
			/**
			 * Day linked to value (prop)
			 */
			day: PropTypes.string.isRequired,
			/**
			 * Weight in kilogram  (prop)
			 */
			kilogram: PropTypes.number.isRequired,
			/**
			 * Burnt calory (prop)
			 */
			calories: PropTypes.number.isRequired,
			/**
			 * Number related to the day (prop)
			 */
			dayNumber: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default HorizontalMainArea;
