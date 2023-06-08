import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

// MAMADOU, NE TOUCHE PAS
export const Container = ({ children, className = "" }: Props) => {
	return (
		<div
			className={clsx(className, "container px-2 md:px-10 lg:px-12 mx-auto")}>
			{children}
		</div>
	);
};
