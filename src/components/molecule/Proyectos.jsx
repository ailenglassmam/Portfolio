import React from 'react'
import LineaDecorativa from '../atoms/LineaDecorativa'
import DescripcionSection from '../atoms/DescripcionSection'
import proyectosData from '../../data/proyectosData'

export default function Proyectos() {

  const proyectos = proyectosData.map(proyecto => {
    return(
      <div className='min-w-[300px] p-7 border-2 border-black rounded-[0_50px] transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150'>

      <div>
        <h3 className=' text-3xl md:text-5xl xl:text-7xl text-[#EA7A54] leading-none'>#{proyecto.id}</h3>
        <h4 className='text-lg md:text-xl xl:text-2xl pb-4'>{proyecto.titulo}</h4>
        <p className='text-xs md:text-sm mt-[9px]'>{proyecto.institucion}</p>
        <p className='text-sm md:text-md mt-[24px] mb-[30px]'>{proyecto.descripcion}</p>
        <span className={`text-xs px-3 py-1 border-2 border-black rounded-md ${proyecto.tipologia === 'Front End' ? 'bg-[#99B7DD]' : proyecto.tipologia === 'Back End' ? 'bg-[#F8D44C]' : proyecto.tipologia === 'Framework' ? 'bg-[#EA7A54]' : 'bg-[#A9D86C]'}`}>{proyecto.tipologia}</span>
      </div>

      <div className='mt-[18px] text-right'>
        <a href={proyecto.link} target='_blank' className='md:text-[18px] transition hover:text-[#EA7A54] cursor-pointer duration-150'>Ver Proyecto</a>
      </div>

    </div>
    )
  })

  return (
    <section id='Proyectos' className='w-full mx-auto py-32 flex flex-col justify-center items-center'>

      {/* contenedor de texto */}
      <div className='px-6 sm:px-16 xl:px-24'>
        {/* linea divisoria decorativa */}
        <LineaDecorativa />
        {/* linea divisoria decorativa */}

        {/* descripcion */}
        <div className='flex flex-col md:flex-row justify-between'>
        <DescripcionSection
          titulo="Proyectos"
          descripcion="Durante mi paso por las distintas capacitaciones en las cuales participé, tuve la oportunidad de desarrollar diferentes proyectos desde el desarrollo exclusivo del Front End como así también, del desarrollo Back End. Proyectos de código puro y otros empleando frameworks."
        />
        </div>
        {/* descripcion */}
      </div>
      {/* contenedor de texto */}

      {/* contenedor de cards */}
      {/* pb-10 */}
      <div className='w-full h-fit px-6 sm:px-16 xl:px-24 flex gap-7  py-10 overflow-x-auto'>
        {proyectos}
      </div>
      {/* contenedor de cards */}

      {/* contenedor para link a github personal para todos los códigos */}
      <div className='pt-6 sm:pt-16 xl:pt-10 text-center'>
        <h3 className='text-lg md:text-xl xl:text-2xl text-black'>¡Explora todos mis proyectos en <a href="https://github.com/ailenglassmam" target='_blank' className='cursor-pointer underline decoration-wavy transition hover:text-[#EA7A54] duration-150'>GitHub</a>!</h3>
      </div>

    </section>
  )
}
