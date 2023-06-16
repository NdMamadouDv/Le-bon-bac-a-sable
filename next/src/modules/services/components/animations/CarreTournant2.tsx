"use client";
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
const CarreTournant2 = () => {
  const [scope, animate] = useAnimate();

  async function myAnimation() {
    await animate(scope.current, { x: -100 });
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
        x: -600,
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
      className="bg-secondary rounded-md w-5 h-5 absolute top-[70%] left-[100%] lg:left-[80%] transform -translate-x-1/2 -translate-y-1/2  z-0"
    />
  );
};

export default CarreTournant2;
