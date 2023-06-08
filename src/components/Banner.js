import React from "react";
import Avatar from "../assets/avatar.png";
import { FaGithub, FaLink, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Claude <span className="capitalize">Batchi</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">Je suis un</span>
              <TypeAnimation
                sequence={[
                  "Developpeur web fullstack",
                  2000,
                  "Passionné de gaming & Musique",
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Développeur web fullstack passionné, créant des expériences
              utilisateur exceptionnelles en utilisant les dernières
              technologies pour des applications web dynamiques et réactives.
              Expert en développement de sites web personnalisés, résolvant les
              problèmes complexes avec des solutions innovantes et performantes.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contactez moi</button>
              <a
                href="#work"
                className="btn-link capitalize lg:first-letter:uppercase text-gradient"
              >
                mon portfolio
              </a>
            </motion.div>
            {/* social */}
            <SocialLink />
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden mx-auto lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img className="w-[100%]" src={Avatar} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
    >
      <a href="">
        <FaGithub />
      </a>
      <a href="">
        <FaLinkedin />
      </a>
    </motion.div>
  );
};

export default Banner;
