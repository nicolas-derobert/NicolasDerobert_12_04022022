import * as React from "react";
import "./App.css";
import GlobalLayout from "./layouts/globallayout/GlobalLayout";
import AllRoutes from "./AllRoutes";
import HorizontalMainArea from "./layouts/horizontalmainarea/HorizontalMainArea";
import HorizontalSecondaryArea from "./layouts/horizontalsecondaryarea/HorizontalSecondaryArea";
import VerticalArea from "./layouts/verticalarrea/VerticalArea";
import { useState, useEffect, useCallback } from "react";
import { useApi } from "./hooks/use-api";
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
	const userId = 18;
	const url = "http://localhost:3000/user/";
	// const parameters = ['','activity','average-sessions','performance']
	const activityParameter = "/activity";
	const averageSessionsParameter = "/average-sessions";
	const performanceParameter = "/performance";

	const {
		response: userResponse,
		loading: userLoading,
		error: userError,
	} = useApi({ method: "get", url: ` ${url}${userId}` });
	const {
		response: activityResponse,
		loading: activityLoading,
		error: activityError,
	} = useApi({ method: "get", url: ` ${url}${userId}${activityParameter}` });
	const {
		response: averageSessionsResponse,
		loading: averageSessionsLoading,
		error: averageSessionsError,
	} = useApi({
		method: "get",
		url: ` ${url}${userId}${averageSessionsParameter}`,
	});
	const {
		response: performanceResponse,
		loading: performanceLoading,
		error: performanceError,
	} = useApi({ method: "get", url: ` ${url}${userId}${performanceParameter}` });
	// const [data, setData] = useState([]);
	const [userData, setUserData] = useState([]);
	const [activityData, setActivityData] = useState([]);
	const [averageSessionsData, setSessionsData] = useState([]);
	const [performanceData, setPerformanceData] = useState([]);

	useEffect(() => {
		if (userResponse !== null) {
			setUserData(userResponse);
		}
		if (activityResponse !== null) {
			setActivityData(activityResponse);
		}
		if (averageSessionsResponse !== null) {
			setSessionsData(averageSessionsResponse);
		}
		if (performanceResponse !== null) {
			setPerformanceData(performanceResponse);
		}
	}, [
		userResponse,
		activityResponse,
		averageSessionsResponse,
		performanceResponse,
	]);

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

	return (
		<div className="App">
			<GlobalLayout>
				{!userLoading && (
					<>
						<h1 className="titlearea">Bonjour Thomas</h1>
						<p className="congratsarea">
							{console.log(userData)}
							{console.log(averageSessionsData)}
							{console.log(activityData)}
							{console.log(performanceData)}
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
						<VerticalArea keydata={userData.data.keyData}></VerticalArea>
					</>
				)}
				{userLoading && <div>Chargement</div>}
			</GlobalLayout>
		</div>
	);
}

export default App;
