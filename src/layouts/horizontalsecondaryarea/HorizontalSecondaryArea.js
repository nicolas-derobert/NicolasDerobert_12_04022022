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
	PolarRadiusAxis,
	PolarAngleAxis,
	PolarGrid,
	PieChart,
	Pie,
	Radar,
	Cell,
	RadarChart,
} from "recharts";

/**
 * Component for showing all graphs displayed in the second horizontal bar
 *
 * @component
 */
function HorizontalSecondaryArea(props) {
	const COLORS = ["#FF0101", "#FBFBFB", "#FFBB28", "#FF8042"];
	console.log(props);
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
							{/* <CartesianGrid strokeDasharray="3 3" /> */}
							<XAxis
								dataKey="day"
								axisLine={false}
								tickLine={false}
								stroke="#ffffff"
							/>
							{/* <YAxis /> */}
							<Tooltip />
							{/* <Legend /> */}
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
					<ResponsiveContainer width="100%" height="100%">
						<RadarChart
							cx="50%"
							cy="50%"
							outerRadius="80%"
							data={props.performance}
						>
							<PolarGrid />
							<PolarAngleAxis dataKey="type" tick={{ fill: "#FFFFFF" }} />
							<PolarRadiusAxis angle={30} domain={[0, 150]} />
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
						<p>{props.scorevalue} de votre objectif</p>
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
										// style={{borderRadius:"50%"}}
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
			 * Number related to the Kind of measurement
			 */
			kind: PropTypes.number,
			/**
			 * Name of measurement
			 */
			type: PropTypes.string,
			/**Measurement */
			value: PropTypes.number,
		})
	),
	/**
	 * Array with two values. The first value is initial value of score. The second value is the result of subtraction of the to the number of 100
	 */
	// score: PropTypes.arrayOf(PropTypes.number),
	/**
	 * First value is initial value of score
	 */
	scorevalue: PropTypes.string,
	/**
	 * Average duration of sessions
	 */
	sessions: PropTypes.arrayOf(
		PropTypes.shape({
			/**Session duration*/
			sessionLength: PropTypes.number,
			/**
			 * Letter corresponding to the related day
			 */
			day: PropTypes.string,
		})
	),
};

export default HorizontalSecondaryArea;
