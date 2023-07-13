import React from 'react';
import { BiTime } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from 'react-scroll';


const Services = () => {
  const services = [
    {
      name: "Liga Sistemas",
      description: "Realizei suporte para usuários do software da empresa, trabalhando com a equipe de suporte para documentar e resolver os problemas mais frequentes do softwere, acompanhei desenvolvimentos de novas ferramentas do softwere.",
      yaer: "7 meses",
    },
    {
      name: "Estação da Lingerie",
      description: "Responsável pelo gerenciamento de estoque e controle de vendas na loja, desenvolvi um sistema de CRUD em Java que gerenciava as vendas e o estoque de mercadorias da loja",
      yaer: "1 ano e 1 mês",
    },
  ]

  return (
    <section id='services' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 mb-12 lg:mb-0'>
            <motion.h2 variants={fadeIn('down', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='h2 text-[#F0B51F] mb-6'>Experiências</motion.h2>
            <motion.h3 variants={fadeIn('down', 0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='h3 max-w-[455px] mb-8'>Minhas Experiências Profissionais e Projetos na área de Desenvolvimento de Software.</motion.h3>
            <Link  to='work' smooth={true} ><motion.button variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='btn btn-sm'>Veja meus trabalhos</motion.button></Link>
          </div>
          <div className="flex-1">
            <div>
              {services.map((service, index) => {
                const {name, description, yaer} = service;
                return (
                  <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='border-b border-white/20 h-[166px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-center ml-6'>
                      <BiTime className='text-[#F0C51F] w-5 h-5 flex justify-center items-center'/>
                      <p className='text-sm text-[#F0C51F]'>{yaer}</p>
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
