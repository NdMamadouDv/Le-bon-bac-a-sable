import { Container } from "@/components/containers/Container";
import Typography from "@/components/ui/Typography";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen  py-24">
      <Container>
        <Typography variant="h1" component="h1" theme="primary" font="main">
          {" "}
          Nos services
        </Typography>
      </Container>
    </section>
  );
};

export default Hero;
