import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logoutUser } from "../../../../../api/auth";
import { useNavigate } from "react-router";

export default function LogoutBlock(props) {
	const navigate = useNavigate()

	const logout = () => {
		if (window.confirm("Are you sure?")) {
			logoutUser();
			navigate("/login");
		}
	};

	return (
		<div className={styles.block} onClick={logout}>
			<div className={styles.icon}>
				<FontAwesomeIcon icon={props.icon} />
			</div>
			<div className={styles.text}>
				<span>{props.text}</span>
			</div>
		</div>
	);
}
