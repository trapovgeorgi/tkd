import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.css";
import {useNavigate} from 'react-router-dom'
import { logoutUser } from "../../../../api/auth";


export default function TopBar(props) {
	const navigate = useNavigate()

	const toggleSideBar = () => {
		props.setToggleSideBarOpposite();
	};

	const logout = () => {
		if (window.confirm("Are you sure?")) {
			logoutUser();
			navigate("/login");
		}
	};

	return (
		<div className={styles.outer} >
			<div className={styles.logo__block} onClick={toggleSideBar}>
				<span className={styles.logo}>
					Спортен клуб, Българско обединение по Таекуондо "Похион"
				</span>
			</div>
			<div className={styles.user__block}>
				<div className={styles.user__block__right}>
					<div className={styles.icons}>
						<FontAwesomeIcon
							className={styles.icon}
							icon={faBell}
						></FontAwesomeIcon>
						<FontAwesomeIcon
							className={styles.icon}
							icon={faEnvelope}
						></FontAwesomeIcon>
					</div>
					<div className={styles.user__options}>
						<span className={styles.option}>потребител</span>
						<span className={styles.option} onClick={logout}>изход</span>
					</div>
				</div>
			</div>
		</div>
	);
}
