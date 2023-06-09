"use client";

import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { TbLetterN, TbLetterF } from "react-icons/tb";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { Container } from "@/components/containers/Container";
import { useContext } from "react";
import { EditorContext } from "@/context/editorContext";
import Typography from "@/components/ui/Typography";
import { RxCross1 } from "react-icons/rx";
import { keyGenerator } from "@/utils/keyGenerator";

type asideOption = {
	icon: { icon: React.ElementType };
	name: string;
	href?: string;
	onClick?: () => void;
};

type asideCategory = asideOption[];

const asideCategories: asideCategory[] = [
	[
		{ icon: { icon: TbLetterN }, name: "" },
		{ icon: { icon: RiNumber1 }, name: "" },
		{ icon: { icon: RiNumber2 }, name: "" },
		{ icon: { icon: RiNumber3 }, name: "" },
		{ icon: { icon: TbLetterF }, name: "" },
		{ icon: { icon: AiOutlinePlus }, name: "" },
	],
	[
		{ icon: { icon: BsShare }, name: "" },
		{ icon: { icon: AiOutlineCheck }, name: "" },
	],
];

const Modal = () => {
	const { toggleModalActive } = useContext(EditorContext);
	return (
		<div className="fixed w-full h-full flex items-center justify-center bg-slate-950/20">
			<Container>
				<div className="px-6 py-10 bg-white shadow-md rounded-md max-w-screen-md mx-auto">
					<div className="flex justify-between items-center pb-4 border-b-2 border-gray-100">
						<Typography variant="lead">Personnalisation</Typography>
						<Typography
							variant="lead"
							className="text-red-500 hover:text-red-400 cursor-pointer">
							<RxCross1 onClick={toggleModalActive} />
						</Typography>
					</div>
					{asideCategories?.map((category) => (
						<div
							key={keyGenerator()}
							className="flex items-center pb-4 border-b-2 border-gray-100">
							{category?.map((option) => (
								<div key={keyGenerator()}>
									<option.icon.icon />
								</div>
							))}
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Modal;
