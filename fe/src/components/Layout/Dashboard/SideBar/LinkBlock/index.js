import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function LinkBlock(props) {
	return (
		<Link className={styles.block} to={props.to}>
			<div className={styles.icon}>
				<FontAwesomeIcon icon={props.icon} />
			</div>
			<div className={styles.text}>
				<span>{props.text}</span>
			</div>
		</Link>
	);
}
