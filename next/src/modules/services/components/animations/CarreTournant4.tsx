"use client";
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
const CarreTournant4 = () => {
  const [scope, animate] = useAnimate();

  async function myAnimation() {
    await animate(scope.current, { x: 100 });
    await animate(scope.current, { rotate: -90 });
    await animate(scope.current, { scale: 2 });
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
        y: -10,
      },
      {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        duration: 1,
        delay: 0.2,
      }
    );
  }

  useEffect(() => {
    myAnimation();
  }, []);

  return (
    <motion.div ref={scope} className="bg-primary rounded-md w-5 h-5 z-0" />
  );
};

export default CarreTournant4;
