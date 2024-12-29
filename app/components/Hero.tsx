"use client";
import React from "react";
import { Airpods, HeroAirpods } from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { x: 0, y: 70, opacity: 0.25 },
    visible: { x: 0, y: -70, opacity: 1, transition: { delay: 0.05 } },
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="object-cover">
            <Image
              src={Airpods}
              alt="banner"
              width={1200}
              height={100}
              style={{ height: "auto", width: "100%" }}
            />
          </div>
          <div className="hero-airpods">
            <motion.div initial="hidden" animate="visible" variants={variants}>
              <Image
                src={HeroAirpods}
                alt="banner"
                width={400}
                height={50}
                style={{ height: "auto", width: "100%" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
