/**
 * variant : dimensions (font-size, line-height, letter-spacing, font-weight)
 * component : balise
 * weight : épaisseur (font-weight)
 * theme : couleurs
 * font : font-family
 * className : ajout de classes
 * children : children
 * editable : permettre l'update du dom au clic
 */

import clsx from "clsx";

type Props = {
	children: React.ReactNode;
	font?: "title" | "main" | "emphasize";
	className?: string;
	theme?: "blue" | "red" | "gray";
	component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span" | "li";
	variant?:
		| "display"
		| "h1"
		| "h2"
		| "h3"
		| "lead"
		| "body-lg"
		| "body-base"
		| "body-sm"
		| "body-xs";
	weight?: "regular" | "medium";
	editable?: boolean;
};

const Typography = ({
	variant = "h1",
	weight = "regular",
	theme = "gray",
	font = "main",
	className = "",
	component: Component = "div",
	editable = false,
	children,
}: Props) => {
	let variantStyle: string = "",
		weightStyle: string = "",
		themeStyle: string = "",
		fontStyle: string = "";

	switch (variant) {
		case "display":
			variantStyle = "text-7xl md:text-8xl 2xl:text-9xl";
			break;
		case "h1":
			variantStyle = "text-4xl md:text-5xl 2xl:text-6xl";
			break;
		case "h2":
			variantStyle = "text-3xl md:text-4xl 2xl:text-5xl";
			break;
		case "h3":
			variantStyle = "text-2xl md:text-3xl 2xl:text-4xl";
			break;
		case "lead":
			variantStyle = "text-xl md:text-2xl 2xl:text-3xl";
			break;
		case "body-lg":
			variantStyle = "text-lg md:text-xl 2xl:text-2xl";
			break;
		case "body-base":
			variantStyle = "text-base md:text-lg 2xl:text-xl";
			break;
		case "body-sm":
			variantStyle = "text-sm md:text-base 2xl: text-lg";
			break;
		case "body-xs":
			variantStyle = "text-xs md:text-sm 2xl: text-base";
			break;
	}

	switch (weight) {
		case "regular":
			weightStyle = "font-normal";
			break;
		case "medium":
			weightStyle = "font-medium";
			break;
	}

	switch (theme) {
		case "blue":
			themeStyle = "text-blue-500/80";
			break;
		case "red":
			themeStyle = "text-red-500/80";
			break;
		case "gray":
			themeStyle = "text-slate-500/80";
			break;
	}

	switch (font) {
		case "title":
			fontStyle = "font-title";
			break;
		case "main":
			fontStyle = "font-main";
			break;
		case "emphasize":
			fontStyle = "font-emphasize";
			break;
	}

	return (
		<Component
			className={clsx(
				editable &&
					"hover:bg-slate-100 hover:text-gray-950 hover:cursor-pointer focus:bg-white  focus:text-gray-950 focus:cursor-default",
				variantStyle,
				weightStyle,
				themeStyle,
				fontStyle,
				className
			)}
			contentEditable={editable}>
			{children}
		</Component>
	);
};

export default Typography;
