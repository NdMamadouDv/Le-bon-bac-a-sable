import CardTypographies from "./cards/CardTypographies";
import { Container } from "@/components/containers/Container";
import Typography from "@/components/ui/Typography";
import { keyGenerator } from "@/utils/keyGenerator";

const Typographies = () => {
	const variants: string[] = [
		"display",
		"h1",
		"h2",
		"h3",
		"lead",
		"body-lg",
		"body-base",
		"body-sm",
		"body-xs",
	];
	return (
		<section>
			<Container className="flex flex-col gap-6 lg:gap-8 my-24 lg:my-32">
				<Typography
					variant="h2"
					weight="medium"
					className="text-center m-12">
					Typographies
				</Typography>
				{variants?.map((variant) => (
					<CardTypographies
						key={keyGenerator()}
						tag={variant}
					/>
				))}
			</Container>
		</section>
	);
};

export default Typographies;
