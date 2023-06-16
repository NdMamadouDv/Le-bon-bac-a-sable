"use client";
import { Container } from "@/components/containers/Container";
import Typography from "@/components/ui/Typography";
import React, { useEffect } from "react";
import { useAnimate, useInView, usePresence } from "framer-motion";
import ScrollLinkBottom from "@/components/ui/ScrollLinkBottom";
import Compétences from "./Compétences";
const Overview = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  async function myAnimation() {
    await animate(scope.current, { x: -100 });

    if (isPresent) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: 1 });
        await animate("li", { opacity: 1, x: 0 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate("li", { opacity: 0, x: -100 });
        await animate(scope.current, { opacity: 0 });
        safeToRemove();
      };

      exitAnimation();
    }
  }
  useEffect(() => {
    myAnimation();
  }, [isPresent]);

  return (
    <section
      className="min-h-screen bg-secondary-content/30 px-4 md:px-6 py-16"
      id="overview"
    >
      <Container className="space-y-16">
        <Typography
          component="h2"
          variant="h2"
          font="title"
          className=""
          weight="bold"
        >
          Notre savoir faire
          <Typography
            component="span"
            variant="h2"
            font="title"
            className="text-primary"
            weight="bold"
          >
            .
          </Typography>
        </Typography>

        {/* Créer un espace pour parvenir directement aux sections */}

        <ul className=" w-full text-right" ref={scope}>
          <li className="">
            <ScrollLinkBottom
              href="#developpement-web"
              className="hover:underline"
            >
              <Typography
                component="span"
                variant="body-lg"
                font="main"
                className=""
                weight="bold"
              >
                Developpement web
              </Typography>
              <Typography
                component="span"
                variant="body-lg"
                font="main"
                className="text-primary-focus"
                weight="bold"
              >
                .
              </Typography>
            </ScrollLinkBottom>
          </li>
          <li className="">
            <ScrollLinkBottom
              href="#marketing-digital"
              className="hover:underline"
            >
              {" "}
              <Typography
                component="span"
                variant="body-lg"
                font="main"
                className=""
                weight="bold"
              >
                Marketing digital
              </Typography>
              <Typography
                component="span"
                variant="body-lg"
                font="main"
                className="text-primary-focus"
                weight="bold"
              >
                .
              </Typography>
            </ScrollLinkBottom>
          </li>
          <li className="">
            <ScrollLinkBottom
              href="#referencement-web"
              className="hover:underline"
            >
              <Typography
                component="span"
                variant="body-lg"
                font="main"
                className=""
                weight="bold"
              >
                Référencement de votre site internet
              </Typography>
              <Typography
                component="span"
                variant="body-lg"
                font="main"
                className="text-primary-focus"
                weight="bold"
              >
                .
              </Typography>
            </ScrollLinkBottom>
          </li>
        </ul>

        <Compétences />
      </Container>
    </section>
  );
};

export default Overview;
