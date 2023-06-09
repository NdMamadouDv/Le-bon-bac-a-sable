"use client";

import Navigation from "./navigation/Navigation";
import { useContext } from "react";
import { EditorContext } from "@/context/editorContext";
import Modal from "./modals/Modal";

type Props = {
	children: React.ReactNode;
};
const LayoutEditor: React.FC<Props> = ({ children }) => {
	const { isModalActive } = useContext(EditorContext);
	return (
		<div className="flex flex-col min-h-screen">
			{isModalActive ? <Modal /> : <Navigation />}
			<main className="flex-grow">{children}</main>
		</div>
	);
};

export default LayoutEditor;
