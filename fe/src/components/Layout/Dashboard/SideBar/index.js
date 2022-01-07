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
			<LinkBlock icon={faHistory} text="История" to="/children"/>
			<LinkBlock icon={faRunning} text="Дейност" to="/children"/>
			<LinkBlock icon={faArchway} text="Зали" to="/children"/>
			<LinkBlock icon={faCalendar} text="Календар" to="/children"/>
			<LinkBlock icon={faMailBulk} text="Публикации" to="/children"/>
			<LinkBlock icon={faPhotoVideo} text="Фото" to="/children"/>
			<LinkBlock icon={faVideo} text="Видео" to="/children"/>
			<LinkBlock icon={faArchive} text="Архив" to="/children"/>
			<LinkBlock icon={faPoll} text="Анкети" to="/children"/>
			<LinkBlock icon={faConnectdevelop} text="Връзки" to="/children"/>
			<LinkBlock icon={faPhone} text="Контакти" to="/children"/>
			<LinkBlock icon={faSignInAlt} text="Влизане" to="/login"/>
		</div>
	);
}
