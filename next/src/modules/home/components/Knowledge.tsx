import { Container } from "@/components/containers/Container";
import Typography from "@/components/ui/Typography";
import Image from "next/image";

const Knowledge = () => {
	return (
		<section className="my-8">
			<Container className="grid xl:grid-cols-3 items-center justify-center gap-10 ">
				<Typography variant="h2">Notre savoir faire</Typography>

				<div className="flex flex-col  gap-4 items-center justify-center">
					<Image
						src="/images/equipe-sur-un-projet.jpg"
						height={300}
						width={300}
						alt=""
					/>
					<Typography
						className="text-gray-500/90"
						variant="body-sm"
						weight="regular">
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
						cupiditate eos, iste obcaecati amet ut laudantium nostrum aliquam,
						asperiores reprehenderit non at autem provident itaque, quisquam
						consectetur qui temporibus repellendus corrupti quos beatae tempore
						suscipit? Fuga, unde autem. Cupiditate dolor maxime animi temporibus
						sint cumque quod nesciunt inventore explicabo neque.
					</Typography>
				</div>
				<div className="flex flex-col  gap-4 items-center justify-center">
					<Image
						src="/images/femme_tableau.jpg"
						height={300}
						width={300}
						alt=""
					/>
					<Typography
						className="text-gray-500/90"
						variant="body-sm"
						weight="regular">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
						perspiciatis, quo veniam distinctio sit iure possimus mollitia
						voluptatibus numquam aspernatur aperiam delectus saepe? Omnis itaque
						nulla, unde sed quas quibusdam, et nobis consequuntur consectetur
						non iste error natus, maiores asperiores aspernatur repudiandae
						voluptatum. Repellendus, obcaecati.
					</Typography>
				</div>
				<div className="flex  flex-col gap-4 items-center justify-center">
					<Image
						src="/images/sitemap-design.jpg"
						height={300}
						width={300}
						alt=""
					/>
					<Typography
						className="text-gray-500/90"
						variant="body-sm"
						weight="regular">
						{" "}
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
						est. Quibusdam nulla culpa pariatur nobis vitae hic sit
						necessitatibus, provident perspiciatis? Quis amet eius saepe
						deserunt quidem vel beatae sunt nostrum, qui excepturi officia
						incidunt delectus autem aspernatur tempore odit? Beatae, rem totam!
						Nostrum!
					</Typography>
				</div>
			</Container>
		</section>
	);
};

export default Knowledge;
