import jxios from "../jxios";

export const addGroupApi = (groupName) => {
	jxios.post("/groups", {
		name: groupName,
	});
};

export const getGroupsApi = (setGroups) => {
	jxios.get("/groups").then((res) => {
		setGroups(res.data);
	});
};

export const deleteGroupApi = (id) => {
	jxios.delete("/groups", {
		data: {
			id,
		},
	});
};
