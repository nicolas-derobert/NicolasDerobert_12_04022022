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

function HorizontalSecondaryArea() {
	const datadureesession = [
		{
			name: "L",
			duree: 10,
		},
		{
			name: "M",
			duree: 5,
		},
		{
			name: "M",
			duree: 68,
		},
		{
			name: "J",
			duree: 18,
		},
		{
			name: "V",
			duree: 68,
		},
		{
			name: "S",
			duree: 68,
		},
		{
			name: "D",
			duree: 68,
		},
	];
	const dataradar = [
		{
			subject: "Intensité",
			A: 120,
			fullMark: 150,
		},
		{
			subject: "Vitesse",
			A: 98,
			fullMark: 150,
		},
		{
			subject: "Force",
			A: 86,
			fullMark: 150,
		},
		{
			subject: "Endurance",
			A: 99,
			fullMark: 150,
		},
		{
			subject: "Energie",
			A: 85,
			fullMark: 150,
		},
		{
			subject: "Cardio",
			A: 65,
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
		{ name: "Group A", value: 15 },
		{ name: "Group B", value: 85 },
	];
	const COLORS = ["#FF0101", "#FBFBFB", "#FFBB28", "#FF8042"];

	return (
		<div className="horizontalsecondaryarea">
			<SquareChartArea>
				<div className="squarechartarea line">
					<h3>Durée moyenne des sessions</h3>					
					<ResponsiveContainer height={180} width="100%">
						<LineChart
							data={datadureesession}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							{/* <CartesianGrid strokeDasharray="3 3" /> */}
							<XAxis
								dataKey="name"
								axisLine={false}
								tickLine={false}
								stroke="#ffffff"
							/>
							{/* <YAxis /> */}
							<Tooltip />
							{/* <Legend /> */}
							<Line
								type="monotone"
								dataKey="duree"
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
						<RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataradar}>
							<PolarGrid />
							<PolarAngleAxis
								dataKey="subject"
								tick={{ fill: "#FFFFFF" }}
								// style={{
								// 		fill: "#FF0101",								}}
							/>
							<PolarRadiusAxis angle={30} domain={[0, 150]} />
							<Radar
								name="Mike"
								dataKey="A"
								stroke="#FF0101"
								fill="#FF0101"
								fillOpacity={0.6}
							/>
						</RadarChart>
					</ResponsiveContainer>
				</div>
			</SquareChartArea>
			{/* <SquareChartArea>
				<div className="squarechartarea pie">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart width={400} height={400} onMouseEnter={this.onPieEnter}>
							<Pie
								data={data}
								cx={120}
								cy={200}
								innerRadius={60}
								outerRadius={80}
								fill="#8884d8"
								paddingAngle={5}
								dataKey="value"
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Pie
								data={data}
								cx={420}
								cy={200}
								startAngle={180}
								endAngle={0}
								innerRadius={60}
								outerRadius={80}
								fill="#8884d8"
								paddingAngle={5}
								dataKey="value"
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer> 
				</div>
			</SquareChartArea>*/}
			<SquareChartArea>
				<div className="squarechartarea pie">
					<div className="white-circle"></div>
					<ResponsiveContainer width="100%" height="100%">
						<PieChart width={400} height={400}>
							<Pie
								data={data}
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
			{/* <SquareChartArea>
				<div className="squarechartarea pie"></div>
			</SquareChartArea> */}
		</div>
	);
}

export default HorizontalSecondaryArea;
