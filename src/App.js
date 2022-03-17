import * as React from "react";
import "./App.css";
import GlobalLayout from "./layouts/globallayout/GlobalLayout";
import HorizontalMainArea from "./layouts/horizontalmainarea/HorizontalMainArea";
import HorizontalSecondaryArea from "./layouts/horizontalsecondaryarea/HorizontalSecondaryArea";
import VerticalArea from "./layouts/verticalarrea/VerticalArea";
import { useState, useEffect, useCallback } from "react";
import { useApi } from "./hooks/use-api";
import "./App.css";

function App() {
	/**
	 * @type {number}
	 * @const
	 */
	const userId = 18;
	const slash = "/";
	const url = "http://localhost:3000/user/";
	const activityParameter = "activity";
	const averageSessionsParameter = "average-sessions";
	const performanceParameter = "performance";
	const actualUrlUserInfo = url + userId;
	const mockedUrlUserInfo = "datauser.json";
	const actualUrlUserActivity = url + userId + slash + activityParameter;
	const mockedUrlUserActivity = "datauseractivity.json";
	const actualUrlUserSession = url + userId + slash + averageSessionsParameter;
	const mockedUrlUserSession = "datauseraveragesessions.json";
	const actualUrlUserPerformance = url + userId + slash + performanceParameter;
	const mockedUrlUserPerformance = "datauserperformance.json";

	let urlUserInfo = actualUrlUserInfo;
	let urlUserActivity = actualUrlUserActivity;
	let urlUserSession = actualUrlUserSession;
	let urlUserPerformance = actualUrlUserPerformance;

	/**
	 *
	 * @type {number}
	 * @const
	 */
	//  ${slash}
	const {
		response: userResponse,
		loading: userLoading,
		error: userError,
	} = useApi({ method: "get", url: `${urlUserInfo}` });
	console.log(userResponse);
	const {
		response: activityResponse,
		loading: activityLoading,
		error: activityError,
	} = useApi({ method: "get", url: ` ${urlUserActivity}` });
	const {
		response: averageSessionsResponse,
		loading: averageSessionsLoading,
		error: averageSessionsError,
	} = useApi({
		method: "get",
		url: ` ${urlUserSession}`,
	});
	const {
		response: performanceResponse,
		loading: performanceLoading,
		error: performanceError,
	} = useApi({ method: "get", url: ` ${urlUserPerformance}` });
	// const [data, setData] = useState([]);
	const [userData, setUserData] = useState([]);
	const [activityData, setActivityData] = useState([]);
	const [averageSessionsData, setSessionsData] = useState([]);
	const [performanceData, setPerformanceData] = useState([]);
	const [userDataScore, setUserDataScore] = useState("");
	const [userDataScoreValue, setUserDataScoreValue] = useState("");

	useEffect(() => {
		if (userResponse !== null) {
			let userScoreResponseValue =
				(userResponse.data.score * 100).toString() + "%";
			let userScoreResponse = [
				{ value: userResponse.data.score * 100 },
				{ value: 100 - userResponse.data.score * 100 },
			];
			console.log(userScoreResponse);
			setUserData(userResponse);
			setUserDataScoreValue(userScoreResponseValue);
			setUserDataScore(userScoreResponse);
		}
		if (activityResponse !== null) {
			let activityResponseFormated = activityResponse.data.sessions;
			for (let i = 0; i < activityResponseFormated.length; i++) {
				activityResponseFormated[i].name = i + 1;
			}
			setActivityData(activityResponseFormated);
		}
		if (averageSessionsResponse !== null) {
			const letterDay = ["L", "M", "M", "J", "V", "S", "D"];
			let averageSessionsResponseFormated =
				averageSessionsResponse.data.sessions;
			for (let i = 0; i < averageSessionsResponse.data.sessions.length; i++) {
				averageSessionsResponseFormated[i].day = letterDay[i];
			}
			setSessionsData(averageSessionsResponseFormated);
		}
		if (performanceResponse !== null) {
			const type = [
				"Intensité",
				"Vitesse",
				"Force",
				"Endurance",
				"Energie",
				"Cardio",
			];
			let performanceResponseFormated = performanceResponse.data.data;
			for (var i = 0; i < performanceResponse.data.data.length; i++) {
				performanceResponseFormated[i].type = type[i];
			}
			setPerformanceData(performanceResponseFormated);
		}
	}, [
		userResponse,
		activityResponse,
		averageSessionsResponse,
		performanceResponse,
	]);

	return (
		<div className="App">
			<GlobalLayout>
				{!userLoading && (
					<>
						<h1 className="titlearea">
							{"Bonjour "}
							<span className="firstname">
								{userData.data.userInfos.firstName}
							</span>
						</h1>
						<p className="congratsarea">
							Félicitation ! Vous avez explosé vos objectifs hier 👏
						</p>
						{!activityLoading && <HorizontalMainArea activity={activityData} />}

						{!userLoading & !averageSessionsLoading ? (
							<HorizontalSecondaryArea
								score={userDataScore}
								scorevalue={userDataScoreValue}
								sessions={averageSessionsData}
								performance={performanceData}
							/>
						) : null}
						{!userLoading && (
							<VerticalArea keydata={userData.data.keyData}></VerticalArea>
						)}
					</>
				)}
				{userLoading && <div>Chargement</div>}
			</GlobalLayout>
		</div>
	);
}

export default App;
