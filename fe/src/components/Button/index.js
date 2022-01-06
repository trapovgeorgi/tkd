import React from "react";
import styles from "./styles.module.css";

export default function Button(props) {
	return (
		<div className={styles.container}>
			<button className={styles.button}>{props.text}</button>
		</div>
	);
}
