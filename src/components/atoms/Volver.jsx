import React from 'react'
import { Link } from 'react-router-dom';

export default function Volver() {

  function volverAInicio() {
    const inicio = document.getElementById('inicio');
    inicio.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='w-full h-fit py-6 sm:py-16 xl:py-24 flex justify-center items-center '>
      {/* redireccionamiento a una pagina inicio */}
      < Link to="/#Inicio" className='px-10 py-2 border-2 border-black rounded-md bg-[#A9D86C] transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150' onClick={volverAInicio}> Volver a Inicio</Link >
      {/* redireccionamiento a una pagina inicio */}
    </div>
  )
}
