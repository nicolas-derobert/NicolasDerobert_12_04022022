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
	 * @const
	 */
	const urlUserInfo = actualUrlUserInfo;
	/**
	 * - variable to set actual url or mocked url for activity
	 * @type {string}
	 * @const
	 */
	const urlUserActivity = actualUrlUserActivity;

	/**
	 * - variable to set actual url or mocked url for sessions
	 * @type {string}
	 * @const
	 */
	const urlUserSession = actualUrlUserSession;
	/**
	 * - variable to set actual url or mocked url for performance
	 * @type {string}
	 * @const
	 */
	const urlUserPerformance = actualUrlUserPerformance;

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
	const [userData, setUserData] = useState([]);
	const [activityData, setActivityData] = useState([]);
	const [averageSessionsData, setSessionsData] = useState([]);
	const [performanceData, setPerformanceData] = useState([]);
	const [userDataScore, setUserDataScore] = useState("");
	const [userDataScoreValue, setUserDataScoreValue] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [globalLoading, setGlobalLoading] = useState(false);

	useEffect(() => {
		let message = "";
		if (userErrorResponse) {
			message += "Les donn??es utilisateurs ne peuvent pas ??tre t??l??charg??es";
		}
		if (activityErrorResponse) {
			message += "Les donn??es d'activit?? ne peuvent pas ??tre t??l??charg??es";
		}
		if (averageSessionsErrorResponse) {
			message += "Les donn??es des sessions ne peuvent pas ??tre t??l??charg??es";
		}
		if (performanceErrorResponse) {
			message += "Les donn??es de performance ne peuvent pas ??tre t??l??charg??es";
		}
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
				"Intensit??",
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
		if (
			!userLoadingResponse &
			!activityLoadingResponse &
			!averageSessionsLoadingResponse &
			!performanceLoadingResponse
		) {
			setGlobalLoading(true);
		}
		console.log(performanceData)
	},
			// eslint-disable-next-line react-hooks/exhaustive-deps 
	[		
		userLoadingResponse,
		activityLoadingResponse,
		averageSessionsLoadingResponse,
		performanceLoadingResponse,
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
								F??licitation ! Vous avez explos?? vos objectifs hier ????
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
						<div className="uploading">Chargement des donn??es</div>
					)
				) : (
					<div className="error">{errorMessage}</div>
				)}
			</GlobalLayout>
		</div>
	);
}

export default App;
