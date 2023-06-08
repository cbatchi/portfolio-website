import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CV from "../assets/cv.pdf";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 gap-x-20 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-about bg-contain flex-1 bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mb-8 leading-10">
              À la découverte de mon univers créatif
            </h2>
            <h3 className="mb-4">
              Developpeur web fullstack JAVASCRIPT - NODE JS - PHP PYTHON
            </h3>
            <p className="mb-6">
              Passionné par le développement web fullstack, j'ai commencé mon
              parcours en tant qu'autodidacte avant de consolider mes
              compétences grâce à une formation complémentaire et une expérience
              professionnelle de 2 ans. Chaque jour, je m'investis dans une
              veille technologique continue pour rester à la pointe des
              dernières tendances et améliorer mes connaissances. Mon portfolio
              est le reflet de mon amour pour le code, démontrant mon engagement
              à fournir des solutions créatives et performantes. Bienvenue dans
              mon univers où l'apprentissage est une passion constante.
            </p>

            {/* stats des projetcs */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-12">
              <div>
                <div className="font-tertiary text-[40px]  text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Années <br /> d'experiences
                </div>
              </div>

              <div>
                <div className="font-tertiary text-[40px]  text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projets <br /> Réalisés
                </div>
              </div>

              <div>
                <div className="font-tertiary text-[40px]  text-gradient mb-2">
                  +
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Verres de <br /> Café
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contactez moi</button>
              <a
                href={CV}
                target="_blank"
                download={false}
                className="text-gradient btn-link"
              >
                Mon CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
