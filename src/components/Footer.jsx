import React from 'react';
import {FaGithubSquare, FaInstagram, FaArrowCircleUp} from 'react-icons/fa';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-12 w-full max-w-3xl mx-auto border-t border-gray-500 text-center py-8 relative">
        <p className="text-green-500">Desenvolvido por Gabriel Moreno</p>
        <div className="inline-flex justify-center items-center text-green-500 gap-4 text-3xl my-4">
            <a href="https://github.com/GabrielMoreno0207" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare/>
            </a>
            <a href="https://www.instagram.com/g4briel_moreno/" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </a>
        </div>
       
        {/* <button onClick={scrollToTop} style={{position: 'fixed', bottom: '20px', right: '30px', fontSize: '48px', color: '#4CAF50', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}} title="Voltar ao topo">
            <FaArrowCircleUp />
        </button> */}
    </div>
  )
}

export default Footer;
