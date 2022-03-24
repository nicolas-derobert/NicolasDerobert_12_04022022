
import { useState, useEffect } from "react";
import axios from "axios";
	
/**
 * Generic function for api call to real api and mocked api
 * @category API
 * @function useApi
 * @param {Object} Obj description
 * @param {string} Obj.url url of api call
 * @param {string} Obj.method method 
 * @param {string} Obj.body body of call
 * @param {string} Obj.headers headers of call
 * @returns {Object}
 */
export const useApi = ({
	url,
	method,
	body = null,
	headers = null,
}) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const fetchData =  () => {
		 axios[method](url, JSON.parse(headers), JSON.parse(body))
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [method, url, body, headers]);
	return { response, error, loading };
};