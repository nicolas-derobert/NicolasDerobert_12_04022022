import React from "react";
import "./HorizontalSecondaryArea.css";
import SquareChartArea from "../../components/squarechartarea/SquareChartArea";
import PropTypes from "prop-types";
import "../../components/squarechartarea/SquareChartArea.css";
import {
	LineChart,
	Line,
	XAxis,
	Tooltip,
	ResponsiveContainer,
	PolarAngleAxis,
	PolarGrid,
	PieChart,
	Pie,
	Radar,
	Cell,
	RadarChart,
} from "recharts";
/**
 * Function to customize Recharts Tooltip
 * @category Recharts customization
 * @function CustomTooltipLine
 * @param {Object} Obj Object that contain parameters that customize Tooltip
 * @param {boolean} Obj.active If set true, the tooltip is displayed
 * @param {Object} Obj.payload The source data of the content to be displayed in the tooltip
 * @returns {string}
 */
const CustomTooltipLine = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="customtooltip">
				<p className="label">{` ${payload[0].value} min`}</p>
			</div>
		);
	}

	return null;
};

/**
 * Component for showing all graphs displayed in the second horizontal bar
 *
 * @component
 */
function HorizontalSecondaryArea(props) {
	const COLORS = ["#FF0101", "#FBFBFB", "#FFBB28", "#FF8042"];
	return (
		<div className="horizontalsecondaryarea">
			<SquareChartArea>
				<div className="squarechartarea line">
					<h3>Durée moyenne des sessions</h3>
					<ResponsiveContainer height="80%" width="100%">
						<LineChart
							data={props.sessions}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<XAxis
								dataKey="day"
								axisLine={false}
								tickLine={false}
								stroke="#ffffff"
							/>
							<Tooltip content={<CustomTooltipLine />} />
							<Line
								type="monotone"
								dataKey="sessionLength"
								stroke="#ffffff"
								strokeWidth={1}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</SquareChartArea>
			<SquareChartArea>
				<div className="squarechartarea radar">
					<ResponsiveContainer width="95%" height="95%">
						<RadarChart
							cx="50%"
							cy="50%"
							outerRadius="80%"
							data={props.performance}
						>
							<PolarGrid radialLines={false} />
							<PolarAngleAxis dataKey="type" tick={{ fill: "#FFFFFF" }} />
							<Radar
								name=""
								dataKey="value"
								stroke="#FF0101"
								fill="#FF0101"
								fillOpacity={0.6}
							/>
						</RadarChart>
					</ResponsiveContainer>
				</div>
			</SquareChartArea>
			<SquareChartArea>
				<div className="squarechartarea pie">
					<div className="whitecircle">
						<p className="value">{props.scorevalue}</p>
						<p> de votre objectif</p>
					</div>
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={props.score}
								cx="50%"
								cy="50%"
								innerRadius={70}
								outerRadius={80}
								cornerRadius={40}
								paddingAngle={5}
								dataKey="value"
							>
								{props.score.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
										strokeWidth="0"
									/>
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
			</SquareChartArea>
		</div>
	);
}

HorizontalSecondaryArea.propTypes = {
	/**
	 * Performance figures
	 */
	performance: PropTypes.arrayOf(
		PropTypes.shape({
			/**
			 * Number related to the Kind of measurement (prop)
			 */
			kind: PropTypes.number,
			/**
			 * Name of measurement (prop)
			 */
			type: PropTypes.string,
			/**
			 * Measurement  (prop)
			 * */
			value: PropTypes.number,
		})
	).isRequired,
	/**
	 * Array with two values.  (prop) The first value is initial value of score. The second value is the result of subtraction of the to the number of 100
	 */
	score: PropTypes.arrayOf(PropTypes.number),
	/**
	 * First value is initial value of score  (prop)
	 */
	scorevalue: PropTypes.string.isRequired,
	/** 
	 * Average duration of sessions (prop)
	 */
	sessions: PropTypes.arrayOf(
		PropTypes.shape({
			/**
			 * Session duration  (prop)
			 * */
			sessionLength: PropTypes.number,
			/**
			 * Letter corresponding to the related day  (prop)
			 */
			day: PropTypes.string,
		})
	).isRequired,
};

export default HorizontalSecondaryArea;
