"use client";
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
const CarreSepareTournant = () => {
  const [scope, animate] = useAnimate();

  async function myAnimation() {
    await animate(scope.current, { x: 100 });
    await animate(scope.current, { rotate: -90 });
    await animate(scope.current, { scale: 1.5 });
    await animate(scope.current, { rotate: 0 });
    await animate(scope.current, { scale: 1 });

    animate(
      scope.current,
      {
        rotate: 90,
      },
      {
        repeat: Infinity,
        ease: "linear",
        duration: 1,
      }
    );
    animate(
      scope.current,
      {
        x: -200,
      },
      {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        duration: 4,
      }
    );
    animate(
      scope.current,
      {
        scale: 0,
      },
      {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        duration: 2,
      }
    );
  }

  useEffect(() => {
    myAnimation();
  }, []);

  return (
    <motion.div
      ref={scope}
      className=" triangle-topleft rounded-md absolute top-[70%] left-[80%] transform -translate-x-1/2 -translate-y-1/2  z-0"
    />
  );
};

export default CarreSepareTournant;
