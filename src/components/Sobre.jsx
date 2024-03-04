import React from 'react'
import eupic from '../assets/profile.png'
const Sobre = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id='sobre'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

            <div>
                <div className='w-[400px] h-full'>
                    <img
                     src={eupic}
                     alt=""
                     className='rounded-xl w-[300px] sm:w-[400px] mx-auto h-auto '
                    //  className='object-cover bg-gray-700 rounded-xl h-[400px] filter grayscale brightness-50'
                     />

                </div>
            </div>

            <div>
                <div className='p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>Sobre</h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>
                        Olá, sou um desenvolvedor formado em Ciências da Computação e entusiasta do design. Tenho o hobby de jogar nas horas vagas. Sempre atuei no frontend e sempre aspirei trabalhar com o desenvolvimento e prototipação de sites e apps.
                        </p>
                    </div>

                </div>

                <div className='flex mt-10 items-center gap-7'>
                <div className="bg-[#333333]/40 p-5 rounded-lg">
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>4
                        <span>+</span>

                    </h3>
                    <p><span className='md:text-base text-xs'>Anos de experiencia</span></p>
                </div>

                <div className="bg-[#333333]/40 p-5 rounded-lg">
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>5
                        <span>+</span>

                    </h3>
                    <p><span className='md:text-base text-xs'>Dominio de Tecnologias</span></p>
                </div>

                <div className="bg-[#333333]/40 p-5 rounded-lg">
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>10
                        <span>+</span>

                    </h3>
                    <p><span className='md:text-base text-xs'>Projetos</span></p>
                </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Sobre