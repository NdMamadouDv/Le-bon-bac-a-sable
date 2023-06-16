"use client";
import StickyBlock from "@/components/ui/StickyLottie";
import Typography from "@/components/ui/Typography";
import React from "react";
import ordinateur from "@/data/lottie/Ordinateur-lottie.json";
import marketingDigital from "@/data/lottie/Marketing-digital.json";
import rankingGoogle from "@/data/lottie/Referencement-web.json";
import Button from "@/components/ui/Button";
import Link from "next/link";
const Compétences = () => {
  return (
    <div>
      <div id="developpement-web">
        <StickyBlock
          reverse={true}
          animation={ordinateur}
          title="Création de site web."
        >
          <Typography
            variant="body-xs"
            theme="secondary"
            font="description"
            component="p"
          >
            En tant qu'expert en développement web, je souhaite partager notre
            histoire avec vous. Notre parcours a commencé avec une passion pour
            la création d'expériences web engageantes pour les utilisateurs. De
            fil en aiguilles, les expériences se sont transformés en expertise.
            Avec le temps, j'ai compris l'importance cruciale de créer une
            expérience utilisateur fluide qui résonne auprès de votre public.
          </Typography>
          <Typography variant="body-sm" font="description" component="p">
            Notre approche repose sur une compréhension approfondie de vos
            objectifs commerciaux, de votre public cible et des besoins des
            utilisateurs. Nous collaborons avec vous à chaque étape pour créer
            des solutions web sur mesure adaptées à vos besoins uniques. Que
            vous ayez besoin d'un site web simple, d'une application web
            personnalisée ou d'une plateforme e-commerce complète, nous
            possédons les compétences et l'expertise nécessaires pour construire
            une solution qui génère des résultats. Laissez-nous vous aider à
            donner vie à votre vision grâce à un design intuitif, une
            fonctionnalité intelligente et une approche centrée sur
            l'utilisateur.
          </Typography>
          <Link href="/services/creation-de-site-web" className="">
            {" "}
            <Typography
              variant="body-sm"
              component="p"
              className=" font-semibold hover:underline underline-offset-4 text-right"
              font="description"
            >
              En savoir plus
            </Typography>
          </Link>
        </StickyBlock>
      </div>
      <div id="marketing-digital">
        <StickyBlock animation={marketingDigital} title="Marketing digital">
          <Typography variant="body-sm" font="description" component="p">
            fef
          </Typography>
        </StickyBlock>
      </div>
      <div id="referencement-web">
        <StickyBlock
          reverse={true}
          animation={rankingGoogle}
          title="Référencement de votre site internet"
        >
          <Typography variant="body-sm" font="description" component="p">
            En tant que professionnel du marketing digital, nous comprenons
            l'importance de votre visibilité en ligne. Avec notre expertise en
            SEO, nous vous aidons à positionner votre entreprise au sommet des
            résultats de votre secteur. Nous effectuons une recherche
            approfondie des mots clés, optimisons votre contenu et mettons en
            place des stratégies de backlinking efficaces. Faites confiance à
            notre savoir-faire pour attirer un trafic qui veux en savoir sur
            vous ! Faite appel à nos professionnels pour booster votre activité
            sur internet.
          </Typography>
          <Link href="/services/referencement-web" className="">
            {" "}
            <Typography
              variant="body-sm"
              component="p"
              className=" font-semibold hover:underline underline-offset-4 text-right"
              font="description"
            >
              En savoir plus
            </Typography>
          </Link>
        </StickyBlock>
      </div>
    </div>
  );
};

export default Compétences;
