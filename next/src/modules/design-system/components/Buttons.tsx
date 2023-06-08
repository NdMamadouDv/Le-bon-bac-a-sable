import { Container } from "@/components/containers/Container";
import Typography from "@/components/ui/Typography";
import CardButtons from "./cards/CardButtons";

const Buttons = () => {
	return (
		<section>
			<Container className="flex flex-col gap-6 lg:gap-8 my-24 lg:my-32">
				{/* TITLE */}
				<Typography
					variant="h2"
					weight="medium"
					className="text-center m-12">
					Buttons
				</Typography>
				{/* PRIMARIES */}
				<CardButtons color="blue" />
				{/* SECONDARIES */}
				<CardButtons color="red" />
			</Container>
		</section>
	);
};

export default Buttons;
