import Navigation from "@/layouts/main/navigation/Navigation";
import React from "react";
type Props = {
	children: React.ReactNode;
};
const layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
};

export default layout;
