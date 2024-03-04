import React from 'react'
import profilepic from '../assets/languages.png'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div>
      <div className='my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center' id='inicio'>

        <div className=' flex-col my-auto mx-auto'>
          <p className='md:text-5xl sm:text-xl font-bold text-gray-200'>Salve! Eu sou o Gabriel</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            <TypeAnimation
              sequence={[
                "Dev Frontend",
                1000,
                "UX/UI Designer",
                1000,
                "Dev mobile",
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>Transformando suas ideias em realidade! </p>
          </div>
          <div className='text-5xl flex justify-start gap-16 my-7 text-green-500'>
            <a href="https://www.linkedin.com/in/gabriel-morenodev/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/GabrielMoreno0207" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/g4briel_moreno/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram />
            </a>
          </div>
          <div class="relative inline-flex group my-3">
            <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44ff98] via-[#44ff44] to-[#9eff5e] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 ">
            </div>
            <a href="https://github.com/GabrielMoreno0207/C-rriculo/files/10427264/Curriculo-GabrielM.pdf" title='Download CV' role='button' class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Download CV</a>
          </div>
        </div>
        <div className='my-auto'>
          <img className='rounded-xl w-[300px] sm:w-[500px] mx-auto h-auto ' src={profilepic} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Hero
