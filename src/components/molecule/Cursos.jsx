import React from "react";
import formacionData from "../../data/formacionData";

export default function Cursos() {

  const cursos = formacionData.map(formacion => {
    return (
      formacion.tipologia === "Curso" ? (
        <div className="w-full p-7 border-2 xl:border-[3px] border-black rounded-[30px] transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150" key={formacion.id}>
          <div>
            <h4 className="text-lg md:text-xl xl:text-2xl text-black leading-tight">{formacion.titulacion}</h4>
            <p className="text-xs md:text-lg mt-[9px]">{formacion.institucion}</p>
            <p className="text-xs md:text-sm mt-[9px]">{formacion.codigo}</p>
          </div>
          <div className="mt-10 text-right">
            <a href={formacion.link} className="px-4 md:px-10 py-2 border-2 xl:border-[3px] border-black rounded-md transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150" target="_blank">Ver Certificación</a>
          </div>
        </div>
      ) : null
    )
  })

  return (
    <section id="Cursos" className="mx-auto pb-32 h-fit flex flex-col justify-center px-6 sm:px-16 xl:px-24">
      <h3 className="text-xl md:text-2xl xl:text-4xl text-black my-5">¡Sumando Skills con Mini Cursos!</h3>
      <div className="w-full flex flex-col gap-5">
        {cursos}
      </div>
    </section>
  )
}
