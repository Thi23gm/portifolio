import React from 'react';
import Logo from "../assets/logo.svg";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="py-8">
      <div className='container mx-auto'> 
        <div className='flex justify-between items-center'>
          <img src={Logo} alt="Logo" />
          <Link to='contact' smooth={true} ><button className=' btn btn-sm'> Contact Me </button></Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
