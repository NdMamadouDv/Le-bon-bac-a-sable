import React from "react";
import Hero from "./components/Hero";
import Knowledge from "./components/Knowledge";
import Technologies from "./components/Technologies";
// import { getOwnerInfoData } from "@/lib/fetchOwnerInfo";

const HomeView = () => {
	// const { ownerInfo } = await getOwnerInfoData();
	// console.log(ownerInfo[0]);

	return (
		<div>
			<Hero />
			<Knowledge />
			<Technologies />
		</div>
	);
};

export default HomeView;
