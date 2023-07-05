import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  const services = [
    {
      name: "ReactJs API",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus laudantium necessitatibus porro",
      link: "teste",
    },
    {
      name: "ReactJs API",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus laudantium necessitatibus",
      link: "teste",
    },
    {
      name: "ReactJs API",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ",
      link: "teste",
    },
  ]

  return (
    <section id='services' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 mb-12 lg:mb-0'>
            <motion.h2 variants={fadeIn('down', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='h2 text-accent mb-6'>What I Do</motion.h2>
            <motion.h3 variants={fadeIn('down', 0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='h3 max-w-[455px] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, facere adipisicing elit. Corporis, facere.</motion.h3>
            <motion.button variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='btn btn-sm'>See My Work</motion.button>
          </div>
          <div className="flex-1">
            <div>
              {services.map((service, index) => {
                const {name, description, link} = service;
                return (
                  <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-center ml-6'>
                      <a className='w-9 h-9 flex justify-center items-center' href={link}><BsArrowUpRight /></a>
                      <a className='text-sm' href={link}>Learn More</a>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;
