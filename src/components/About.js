import React from 'react';
import { useInView } from 'react-intersection-observer';
import {motion} from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section id='about' className='section'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend bg-top"></motion.div>
          <div className="flex-1">
            <motion.h2 variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='h2 text-accent'>About Me</motion.h2>
            <motion.h3 variants={fadeIn('left', 0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='h3 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </motion.h3>
          <motion.p variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero vel minus perspiciatis, asperiores optio? Veniam nisi, neque, cum placeat tempore, adipisci exercitationem rem nihil nulla aliquam accusamus delectus a?</motion.p >
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='flex gap-x-8 items-center mt-4'>
            <button className='btn btn-lg'>Contact Me</button>
            <a href="#" className='text-gradient btn-link'>
              MyPortifilio
            </a>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
