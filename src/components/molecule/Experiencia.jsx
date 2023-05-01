import React from "react";
import trabajosData from "../../data/trabajosData";
import LineaDecorativa from "../atoms/LineaDecorativa";
import DescripcionSection from "../atoms/DescripcionSection";

export default function Experiencia() {

  const trabajos = trabajosData.map(trabajo => {
    return (
      <div className="min-w-[250px] md:min-w-[370px] border-2 xl:border-[3px] border-black rounded-[30px] transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150" key={trabajo.id}>

        <div className="w-full h-48">
          <img className="w-full object-cover rounded-[28px_28px_0_0] h-full" src={trabajo.img} />
        </div>

        <div className="w-full h-[70%] p-7">
          <h4 className="uppercase text-sm text-[#FE3E00]">{trabajo.metodo}</h4>
          <h3 className="text-lg md:text-xl xl:text-2xl pb-4">{trabajo.titulo}</h3>
          <span className={`text-xs px-3 py-1 border-2 xl:border-[3px] border-black rounded-md ${trabajo.tipo === "Diseño Industrial" ? "bg-[#99B7DD]" : trabajo.tipo === "Diseño Gráfico" ? "bg-[#F8D44C]" : trabajo.tipo === "Ilustración" ? "bg-[#EA7A54]" : "bg-[#A9D86C]"}`}>{trabajo.tipo}</span>
          <div className="pt-7 text-right">
          <a href={trabajo.link} target="_blank">Ver Proyecto</a>
        </div>
        </div>
        
      </div>
    )
  })

  return (
    <section id="Experiencia" name="section3" className="mx-auto py-32 h-fit">

      <div className="px-6 sm:px-16 xl:px-24">
        {/* linea divisoria decorativa */}
        <LineaDecorativa />
        {/* linea divisoria decorativa */}

        {/* descripcion */}
        <DescripcionSection
        titulo="Experiencia"
        descripcion="Durante mi carrera como <strong>diseñadora gráfica</strong>, tuve la oportunidad de trabajar en diversos proyectos, incluyendo trabajos de <strong>rebranding, ilustraciones y diseño de contenido para redes sociales</strong>. He trabajado tanto en proyectos desde cero como en proyectos ya iniciados, utilizando diferentes herramientas y programas para llevar a cabo cada proyecto con éxito." />
        {/* descripcion */}
      </div>

      {/* contenedor de cards */}
      <div className="w-full h-fit px-6 sm:px-16 xl:px-24 flex gap-7 py-20 overflow-x-auto">
        {trabajos}
      </div>
      {/* contenedor de cards */}
    </section>
  )
}
