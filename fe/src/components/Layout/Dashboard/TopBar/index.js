import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.css";

export default function TopBar(props) {
	const toggleSideBar = () => {
		props.setToggleSideBarOpposite();
	};

	return (
		<div className={styles.outer} onClick={toggleSideBar}>
			<span className={styles.logo}>
				Спортен клуб: Българско обединение по Таекуондо "Похион"
			</span>
			<div className={styles.block}>
				<div className={styles.icons}>
					<FontAwesomeIcon className={styles.icon} icon={faBell}></FontAwesomeIcon>
					<FontAwesomeIcon className={styles.icon} icon={faEnvelope}></FontAwesomeIcon>
				</div>
				<div className={styles.user}>
					<span>потребител изход</span>
				</div>
			</div>
		</div>
	);
}
