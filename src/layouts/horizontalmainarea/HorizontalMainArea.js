import React from "react";
import "./HorizontalMainArea.css";


import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Label,
	LabelList,
	ResponsiveContainer,
} from "recharts";



const data = [
  {
    name: "1",
    Poids: 80,
    Calories: 250,
  },
  {
    name: "2",
    Poids: 80,
    Calories: 250,
  },
  {
    name: "3",
    Poids: 80,
    Calories: 250,
  },
  {
    name: "4",
    Poids: 80,
    Calories: 250,
  },
  {
    name: "5",
    Poids: 80,
    Calories: 250,
  },
  {
    name: "6",
    Poids: 80,
    Calories: 250,
  },
  {
    name: "7",
    Poids: 80,
    Calories: 250,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
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

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul>
      <li id="poids">{payload[0].value}</li>
      <li id="calorie">{payload[1].value}</li>
    </ul>
  );
};

// const { position, ...parseActivity } = props.activity;

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
						dataKey="name"
						style={{
							fill: "#9B9EAC",
						}}
					></XAxis>
					<Tooltip content={<CustomTooltip />} />{" "}
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

export default HorizontalMainArea;
