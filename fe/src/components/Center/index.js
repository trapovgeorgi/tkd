import React from "react";
import styles from "./styles.module.css";

export default function Center(props) {
	return <div className={styles.box}>{props.children}</div>;
}
