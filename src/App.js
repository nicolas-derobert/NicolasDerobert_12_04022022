import * as React from "react";
import "./App.css";
import GlobalLayout from "./layouts/globallayout/GlobalLayout";
import HorizontalMainArea from "./layouts/horizontalmainarea/HorizontalMainArea";
import HorizontalSecondaryArea from "./layouts/horizontalsecondaryarea/HorizontalSecondaryArea";
import VerticalArea from "./layouts/verticalarrea/VerticalArea";
import { useState, useEffect } from "react";
import { useApi } from "./service/use-api";
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
	const mockedUrlUserInfo = "edatauser.json";
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
	/**
	 * - variable to set actual url or mocked url for user info
	 * @type {string}
	 * @var
	 */
	let urlUserInfo = actualUrlUserInfo;
	/**
	 * - variable to set actual url or mocked url for activity
	 * @type {string}
	 * @var
	 */
	let urlUserActivity = actualUrlUserActivity;

	/**
	 * - variable to set actual url or mocked url for sessions
	 * @type {string}
	 * @var
	 */
	let urlUserSession = actualUrlUserSession;
	/**
	 * - variable to set actual url or mocked url for performance
	 * @type {string}
	 * @var
	 */
	let urlUserPerformance = actualUrlUserPerformance;

	/**
	 * @typedef {object} DestructuredObjectApiResponseForUser
	 * @property {string} userResponse
	 * @property {boolean} userLoadingResponse
	 * @property {string} userErrorResponse
	 */
	const {
		response: userResponse,
		loading: userLoadingResponse,
		error: userErrorResponse,
	} = useApi({ method: "get", url: `${urlUserInfo}` });
	/**
	 * @typedef {object} DestructuredObjectApiResponseForActivity
	 * @property {string} activityResponse
	 * @property {boolean} activityLoadingResponse
	 * @property {string} activityErrorResponse
	 */
	const {
		response: activityResponse,
		loading: activityLoadingResponse,
		error: activityErrorResponse,
	} = useApi({ method: "get", url: ` ${urlUserActivity}` });
	/**
	 * @typedef {object} DestructuredObjectApiResponseForSession
	 * @property {string} averageSessionsResponse
	 * @property {boolean} averageSessionsLoadingResponse
	 * @property {string} averageSessionsErrorResponse
	 */
	const {
		response: averageSessionsResponse,
		loading: averageSessionsLoadingResponse,
		error: averageSessionsErrorResponse,
	} = useApi({
		method: "get",
		url: ` ${urlUserSession}`,
	});
	/**
	 * @typedef {object} DestructuredObjectApiResponseForPerformance
	 * @property {string} performanceResponse
	 * @property {boolean} performanceLoadingResponse
	 * @property {string} performanceErrorResponse
	 */
	const {
		response: performanceResponse,
		loading: performanceLoadingResponse,
		error: performanceErrorResponse,
	} = useApi({ method: "get", url: ` ${urlUserPerformance}` });
	const [userLoading, setUserLoading] = useState(true);
	const [activityLoading, setActivityLoading] = useState(true);
	const [averageSessionsLoading, setAverageSessionsLoading] = useState(true);
	const [performanceLoading, setPerformanceLoading] = useState(true);
	const [userData, setUserData] = useState([]);
	const [activityData, setActivityData] = useState([]);
	const [averageSessionsData, setSessionsData] = useState([]);
	const [performanceData, setPerformanceData] = useState([]);
	const [userError, setUserError] = useState("");
	const [activityError, setActivityError] = useState("");
	const [averageSessionsError, setAverageSessionsError] = useState("");
	const [performanceError, setPerformanceError] = useState("");
	const [userDataScore, setUserDataScore] = useState("");
	const [userDataScoreValue, setUserDataScoreValue] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [globalLoading, setGlobalLoading] = useState(false);

	useEffect(() => {
		let message = "";
		if (userErrorResponse) {
			message += "Les données utilisateurs ne peuvent pas être téléchargées";
		}
		if (activityErrorResponse) {
			message += "Les données d'activité ne peuvent pas être téléchargées";
		}
		if (averageSessionsErrorResponse) {
			message += "Les données des sessions ne peuvent pas être téléchargées";
		}
		if (performanceErrorResponse) {
			message += "Les données de performance ne peuvent pas être téléchargées";
		}
		setUserError(userErrorResponse);
		setActivityError(activityErrorResponse);
		setAverageSessionsError(averageSessionsErrorResponse);
		setPerformanceError(performanceErrorResponse);
		setErrorMessage(message);

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
			setUserLoading(userLoadingResponse);
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

			setActivityLoading(activityLoadingResponse);
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
			setAverageSessionsLoading(averageSessionsLoadingResponse);
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
			setPerformanceLoading(performanceLoadingResponse);
			setPerformanceData(performanceResponseFormated);
		}
		if (
			!userLoadingResponse &
			!activityLoadingResponse &
			!averageSessionsLoadingResponse &
			!performanceLoadingResponse
		) {
			setGlobalLoading(true);
		}
	}, [
		userResponse,
		activityResponse,
		averageSessionsResponse,
		performanceResponse,
		userLoadingResponse,
		activityLoadingResponse,
		averageSessionsLoadingResponse,
		performanceLoadingResponse,
		userErrorResponse,
		activityErrorResponse,
		averageSessionsErrorResponse,
		performanceErrorResponse,
		globalLoading,
	]);

	return (
		<div className="App">
			<GlobalLayout>
				{!errorMessage ? (
					globalLoading ? (
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

							<HorizontalMainArea activity={activityData} />

							<HorizontalSecondaryArea
								score={userDataScore}
								scorevalue={userDataScoreValue}
								sessions={averageSessionsData}
								performance={performanceData}
							/>

							<VerticalArea keydata={userData.data.keyData}></VerticalArea>
						</>
					) : (
						<div className="uploading">Chargement des données</div>
					)
				) : (
					<div className="error">{errorMessage}</div>
				)}
			</GlobalLayout>
		</div>
	);
}

export default App;
