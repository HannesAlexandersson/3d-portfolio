import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => {

  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col rounded-[20px]'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"        
      >
        I am a soon to be fullstack developer with a passion for programming.
        I have a background in as a public servant and have worked my entire life in the public healthcare system.
        My background as a nurse have given me a unique perspective on how to approach problems and how to work with people.
        I have always had a passion for technology and have been working on my programming skills for the past years.
        My education is from Yrgo, wich is recognized as one of the best schools in Gothenburg for programming by the branch itself.
        I strive to build user-friendly and accessible applications that are both visually appealing and functional. I always want the customer
        to feel included in the process and I always strive to deliver the best possible product.
        I can create websites and applications using modern technologys such as React, Next, Node, Express, MongoDB, PostgreSQL, and more.
        Whatever the customer needs I can deliver. I try to stay away from old outdated techs like Wordpress even though it is still popular and reliable, its imo outdated and is slowly getting faded out.
        With an modern techstack you can future proof your application and make it easier to maintain and update.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  )
}
//wrap the export with the HOC, first pass the component being wrapped, and then the id
export default SectionWrapper(About, "about")