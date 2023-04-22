import React from 'react'
import avatar from '/images/avatar-3.png'
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <section id='Inicio' className='mx-auto py-24 lg:py-32 px-6 sm:px-16 xl:px-24'>

      <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-14 md:gap-10 xl:gap-20 lg:mt-8'>

        <div className='w-full lg:w-[60%]'>
          <h1 className='text-4xl md:text-5xl xl:text-7xl font-normal lg:leading-none'>Hola, soy Ailén</h1>
          <h2 className='text-xl md:text-2xl xl:text-4xl text-[#EA7A54] mb-9 xl:mb-20 mt-2'>Full Stack Developer</h2>
          <p className='text-sm md:text-sm xl:text-lg leading-tight mb-10 md:mb-9 xl:mb-12'>Soy una <strong>diseñadora industrial</strong> graduada de la Universidad Nacional de La Plata con una certificación en <strong>Experiencia de Usuario e Interfases</strong> y, actualmente, estoy enfocada en desarrollar habilidades como <strong>Desarrolladora Full Stack</strong>, especialmente en el <strong>Desarrollo Front End</strong>. También tengo conocimientos y práctica en <strong>Diseño Gráfico y Gestión de proyectos</strong>, lo que me permite abordar proyectos de manera organizada y eficiente.</p>
          
          {/* redireccionamiento a una pagina nueva */}
          <Link to="/sobremi" className='px-10 py-2 bg-[#A9D86C] border-2 border-black rounded-md transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150'>Ver Más</Link>
          {/* redireccionamiento a una pagina nueva */}
        </div>

        {/* contenedor de imagen */}
        <div className='w-3/4 md:w-96 md:h-96 xl:w-[500px] xl:h-[500px] bg-[#F8D44C] p-4 border-2 border-black rounded-[50px] flex justify-center items-center shadow-[10px_10px_0px_rgba(0,0,0,0.25)]'>
          <img src={avatar} alt="Avatar" className='h-[200px] md:h-3/4' />
        </div>
        {/* contenedor de imagen */}
      </div>

      {/* contenedor de frase */}
      <div className='w-full p-4 md:h-28 rounded-[30px] border-2 border-black bg-[#99B7DD] flex justify-center items-center mt-32 md:mt-28'>
        <h3 className='text-lg md:text-xl xl:text-2xl text-center leading-tight'>"No tengas miedo de empezar de nuevo, te puede gustar más tu nueva historia."</h3>
      </div>
      {/* contenedor de frase */}
    </section>
  )
}
