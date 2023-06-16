import { Container } from "@/components/containers/Container";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import CarreTournant3 from "./animations/CarreTournant3";
import CarreTournant4 from "./animations/CarreTournant4";
import CarreTournant5 from "./animations/CarreTournant5";
import ScrollLinkTop from "@/components/ui/ScrollLinkTop";

const Hero = () => {
  return (
    <section className="min-h-screen md:py-32 py-12 px-4 md:px-6">
      <Container className="">
        <div className="flex flex-col md:flex-row  relative">
          <div className="absolute top-[-10%] left-[-5%]">
            {/* <CarreTournant /> */}
            {/* <CarreSepareTournant /> */}
            <div className=" min-w-min md:flex hidden justify-between w-36">
              {" "}
              {/* Demander à Alex pour les types pour recuperer puis definir top et left et couleurs */}
              <CarreTournant3 />
              <CarreTournant4 />
              <CarreTournant5 />
            </div>
          </div>
          <div className="z-15 relative">
            <Typography
              variant="display"
              component="h1"
              font="title"
              className="font-semibold text-right uppercase "
            >
              Votre agence web spécialiste du digital
            </Typography>
          </div>
        </div>
        <div className=" max-w-xl flex flex-col md:items-start items-center md:gap-12 gap-8 mt-16">
          <Typography
            variant="body-sm"
            font="description"
            component="p"
            className=" font-semibold text-center md:text-left text-secondary"
          >
            Vous avez bâti une entreprise, incroyable ! L'objectif est de faire
            en sorte que les gens s'en souviennent. Nous sommes là pour aider
            des entreprises comme la vôtre à identifier ce qui les rend uniques
            et à les transformer en une expérience en ligne exceptionnelle. Ces
            expériences stimulent la croissance en ligne et, surtout, améliorent
            vos résultats.
          </Typography>
          <Button
            text="Découvrez notre travail"
            variant="primary"
            size="small"
            className="mx-auto md:mx-0"
          />
        </div>
        <ScrollLinkTop href="/services#overview" scroll={false}>
          <Typography
            variant="body-lg"
            component="p"
            className=" font-semibold hover:underline underline-offset-4 text-right"
            font="description"
          >
            Decouvrez nos services
          </Typography>
        </ScrollLinkTop>
      </Container>
    </section>
  );
};

export default Hero;
