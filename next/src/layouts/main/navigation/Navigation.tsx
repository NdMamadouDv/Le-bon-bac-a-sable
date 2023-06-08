"use client";

import clsx from "clsx";
import BurgerButton from "./Burger";
import ActiveLink from "./ActiveLink";
import { useState, useEffect } from "react";
import { navigationLinks } from "@/data/navigationLinks";
import { navlink } from "@/types/navlink.type";
import { keyGenerator } from "@/utils/keyGenerator";
import { Container } from "@/components/containers/Container";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import { FaTheRedYeti } from "react-icons/fa";

type Props = {
	fixed?: boolean;
};

const Navigation = ({ fixed = false }: Props) => {
	const [onTop, setOnTop] = useState<boolean>(true);
	const [isFixed, setIsFixed] = useState<boolean>(false);
	const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
	const [deviceWidth, setDeviceWidth] = useState<number | undefined>(undefined);
	const scrollStyle: string = "fixed bg-gray-950 transition-all duration-500";

	function handleBurgerMenu(): void {
		setIsBurgerActive(!isBurgerActive);
		if (!fixed && !isFixed) {
			setIsFixed(true);
		}

		if (!fixed && isFixed) {
			setIsFixed(false);
		}
	}

	useEffect(() => {
		if (fixed) {
			setIsFixed(true);

			window.addEventListener("scroll", () => {
				if (window.scrollY === 0) setOnTop(true);
				if (window.scrollY >= 100) {
					if (onTop) setOnTop(false);
				}
			});
		}
	}, [fixed]);

	useEffect(() => {
		if (deviceWidth === undefined) {
			setDeviceWidth(window.innerWidth);
		}

		window.addEventListener("resize", () => {
			setDeviceWidth(window.innerWidth);
		});
	}, []);

	useEffect(() => {
		if (deviceWidth) {
			const largeDevice: boolean = deviceWidth >= 1024;

			if (largeDevice && !fixed && isFixed) {
				setIsFixed(false);
			}

			if (largeDevice && isBurgerActive) {
				setIsBurgerActive(false);
			}
		}
	}, [deviceWidth]);

	useEffect(() => {
		document.body.style.overflowY = isBurgerActive ? "hidden" : "auto";
	}, [isBurgerActive]);

	return (
		<div
			className={clsx(
				!isFixed && "bg-gray-950",
				isFixed && "fixed top-0",
				isFixed && !onTop && scrollStyle,
				isBurgerActive && "h-full bg-gray-950 text-white",
				"w-full z-50"
			)}>
			<Container className="flex text-white justify-between items-center h-20">
				<Link
					href="/"
					className="flex items-center gap-2">
					<FaTheRedYeti className="text-[2rem] md:text-[2.5rem] lg:text-[3rem]" />
					<Typography
						variant="lead"
						className="text-white">
						Netoryeti
					</Typography>
				</Link>

				<nav className="hidden lg:flex items-center gap-6">
					{navigationLinks?.map((link: navlink) =>
						link.isInternal ? (
							<ActiveLink
								key={keyGenerator()}
								href={link.baseUrl}
								variant="body-lg">
								{link.label}
							</ActiveLink>
						) : (
							<a
								key={keyGenerator()}
								href={link.baseUrl}>
								{link.label}
							</a>
						)
					)}
				</nav>
				<div className="block lg:hidden">
					<BurgerButton
						isOpen={isBurgerActive}
						onClick={handleBurgerMenu}
					/>
				</div>
			</Container>
			{isBurgerActive && (
				<Container className="border-t-2">
					<nav className="flex flex-col items-center gap-6 my-8">
						{navigationLinks?.map((link: navlink) =>
							link.isInternal ? (
								<ActiveLink
									key={keyGenerator()}
									href={link.baseUrl}
									variant="lead"
									onClick={() => {
										setIsBurgerActive(false);
										handleBurgerMenu();
									}}>
									{link.label}
								</ActiveLink>
							) : (
								<a
									key={keyGenerator()}
									href={link.baseUrl}
									onClick={() => setIsBurgerActive(false)}>
									{link.label}
								</a>
							)
						)}
					</nav>
				</Container>
			)}
		</div>
	);
};

export default Navigation;
