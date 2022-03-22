import PropTypes from "prop-types"
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
 * Component to display main graph of page
 *
 * @component
 */
const CustomTooltip = ({ active, payload, label }) => {
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

const renderLegend = (content) => {
  const { payload } = content;
  return (
    <ul>
      <li id="poids">{payload[0].value}</li>
      <li id="calorie">{payload[1].value}</li>
    </ul>
  );
};
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
  activity: PropTypes.arrayOf(PropTypes.shape({
    /**
	 * Day linked to value
	 */
	day: PropTypes.string,
	/**
	 * Weight in kilogram
	 */
    kilogram: PropTypes.number,
	/**Calories brûlées */
	calories: PropTypes.number,
/**
 * Number related to the day
 */
	dayNumber: PropTypes.number
  })),
}

export default HorizontalMainArea;
