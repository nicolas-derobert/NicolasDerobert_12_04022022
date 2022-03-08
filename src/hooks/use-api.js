import { useState, useEffect } from 'react';

import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useApi = ({ url, method, body = null, headers = JSON.stringify({ accept: "*/*" }) }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
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
    }, [method, url, body, headers]);

    return { response, error, loading };
};

// export const getUserData = ({ url, method, body = null, headers = null }) => {
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);

//     const fetchData = () => {
//         axios[method](url, JSON.parse(headers), JSON.parse(body))
//             .then((res) => {
//                 setResponse(res.data);
//             })
//             .catch((err) => {
//                 setError(err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     };

//     useEffect(() => {
//         fetchData();
//     }, [method, url, body, headers]);

//     return { response, error, loading };
// };
// export default useApi;



// const mockedApi = ({ url, method, body = null, headers = null }) => {
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState('');
//     const [loading, setloading] = useState(true);

//     const fetchData = () => {
//         axios[method](url, JSON.parse(headers), JSON.parse(body))
//             .then((res) => {
//                 setResponse(res.data);
//             })
//             .catch((err) => {
//                 setError(err);
//             })
//             .finally(() => {
//                 setloading(false);
//             });
//     };

//     useEffect(() => {
//         fetchData();
//     }, [method, url, body, headers]);

//     return { response, error, loading };
// };

// export {mockedApi};


// var axios = require("axios");
// var MockAdapter = require("axios-mock-adapter");

// // This sets the mock adapter on the default instance
// var mock = new MockAdapter(axios);

// // Mock any GET request to /users
// // arguments for reply are (status, data, headers)
// mock.onGet("/users").reply(200, {
//   users: [{ id: 1, name: "John Smith" }],
// });

// axios.get("/users").then(function (response) {
//   console.log(response.data);
// });