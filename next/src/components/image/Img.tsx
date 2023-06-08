import clsx from "clsx";
import Image from "next/image";

type Props = {
	src: string;
	alt: string;
	rounded?: boolean;
	size?: "full" | "auto";
	cover?: boolean;
	className?: string;
};

const Img = ({
	src,
	alt,
	size = "auto",
	cover = false,
	rounded = false,
	className,
}: Props) => {
	let sizeStyle: string = "";

	switch (size) {
		case "full":
			sizeStyle = "h-full";
			break;
		case "auto":
			sizeStyle = "";
			break;
	}

	return (
		<div
			className={clsx(
				sizeStyle,
				className,
				rounded && "rounded-full",
				"relative w-full"
			)}>
			<Image
				fill
				src={src}
				alt={alt}
				className={clsx(
					rounded && "rounded-full",
					cover ? "object-cover" : "object-contain",
					"object-center z-10"
				)}
			/>
		</div>
	);
};

export default Img;
