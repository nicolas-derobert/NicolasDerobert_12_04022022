import React from "react";
import "./HorizontalSecondaryArea.css";
import SquareChartArea from "../../components/squarechartarea/SquareChartArea";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
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
	return (
		<div className="horizontalsecondaryarea">
			<SquareChartArea>
				<ResponsiveContainer height={240} width="100%">
					<LineChart
						// width={500}
						// height={300}
						data={datadureesession}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						{/* <CartesianGrid strokeDasharray="3 3" /> */}
						<XAxis dataKey="name"  axisLine={false} tickLine={false} stroke="#ffffff" />
						{/* <YAxis /> */}
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="duree" stroke="#ffffff" strokeWidth={1} />
					</LineChart>
				</ResponsiveContainer>
			</SquareChartArea>
			<SquareChartArea></SquareChartArea>
			<SquareChartArea></SquareChartArea>
		</div>
	);
}

export default HorizontalSecondaryArea;
