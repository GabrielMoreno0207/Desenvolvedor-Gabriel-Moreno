import React from 'react';
import {FaGithubSquare, FaInstagram, FaArrowCircleUp} from 'react-icons/fa'; // Importando um ícone de seta mais apropriado para o botão de voltar ao topo

const Footer = () => {
  // Função para rolar a página até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-12 w-full max-w-3xl mx-auto border-t border-gray-500 text-center py-8 relative">
        <p className="text-gray-500">Desenvolvido por Gabriel Moreno</p>
        <div className="inline-flex justify-center items-center text-gray-500 gap-4 text-3xl my-4">
            <a href="https://github.com/SEU_USUARIO" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare/>
            </a>
            <a href="https://instagram.com/SEU_USUARIO" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </a>
        </div>
        {/* Botão para voltar ao topo */}
        <button onClick={scrollToTop} style={{position: 'fixed', bottom: '20px', right: '30px', fontSize: '48px', color: '#4CAF50', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}} title="Voltar ao topo">
            <FaArrowCircleUp />
        </button>
    </div>
  )
}

export default Footer;
