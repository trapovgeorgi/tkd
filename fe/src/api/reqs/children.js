import jxios from "../jxios";

const getTodayDate = () => {
	const date = new Date();
	const options = {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	};
	return date.toLocaleDateString("en-GB", options);
};

export const addChildToGroupApi = (childId, groupId) => {
	jxios.post("/children", {
		childId: childId,
		groupId: groupId,
	});
};

export const addChildApi = (name, age) => {
	jxios.post("/children", {
		name: name,
		age: age,
	});
};

export const deleteChildApi = (id) => {
	jxios.delete(`/children/${id}`);
};

export const getChildrenApi = (setChildren) => {
	jxios.get("/children").then((res) => {
		setChildren(res.data);
	});
};

export const getChildApi = (id, setChild) => {
	jxios.get(`/children/${id}`).then((res) => {
		setChild(res.data);
	});
};

export const addCommentApi = (id, comment) => {
	jxios.put(`/children/comments/${id}`, {
		date: getTodayDate(),
		comment: comment,
	});
};
export const addMarkApi = (id, mark) => {
	jxios.put(`/children/marks/${id}`, {
		date: getTodayDate(),
		mark: mark,
	});
};

export const deleteCommentApi = (id, comment, date) => {
	jxios.delete(`/children/comments/${id}`, {
		data: {
			date: date,
			comment: comment,
		},
	});
};
export const deleteMarkApi = (id, mark, date) => {
	jxios.delete(`/children/marks/${id}`, {
		data: {
			date: date,
			mark: mark,
		},
	});
};
