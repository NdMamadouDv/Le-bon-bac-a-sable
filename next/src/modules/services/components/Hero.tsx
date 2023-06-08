import { Container } from "@/components/containers/Container";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen py-36 ">
      <Container>
        <div className="grid">
          <Typography
            variant="body-lg"
            component="h1"
            className=" font-semibold"
            font="description"
          >
            {" "}
            Nos services
          </Typography>
          <Typography
            variant="display"
            component="h2"
            font="title"
            className="font-semibold text-right uppercase md:mt-24"
          >
            Votre agence web spécialiste du digital
          </Typography>
          <div className="flex w-full justify-between items-end md:mt-32">
            {" "}
            <Typography
              variant="body-sm"
              font="description"
              component="p"
              className="max-w-lg font-semibold"
            >
              Une bonne communication est essentiel en 2023, et surtout pour les
              entreprises.Fort de plusieurs annéees dans le développement de
              site internet, nous avons mis en place des methodes faites pour
              satisfaire nos clients.
            </Typography>
            <Button
              text="Découvrez notre travail"
              variant="secondary"
              size="small"
              className=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
