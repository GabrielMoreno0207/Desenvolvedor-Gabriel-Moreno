import React from 'react'
import proj1 from '../assets/dashboard.png'
// import proj2 from '../assets/proj2.png'
import proj3 from '../assets/lanchonete.png'
import proj4 from '../assets/Group1.png'
import proj5 from '../assets/projetoport.png'
// import proj6 from '../assets/proj6.png'

const Projetos = () => {
  return (
    <div class="py-6 max-w-[1200px] mx-auto" id='projetos'>
        <div class="mx-auto px-4 md:px-8">
            <div class="mb-4 flex items-center justify-between gap-8">
              <div class="flex flex-col gap-4">
                  <h2 class="text-2xl lg:text-3xl text-white">
                      Meus <span>Projetos</span>
                  </h2>
                  <p class="text-gray-500">
                      Projetos web, mobile e prototipação.
                  </p>
                  <p class="text-gray-500">
                      Tenha acesso a todos os projetos através do Github.
                  </p>
              </div>
            </div>
            <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8">

              <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg  md:col-span-1 md:h-80">
                  <img src={proj1} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                  <img src={proj4} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                  <img src={proj3} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                  <img src={proj5} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

            </div>
        </div>
    </div>
  )
}

export default Projetos
