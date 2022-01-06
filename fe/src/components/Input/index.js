import React from "react";
import styles from "./styles.module.css";

export default function Input(props) {
	return (
			<div className={styles.input__group}>
				<label className={styles.input__filled}>
					<input required type={props.type}/>
					<span className={styles.input__label}>{props.text}</span>
				</label>
			</div>
	);
}
