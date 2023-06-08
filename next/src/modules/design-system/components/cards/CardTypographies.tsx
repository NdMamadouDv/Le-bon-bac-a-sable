import Typography from "@/components/ui/Typography";

type Props = {
	tag:
		| "display"
		| "h1"
		| "h2"
		| "h3"
		| "lead"
		| "body-lg"
		| "body-base"
		| "body-sm"
		| "body-xs"
		| any;
};

const CardTypographies = ({ tag }: Props) => {
	return (
		<article className="border-2 border-gray-200 p-4">
			<Typography
				variant="body-base"
				weight="medium">
				{tag}
			</Typography>
			<Typography
				variant={tag}
				className="my-4">
				Lorem ipsum dolor sit amet.
			</Typography>
		</article>
	);
};

export default CardTypographies;
