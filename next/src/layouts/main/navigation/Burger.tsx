import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

type Props = {
	onClick?: () => void;
	isOpen: boolean;
};

const BurgerButton = ({ onClick, isOpen = false }: Props) => {
	return (
		<button
			className="inline-block lg:hidden ml-auto px-2 py-2 rounded-md text-gray-500 focus:ring-white text-2xl sm:text-3xl"
			onClick={onClick}>
			{isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
		</button>
	);
};

export default BurgerButton;
