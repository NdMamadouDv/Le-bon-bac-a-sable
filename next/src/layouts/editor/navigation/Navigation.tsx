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
	[{ icon: { icon: AiFillHome }, name: "" }],
	[
		{ icon: { icon: FiSettings }, name: "" },
		{ icon: { icon: RiNumber1 }, name: "" },
		{ icon: { icon: RiNumber2 }, name: "" },
		{ icon: { icon: RiNumber3 }, name: "" },
		{ icon: { icon: TbLetterF }, name: "" },
	],
];

const Navigation: React.FC = () => {
	return (
		<aside className="flex flex-col gap-4 fixed left-1/2 -translate-x-1/2 bottom-10 md:top-1/2 md:-translate-y-1/2 md:left-16">
			{asideCategories?.map((category) => (
				<div className="p-2 bg-slate-700 md:flex hidden md:flex-col md:gap-2 rounded-md">
					{category?.map((option) => (
						<Option>
							<option.icon.icon className="text-3xl" />
							<p>{option.name}</p>
						</Option>
					))}
				</div>
			))}

			<div className="md:hidden p-2 bg-slate-700 rounded-md flex flex-col gap-2">
				<Option>
					<FiSettings className="text-3xl" />
				</Option>
			</div>
			<nav className="p-2 bg-slate-700 rounded-md md:flex hidden md:flex-col md:gap-2">
				<Link href={"/"}>
					<Option>
						<AiFillHome className="text-3xl" />
					</Option>
				</Link>
			</nav>
			<div className="p-2 bg-slate-700 md:flex hidden md:flex-col md:gap-2 rounded-md">
				<Option>N</Option>
				<Option>1</Option>
				<Option>2</Option>
				<Option>3</Option>
				<Option>F</Option>
				<Option>
					<AiOutlinePlus />
				</Option>
			</div>

			<div className="p-2 bg-slate-700 md:flex hidden md:flex-col md:gap-2 rounded-md">
				<Option>
					<BsShare />
				</Option>
				<Option>
					<AiOutlineCheck />
				</Option>
			</div>
		</aside>
	);
};

export default Navigation;
