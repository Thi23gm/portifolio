import React from 'react';
import Image from "../assets/avatar.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section id='home' className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className=" flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className="text-[55px] font-bold leading-[0.8] lg:text-[100px]">
              THIAGO <span>GOMES</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className="mb-6 text[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]">
              <span className='mr-2 text-white'>I am a</span>
              <TypeAnimation sequence={[
                'Softwere Engineer',
                2000,
                'Programmer',
                2000,
                'Studant',
                2000,
              ]}
              speed={50}
              className="text-[#F0B51F]"
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
              <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">
              Estudante de Ciências da Computação na PUC Minas e desenvolvedor Full Stack com experiência em Javascript, NodeJS e ReactJS. Habilidades em bancos de dados, versionamento e modelos ágeis. Comprometido com soluções de qualidade e busca constante por aprimoramento.
              </motion.p>
              <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                <Link to='work' smooth={true} className="text-gradient btn-link">My Protifolio</Link>
              </motion.div>
            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a target='blank' href="https://github.com/Thi23gm">
                <FaGithub/>
              </a>
              <a target='blank' href="https://www.instagram.com/thi23gm/">
                <FaInstagram/>
              </a>
              <a target='blank' href="https://www.linkedin.com/in/thiago-martins-9679861b0/">
                <FaLinkedin/>
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="Foto" />
          </motion.div>
        </div>
      </div>
      
    </section>
  )
};

export default Banner;
