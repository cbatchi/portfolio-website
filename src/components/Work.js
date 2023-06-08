import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProjectOne from "../assets/portfolio-img1.png";
import ProjectTwo from "../assets/portfolio-img2.png";
import ProjectThree from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                Mes dernieres réalisations
              </h2>
              <p className="max-w-sm mb-16">
                Les projets de mon portfolio ont été réalisés dans le cadre de
                ma formation en développement et de mes expériences
                professionnelles.
              </p>
              <button className="btn btn-sm">
                <a target="_blank" href="https://github.com/cbatchi">
                  Voir les projets
                </a>
              </button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={ProjectOne}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-center">
                  My Cinema Catalogue App <br />
                  <a
                    className="btn btn-sm"
                    target="_blank"
                    href="https://github.com/cbatchi/my_cinema"
                  >
                    Voir le projet
                  </a>
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-[1rem] text-white">
                  Un site pour decouvrir les nouveautés au cinema, developper en
                  Laravel{" "}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Project number 2 */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={ProjectTwo}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-center">
                  Developper en PHP avec wordpress et librairies externes <br />
                  <a
                    className="btn btn-sm"
                    target="_blank"
                    href="https://ospariegeois.com/"
                  >
                    Voir le projet
                  </a>
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-[1rem] text-white">
                  Ospariegeois Sauna & Spa, une site de réservations de chambre
                  à la saison
                </span>
              </div>
            </div>

            {/*  */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={ProjectThree}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient text-center">
                  Developper en css, js avec le pre-processeur SASS <br />
                  <a
                    className="btn btn-sm"
                    href="https://oclock-app-d5d55.web.app/"
                    target="_blank"
                  >
                    Voir le projet
                  </a>
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-[1rem] text-white">
                  Une horloge élégante affichant l'heure actuelle
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
