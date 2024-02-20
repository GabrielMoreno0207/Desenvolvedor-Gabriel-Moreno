import React from 'react'

const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id='about'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

            <div>
                <div className='w-[400px] h-full'>
                    <img
                     src=""
                     alt=""
                     className='object-cover bg-gray-700 rounded-xl h-[300px] filter grayscale brightness-50'
                     />

                </div>
            </div>

            <div>
                <div className='p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>Sobre<span className='primary-text'>Mim</span></h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis reprehenderit suscipit itaque molestiae accusantium a odio repellat provident. Aperiam labore adipisci illum ut tempore architecto iure dolorum dicta laborum perferendis?
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
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>10
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

export default About