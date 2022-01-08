import React from "react";
import styles from "./styles.module.css";
import { faChild, faSignInAlt, faCalendar, faVideo, faArchive, faPhone, faPhotoVideo, faHistory, faRunning, faArchway, faMailBulk, faPoll } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import LinkBlock from "./LinkBlock";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

export default function SideBar(props) {
	return (
		<div className={styles.outer} style={props.styleObj}>
			<LinkBlock icon={faHome} text="Начало" to="/" />
			<LinkBlock icon={faChild} text="Деца" to="/children"/>
			<LinkBlock icon={faHistory} text="История" to="/history"/>
			<LinkBlock icon={faRunning} text="Дейност" to="/activity"/>
			<LinkBlock icon={faArchway} text="Зали" to="/halls"/>
			<LinkBlock icon={faCalendar} text="Календар" to="/calendar"/>
			<LinkBlock icon={faMailBulk} text="Публикации" to="/publications"/>
			<LinkBlock icon={faPhotoVideo} text="Фото" to="/photo"/>
			<LinkBlock icon={faVideo} text="Видео" to="/video"/>
			<LinkBlock icon={faArchive} text="Архив" to="/archive"/>
			<LinkBlock icon={faPoll} text="Анкети" to="/polls"/>
			<LinkBlock icon={faConnectdevelop} text="Връзки" to="/connections"/>
			<LinkBlock icon={faPhone} text="Контакти" to="/contacts"/>
			<LinkBlock icon={faSignInAlt} text="Влизане" to="/login"/>
		</div>
	);
}
