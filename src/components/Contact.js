import React, { useState } from 'react';
import {motion} from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import Alert from '@mui/material/Alert';

const Contact = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlertErr, setShowAlertErr] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (nome === '' || email === '' || message === '') {
      setShowAlert(false);
      setShowAlertErr(true);
      return;
    }

    const templateParams = {
      from_nome: nome,
      message: message,
      email: email,
    };

    emailjs
      .send('service_nl3q6ee', 'template_p0in56h', templateParams, '4uP66Y90u8FhUahax')
      .then((response) => {
        setShowAlertErr(false);
        setShowAlert(true);
        setNome('');
        setEmail('');
        setMessage('');
      });
  }

  return (
    <section id="contact" className="lg:section py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex justify-start items-center">
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h4 className="text-xl uppercase text-[#F0B51F] font-medium mb-2 tracking-wide">
                ENTRAR EM CONTATO
              </h4>
              <h2 className="text-[45px] lg:text-[75px] leading-none mb-3">
                Vamos Trabalhar
                <br />
                Juntos!
              </h2>
              <p className="max-w-sm mb-16">WhatsApp <br /> 31 97142-9266</p>
            </motion.div>
          </div>
          <motion.form
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={sendEmail}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#F0C51F] transition-all "
              type="text"
              placeholder="Seu Nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              id=""
            />

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#F0C51F] transition-all "
              type="text"
              placeholder="Seu E-Mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id=""
            />

            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-[#F0C51F] transition-all resize-none mb-12"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Sua Mensagem"
            ></textarea>

            {showAlertErr && (
              <Alert className='mt-[-30px]' severity="error">Por favor, preencha todos os campos.</Alert>
            )}

            {showAlert && (
              <Alert className='mt-[-30px]' severity="success">E-mail enviado com sucesso!</Alert>
            )}

            <button className="btn btn-lg" type="submit" value="Enviar">
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
