"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Navigation from "@/assets/styles/navigation.module.css";

interface Props {
	href: string;
	variant?: "lead" | "body-lg" | "body-base" | "body-sm" | "body-xs";
	children: React.ReactNode;
	onClick?: () => void;
}

const ActiveLink = ({
	href,
	variant = "body-base",
	children,
	onClick,
}: Props) => {
	const pathname = usePathname();

	const isActive: boolean = useMemo(() => {
		return pathname === href;
	}, [pathname, href]);

	let variantStyle: string = "";

	switch (variant) {
		case "lead":
			variantStyle = "text-xl md:text-2xl 2xl:text-3xl";
			break;
		case "body-lg":
			variantStyle = "text-lg md:text-xl 2xl:text-2xl";
			break;
		case "body-base":
			variantStyle = "text-md md:text-lg 2xl:text-xl";
			break;
		case "body-sm":
			variantStyle = "text-sm md:text-md 2xl: text-lg";
			break;
		case "body-xs":
			variantStyle = "text-xs md:text-sm 2xl: text-md";
			break;
	}

	return (
		<Link
			href={href}
			className={clsx(
				variantStyle,
				isActive ? `${Navigation.activeLink}` : `${Navigation.notActiveLink}`
			)}
			onClick={onClick}>
			{children}
		</Link>
	);
};

export default ActiveLink;
