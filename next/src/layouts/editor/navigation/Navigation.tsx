"use client";

import Link from "next/link";
import Option from "./Option";
import { AiFillHome } from "react-icons/ai";
import { GiPaintBrush } from "react-icons/gi";
import { useContext } from "react";
import { EditorContext } from "@/context/editorContext";

const Navigation: React.FC = () => {
	const { toggleModalActive } = useContext(EditorContext);
	return (
		<aside className="px-4 md:px-2 py-2 md:py-4 shadow-xl bg-gray-800 rounded-md overflow-hidden flex md:flex-col gap-4 fixed left-1/2 -translate-x-1/2 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-16">
			<nav className="">
				<Link href={"/"}>
					<Option>
						<AiFillHome className="text-3xl" />
					</Option>
				</Link>
			</nav>
			<Option onClick={toggleModalActive}>
				<GiPaintBrush className="text-3xl" />
			</Option>
		</aside>
	);
};

export default Navigation;
