import React from "react";
import "./HorizontalSecondaryArea.css";
import SquareChartArea from "../../components/squarechartarea/SquareChartArea";

import "../../components/squarechartarea/SquareChartArea.css";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
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

function HorizontalSecondaryArea(props) {
	const datadureesession = [
		{
			day: "L",
			duree: 10,
		},
		{
			day: "M",
			duree: 5,
		},
		{
			day: "M",
			duree: 68,
		},
		{
			day: "J",
			duree: 18,
		},
		{
			day: "V",
			duree: 68,
		},
		{
			day: "S",
			duree: 68,
		},
		{
			day: "D",
			duree: 68,
		},
	];
	const dataradar = [
		{
			type: "Intensité",
			value: 120,
			fullMark: 150,
		},
		{
			type: "Vitesse",
			value: 98,
			fullMark: 150,
		},
		{
			type: "Force",
			value: 86,
			fullMark: 150,
		},
		{
			type: "Endurance",
			value: 99,
			fullMark: 150,
		},
		{
			type: "Energie",
			value: 85,
			fullMark: 150,
		},
		{
			type: "Cardio",
			value: 65,
			fullMark: 150,
		},
	];
	const dataPie = [{ name: "Group A", value: 400 }];
	// const data01 = [
	// 	{ name: "Group A", value: 400 },
	// 	{ name: "Group B", value: 300 },
	// 	{ name: "Group C", value: 300 },
	// 	{ name: "Group D", value: 200 },
	// 	{ name: "Group E", value: 278 },
	// 	{ name: "Group F", value: 189 },
	// ];

	// const data02 = [
	// 	{ name: "Group A", value: 2400 },
	// 	{ name: "Group B", value: 4567 },
	// 	{ name: "Group C", value: 1398 },
	// 	{ name: "Group D", value: 9800 },
	// 	{ name: "Group E", value: 3908 },
	// 	{ name: "Group F", value: 4800 },
	// ];
	const data = [
		{  value: 15 },
		{  value: 85 },
	];
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
						<RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.performance}>
							<PolarGrid />
							<PolarAngleAxis
								dataKey="type"
								tick={{ fill: "#FFFFFF" }}
							/>
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
					<div className="whitecircle"><p>{props.scorevalue} de votre objectif</p></div>
					<ResponsiveContainer width="100%" height="100%">
						<PieChart >
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
								{data.map((entry, index) => (
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

export default HorizontalSecondaryArea;
