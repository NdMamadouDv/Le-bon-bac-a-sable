import { Container } from "@/components/containers/Container";
import Typography from "@/components/ui/Typography";
import Image from "next/image";

const Section1 = () => {
	return (
		<div className=" py-8 bg-gray-300 min-h-screen">
			<Container className="">
				<div className=" grid lg:grid-cols-3 gap-x-8 ">
					<div className="border rounded-lg bg-opacity-30 backdrop-blur-lg bg-slate-600 drop-shadow-lg p-4 grid ">
						<Typography
							variant="h1"
							className="text-white text-center font-bold">
							Design
						</Typography>
						<Typography
							component="h3"
							variant="h3"
							className="text-white">
							01 Design
						</Typography>
						<Typography
							component="p"
							variant="body-sm"
							className=" text-gray-500/70">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
							repudiandae.
						</Typography>
						<Typography
							component="h3"
							variant="h3"
							className="text-white">
							02 UI/UX
						</Typography>
						<Typography
							component="p"
							variant="body-sm"
							className=" text-gray-500/70">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
							aperiam.
						</Typography>
					</div>
					<Typography>Frontend</Typography>
					<Typography>Backend</Typography>
				</div>
			</Container>
		</div>
	);
};

export default Section1;
