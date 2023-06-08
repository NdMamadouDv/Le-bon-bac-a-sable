import { Container } from "@/components/containers/Container";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#333] text-[#333] ">
      <Container className="  min-h-screen">
        <div className=" h-full grid items-center justify-center py-36">
          <div className="space-y-10 lg:space-y-12">
            <Typography
              variant="h1"
              component="h1"
              weight="medium"
              className=" text-white "
            >
              Créons ensemble un site web qui vend.
            </Typography>
            <Typography variant="lead" className="lg:max-w-xl text-white">
              Coder est difficile, et vous n'avez pas de temps. Ca tombe bien,
              nos équipes de développeur dévoués ont mis en place des
              technologies pour créer les sites internet de demain.
            </Typography>

            <Link href="/editor">
              {" "}
              <Typography
                variant="body-base"
                theme="customize"
                className="mt-8  text-white"
              >
                Essayer maintenant
              </Typography>{" "}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
