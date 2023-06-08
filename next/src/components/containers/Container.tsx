import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Container = ({ children, className = "" }: Props) => {
	return (
		<div className={clsx(className, "container px-4 md:px-6 lg:px-8 mx-auto")}>
			{children}
		</div>
	);
};
