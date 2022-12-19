"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title={"People on the World"} textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        {/* <div className="absolute top-32 left-48 w-[250px] h-[200px] p-[6px] rounded-3xl bg-[#5d6680]">
          <img
            src="planet-02-mini.png"
            alt="planet-02-mini"
            className="w-full h-full relative"
          />

          <img
            src="people-04.png"
            alt="people"
            className="absolute top-20 left-6 w-[35px] h-[35px] z-30"
          />
          <img
            src="people-05.png"
            alt="people"
            className="absolute top-20 left-10 w-[35px] h-[35px] z-20"
          />
          <img
            src="people-06.png"
            alt="people"
            className="absolute top-20 left-14 w-[35px] h-[35px] z-10"
          />

          <h2 className="absolute left-24 bottom-12 text-center font-medium sm:text-[18px] text-[18px] text-white">
            +264 joined
          </h2>
          <h2 className="absolute left-6 bottom-5 text-center font-medium sm:text-[20px] text-[20px] text-white">
            The Upside Down
          </h2>
        </div>

        <div className="absolute top-10 right-40 w-[250px] h-[200px] p-[6px] rounded-3xl bg-[#5d6680]">
          <img
            src="planet-05-mini.png"
            alt="planet-05-mini"
            className="w-full h-full relative"
          />

          <img
            src="people-04.png"
            alt="people"
            className="absolute top-20 left-6 w-[35px] h-[35px] z-30"
          />
          <img
            src="people-05.png"
            alt="people"
            className="absolute top-20 left-10 w-[35px] h-[35px] z-20"
          />
          <img
            src="people-06.png"
            alt="people"
            className="absolute top-20 left-14 w-[35px] h-[35px] z-10"
          />

          <h2 className="absolute left-24 bottom-12 text-center font-medium sm:text-[18px] text-[18px] text-white">
            +264 joined
          </h2>
          <h2 className="absolute left-6 bottom-5 text-center font-medium sm:text-[20px] text-[20px] text-white">
            Hawkins Labs
          </h2>
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
