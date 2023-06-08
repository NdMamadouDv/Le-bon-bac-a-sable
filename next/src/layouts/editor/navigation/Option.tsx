import React from "react";
import { clsx } from "clsx";

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Option: React.FC<Props> = ({ children, className = "" }) => {
	return (
		<div
			className={clsx(
				className,
				"flex items-center justify-center w-14 h-14 rounded-full p-4 bg-white cursor-pointer "
			)}>
			{children}
		</div>
	);
};

export default Option;
