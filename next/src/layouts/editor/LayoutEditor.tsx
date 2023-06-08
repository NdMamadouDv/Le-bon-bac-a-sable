"use client";

import Navigation from "./navigation/Navigation";

type Props = {
	children: React.ReactNode;
};
const LayoutEditor: React.FC<Props> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navigation />
			<main className="flex-grow">{children}</main>
		</div>
	);
};

export default LayoutEditor;
