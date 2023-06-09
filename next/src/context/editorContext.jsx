"use client";
import { useState, createContext } from "react";

export const EditorContext = createContext();

export default function EditorProvider({ children }) {
	const [isModalActive, setIsModalActive] = useState(false);

	const toggleModalActive = () => {
		setIsModalActive(!isModalActive);
	};

	return (
		<EditorContext.Provider value={{ isModalActive, toggleModalActive }}>
			{children}
		</EditorContext.Provider>
	);
}
