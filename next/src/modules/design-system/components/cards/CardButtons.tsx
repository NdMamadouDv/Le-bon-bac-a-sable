import Typography from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { SlHandbag } from "react-icons/sl";

type Props = {
	color: "blue" | "red";
};

const CardTypographies = ({ color }: Props) => {
	return (
		<article className="flex flex-col gap-4 border-2 border-gray-200 p-4">
			<Typography
				variant="body-base"
				weight="medium"
				className="pb-4">
				{color}
			</Typography>
			<div className="flex flex-col md:flex-row items-center gap-4">
				<Button
					variant={color}
					size="large"
				/>
				<Button variant={color} />
				<Button
					variant={color}
					size="small"
				/>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-4">
				<Button
					variant={color}
					size="large"
					icon={{ icon: SlHandbag }}
				/>

				<Button
					variant={color}
					icon={{ icon: SlHandbag }}
				/>

				<Button
					variant={color}
					size="small"
					icon={{ icon: SlHandbag }}
				/>
			</div>
			{/* <div className="flex flex-col md:flex-row items-center gap-4">
				<Button
					variant={color}
					size="large"
					icon={{ icon: SlHandbag }}
					iconPosition="left">
					InDev Conception
				</Button>
				<Button
					variant={color}
					icon={{ icon: SlHandbag }}
					iconPosition="left">
					InDev Conception
				</Button>
				<Button
					variant={color}
					size="small"
					icon={{ icon: SlHandbag }}
					iconPosition="left">
					InDev Conception
				</Button>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-4">
				<Button
					variant={color}
					size="large"
					icon={{ icon: SlHandbag }}></Button>
				<Button
					variant={color}
					icon={{ icon: SlHandbag }}></Button>
				<Button
					variant={color}
					size="small"
					icon={{ icon: SlHandbag }}></Button>
			</div> */}
		</article>
	);
};

export default CardTypographies;
