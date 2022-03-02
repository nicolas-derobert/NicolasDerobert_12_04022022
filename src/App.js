import * as React from "react";
import "./App.css";
import GlobalLayout from "./layouts/globallayout/GlobalLayout";
import AllRoutes from "./AllRoutes";
import HorizontalMainArea from "./layouts/horizontalmainarea/HorizontalMainArea";
import HorizontalSecondaryArea from "./layouts/horizontalsecondaryarea/HorizontalSecondaryArea";
import VerticalArea from "./layouts/verticalarrea/VerticalArea";

import "./App.css";
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
function App() {
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

	// const renderCustomizedLabel = (props) => {
	// 	const { x, y, width, height, value } = props;
	// 	const radius = 10;

	// 	return (
	// 		<g>
	// 			<circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
	// 			<text
	// 				x={x + width / 2}
	// 				y={y - radius}
	// 				fill="#fff"
	// 				textAnchor="middle"
	// 				dominantBaseline="middle"
	// 			>
	// 				{value.split(" ")[1]}
	// 			</text>
	// 		</g>
	// 	);
	// };
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
	const renderLabel = (props) => {
		const { payload } = props;

		return (
			<ul>
				<li id="poids">{payload[0].value}</li>
				<li id="calorie">{payload[1].value}</li>
			</ul>
		);
	};

	return (
		<div className="App">
			<GlobalLayout>
				<h1 className="titlearea">Bonjour Thomas</h1>
				<p className="congratsarea">
					Félicitation ! Vous avez explosé vos objectifs hier 👏
				</p>
				<HorizontalMainArea>
					<h3>Activité quotidienne</h3>
					<ResponsiveContainer>
						<BarChart
							data={data}
							margin={{
								top: 5,
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
								dataKey="Poids"
								fill="#000000"
								minPointSize={5}
								radius={[3, 3, 0, 0]}
							></Bar>
							<Bar
								name="Calories brûlées (KCal)"
								dataKey="Calories"
								fill="#FF0101"
								minPointSize={10}
								radius={[3, 3, 0, 0]}
							/>
						</BarChart>
					</ResponsiveContainer>
				</HorizontalMainArea>
				<HorizontalSecondaryArea></HorizontalSecondaryArea>
				<VerticalArea></VerticalArea>
			</GlobalLayout>
		</div>
	);
}

export default App;
