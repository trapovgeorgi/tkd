import axios from "axios";

// Create instance
let jxios = axios.create();

// Set the AUTH token for any request
jxios.interceptors.request.use(function (config) {
	const token = localStorage.getItem("token");
	config.headers.Authorization = token ? `Bearer ${token}` : "";
	config.baseURL = process.env.REACT_APP_API_URL + "/api";
	return config;
});

export default jxios;
