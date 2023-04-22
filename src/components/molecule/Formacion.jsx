import React from 'react'
import formacionData from '../../data/formacionData'
import LineaDecorativa from '../atoms/LineaDecorativa'
import DescripcionSection from '../atoms/DescripcionSection'

export default function Formacion() {

  const formacion = formacionData.map(formacion => {
    return (
      formacion.tipologia === "Titulacion" ? (
        <div className='w-full p-7 border-2 border-black rounded-[30px] transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150' key={formacion.id}>
          <div>
            <h3 className='text-2xl md:text-4xl xl:text-5xl text-[#EA7A54] leading-none'>#{formacion.anio}</h3>
            <h4 className='text-lg md:text-xl xl:text-2xl text-black leading-tight'>{formacion.titulacion}</h4>
            <p className='text-xs md:text-lg mt-2'>{formacion.institucion}</p>
          </div>
          <div className='mt-5 text-right'>
            <span className={formacion.estado === 'Finalizado' ? 'text-xs px-3 py-1 border-2 border-black rounded-md bg-[#99B7DD]' : 'text-xs px-3 py-1 border-2 border-black rounded-md bg-[#FEDF3E]'}>{formacion.estado}</span>
          </div>
        </div>
      ) : null
    )
  })


  return (
    <section id='Formación' className='mx-auto pt-32 h-fit flex flex-col justify-center items-center px-6 sm:px-16 xl:px-24'>

      <div className='w-full '>
        {/* linea divisoria decorativa */}
        <LineaDecorativa />
        {/* linea divisoria decorativa */}

        {/* descripcion */}
        <DescripcionSection
          titulo="Te muestro mis pequeñas grandes victorias en formación"
        />
        {/* descripcion */}
      </div>

      {/* contenedor de cards */}
      <div className='w-full h-fit grid lg:grid-cols-2 gap-7 py-10'>
        {formacion}
      </div>
      {/* contenedor de cards */}

    </section>
  )
}
