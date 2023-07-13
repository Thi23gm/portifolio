import React from 'react';
import {motion} from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id='about' className='section'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend bg-top"></motion.div>
          <div className="flex-1">
            <motion.h2 variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='h2 text-[#F0B51F]'>Skills | Tecnologia</motion.h2>
            <motion.h3 variants={fadeIn('left', 0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='h3 mb-4'>Habilidades abrangentes para desenvolvimento de software.</motion.h3>
          <motion.p variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='mb-6'>Com experiência em Java, C/C++, Flutter, Javascript, ReactJS, NodeJs, Typescript e Git & Github. Minha capacidade de colaborar efetivamente em equipes de desenvolvimento me permite enfrentar desafios com agilidade e entregar resultados excepcionais. Estou constantemente aprimorando minhas habilidades e aprendendo novas tecnologias.</motion.p >
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='flex gap-x-8 items-center mt-4'>
            <Link to='contact' smooth={true}><button className='btn btn-lg'>Contact Me</button></Link>
            <Link to='work' smooth={true} className='text-gradient btn-link'>
              MyPortifilio
            </Link>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
