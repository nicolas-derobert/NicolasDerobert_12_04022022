import * as React from "react";
import "./App.css";
import GlobalLayout from "./layouts/globallayout/GlobalLayout";
import HorizontalMainArea from "./layouts/horizontalmainarea/HorizontalMainArea";
import HorizontalSecondaryArea from "./layouts/horizontalsecondaryarea/HorizontalSecondaryArea";
import VerticalArea from "./layouts/verticalarrea/VerticalArea";
import { useState, useEffect } from "react";
import { useApi } from "./hooks/use-api";
import "./App.css";
/**
 * Component for showing navigation buttons
 *
 * @component
 */
function App() {
	/**
	 * @type {number}
	 * @const
	 */
	const userId = 18;
	/**
	 * @type {string}
	 * @const
	 */
	const slash = "/";
	/**
	 * @type {string}
	 * @const
	 */
	const url = "http://localhost:3000/user/";
	/**
	 * @type {string}
	 * @const
	 */
	const activityParameter = "activity";
	/**
	 * @type {string}
	 * @const
	 */
	const averageSessionsParameter = "average-sessions";
	/**
	 * @type {string}
	 * @const
	 */
	const performanceParameter = "performance";
	/**
	 * - url used for api call to get user data
	 * @type {string}
	 * @const
	 */
	const actualUrlUserInfo = url + userId;
	/**
	 * - mocked url used for api call to get user data
	 * @type {string}
	 * @const
	 */
	const mockedUrlUserInfo = "datauser.json";
	/**
	 * - url used for api call to get activity data
	 * @type {string}
	 * @const
	 */
	const actualUrlUserActivity = url + userId + slash + activityParameter;
	/**
	 * -mocked url used for api call to get activity data
	 * @type {string}
	 * @const
	 */
	const mockedUrlUserActivity = "datauseractivity.json";
	/**
	 * - url used for api call to get sessions data
	 * @type {string}
	 * @const
	 */
	const actualUrlUserSession = url + userId + slash + averageSessionsParameter;
	/**
	 * -mocked url used for api call to get sessions data
	 * @type {string}
	 * @const
	 */
	const mockedUrlUserSession = "datauseraveragesessions.json";
	/**
	 *  - url used for api call to get performance data
	 * @type {string}
	 * @const
	 */
	const actualUrlUserPerformance = url + userId + slash + performanceParameter;
	/**
	 * - mocked url used for api call to get performance data
	 * @type {string}
	 * @const
	 */
	const mockedUrlUserPerformance = "datauserperformance.json";

	
	let urlUserInfo = actualUrlUserInfo;
	let urlUserActivity = actualUrlUserActivity;
	let urlUserSession = actualUrlUserSession;
	let urlUserPerformance = actualUrlUserPerformance;


	const {
		response: userResponse,
		loading: userLoading,
		error: userError,
	} = useApi({ method: "get", url: `${urlUserInfo}` });

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
			/**
			 * - Score transformed in percent
			 * @type {string}
			 * @const
			 */
			const userScoreResponseValue =
				(userResponse.data.score * 100).toString() + "%";
			/**
			 * - Score values array
			 * @type {Array}
			 * @const
			 */
			const userScoreResponse = [
				{ value: userResponse.data.score * 100 },
				{ value: 100 - userResponse.data.score * 100 },
			];
			setUserData(userResponse);
			setUserDataScoreValue(userScoreResponseValue);
			setUserDataScore(userScoreResponse);
		}
		if (activityResponse !== null) {
			/**
			 * - Object with activity data
			 * @type {Object}
			 * @const
			 */
			const activityResponseFormated = activityResponse.data.sessions;
			for (let i = 0; i < activityResponseFormated.length; i++) {
				activityResponseFormated[i].dayNumber = i + 1;
			}
			setActivityData(activityResponseFormated);
		}
		if (averageSessionsResponse !== null) {
			/**
			 * Array with letter of the week
			 * @type {Array}
			 * @const
			 */
			const letterDay = ["L", "M", "M", "J", "V", "S", "D"];

			/**
			 * Object with sessions data
			 * @type {Object}
			 * @const
			 */
			let averageSessionsResponseFormated =
				averageSessionsResponse.data.sessions;
			for (let i = 0; i < averageSessionsResponse.data.sessions.length; i++) {
				averageSessionsResponseFormated[i].day = letterDay[i];
			}
			setSessionsData(averageSessionsResponseFormated);
		}
		if (performanceResponse !== null) {
			/**
			 * Array with type of features
			 * @type {string}
			 * @const
			 */
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
