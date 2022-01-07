import React, { useState } from "react";
import styles from "./styles.module.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

export default function Dashboard(props) {
	const [toggleSideBar, setToggleSideBar] = useState(false);

	const setToggleSideBarOpposite = () => {
		setToggleSideBar(!toggleSideBar)
	}
	const sideStyle = {
		width: toggleSideBar ? "250px" : "50px",
	};

	return (
		<React.Fragment>
			<TopBar setToggleSideBarOpposite={setToggleSideBarOpposite}></TopBar>
			<div>
				<SideBar styleObj={sideStyle} toggleSideBar={toggleSideBar}></SideBar>
				<div className={styles.body}>{props.children}</div>
			</div>
		</React.Fragment>
	);
}
