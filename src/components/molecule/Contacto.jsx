import React from 'react'

export default function Contacto() {
  return (
    <section id='Contacto' className='w-full md:h-[80vh] mx-auto py-32 flex justify-center items-center'>

      <div className='px-6 sm:px-16 xl:px-24 flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10 xl:gap-20'>

        {/* contenedor llamado a la acción */}
        <div className='lg:w-[60%]'>
          <h2 className='text-3xl md:text-4xl xl:text-6xl font-normal lg:leading-none'>¿Te interesó lo que viste?</h2>
          <h3 className='text-xl md:text-2xl text-[#EA7A54] mb-10 md:mb-9 xl:mb-20 mt-2 leading-tight'>Me encantaría que conocieras más acerca de mi perfil y de lo que puedo ofrecer.</h3>
          <p className='text-sm md:text-sm xl:text-lg leading-tight'> Si estás buscando a alguien <strong>comprometida, apasionada y con habilidades en desarrollo web y diseño</strong>, ¡llegaste al lugar correcto!
            <br />
            <br />
            No dudes en contactarme para hablar sobre cómo podemos trabajar juntos.</p>
        </div>
        {/* contenedor llamado a la acción */}

        {/* contenedor contactos */}
        <div className='lg:w-[40%] xl:h-[400px] p-[30px] bg-[#99B7DD] border-2 border-black rounded-[0_50px] flex flex-col justify-center items-center shadow-[10px_10px_0px_rgba(0,0,0,0.25)]'>
          <h4 className='text-xl mb-4 text-center'>Te dejo algunos medios de contacto</h4>
          <a href="https://www.linkedin.com/in/ailenglassmam/" target='_blank' className='w-[60%] py-2 my-2 bg-[#ECECEC] text-center border-2 border-black rounded-md transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150'>LinkedIn</a>
          <a href="mailto:ailenglas97@gmail.com" className='w-[60%] py-2 my-2 bg-[#ECECEC] text-center border-2 border-black rounded-md transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150'>E-Mail</a>
          <a href="tel:+5491159619094" className='w-[60%] py-2 my-2 bg-[#ECECEC] text-center border-2 border-black rounded-md transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150'>WhatsApp</a>
        </div>
        {/* contenedor contactos */}
      </div>
    </section>
  )
}