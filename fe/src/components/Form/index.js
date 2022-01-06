import React from "react";
import styles from "./styles.module.css";

export default function Form(props) {
	return <div className={styles.box}>{props.children}</div>;
}
