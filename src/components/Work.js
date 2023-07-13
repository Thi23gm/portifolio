import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";


const Work = () => {
  return (
    <section id='work' className="section">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0'>
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}}>
              <h2 className='h2 text-[#F0B51F] leading-tight'>Meus últimos<br/>Trabalhos</h2>
              <p className='max-w-sm mb-11'>Desenvolvi esses projetos pessoais com o objetivo de aprender e aprofundar meus conhecimentos em diferentes tecnologias.</p>
              <a target='blank' href="https://github.com/Thi23gm"><button className='btn btn-sm'>Veja todos os Projetos</button></a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/40 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
                <a target='blank' href="https://github.com/Thi23gm/netflix-clone-react"><span className='text-gradient'>Netflic clone com ReactJs e NodeJs</span></a>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
                <a target='blank' href="https://github.com/Thi23gm/netflix-clone-react"><span className='text-3xl text-white'>THIAGOFLIX</span></a>
              </div>
            </motion.div>
          </div>
          <div className='flex-1 flex flex-col gap-y-10'>
            <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/40 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
                <a target='blank' href="https://github.com/Thi23gm/Time_Capsule"><span className='text-gradient'>Evento de programação da Rocketseat</span></a>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
                <a target='blank' href="https://github.com/Thi23gm/Time_Capsule"><span className='text-3xl text-white'>NLW Spacetime</span></a>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/40 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50'>
                <a target='blank' href="https://github.com/Thi23gm/JavaSpring-Project"><span className='text-gradient'>Projeto de CRUD com Java Spring</span></a>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50'>
                <a target='blank' href="https://github.com/Thi23gm/JavaSpring-Project"><span className='text-3xl text-white'>CRUD Spring Boot</span></a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Work;
