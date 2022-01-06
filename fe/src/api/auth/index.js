import jxios from "../jxios";

export const loginUser = (username, password, navigate) => {
	jxios
		.post("/auth/login", {
			username: username,
			password: password,
		})
		.then((res) => {
			console.log(res.data.token);
			localStorage.setItem("token", res.data.token);
			navigate("/");
		})
		.catch((err) => {
			alert(err);
		});
};

export const logoutUser = (navigate) => {
	localStorage.removeItem("token");
};
