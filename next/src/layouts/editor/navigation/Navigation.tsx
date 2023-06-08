import Link from "next/link";
import Option from "./Option";
import { AiFillHome, AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbLetterN, TbLetterF } from "react-icons/tb";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

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

const Navigation: React.FC = () => {
	return (
		<aside className="flex flex-col gap-4 fixed left-1/2 -translate-x-1/2 bottom-10 md:top-1/2 md:-translate-y-1/2 md:left-16">
			<nav className="px-2 py-4 bg-slate-700 rounded-md md:flex hidden md:flex-col md:gap-2">
				<Link href={"/"}>
					<Option>
						<AiFillHome className="text-3xl" />
					</Option>
				</Link>
			</nav>
			{asideCategories?.map((category) => (
				<div className="px-2 py-4 bg-slate-700 md:flex hidden md:flex-col md:gap-2 rounded-md">
					{category?.map((option) => (
						<Option>
							<option.icon.icon className="text-3xl" />
							<p>{option.name}</p>
						</Option>
					))}
				</div>
			))}

			<div className="md:hidden px-2 py-4 bg-slate-700 rounded-md flex flex-col gap-2">
				i
				<Option>
					<FiSettings className="text-3xl" />
				</Option>
			</div>
		</aside>
	);
};

export default Navigation;
