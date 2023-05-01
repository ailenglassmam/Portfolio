import React from "react";
import iconData from "../../data/iconData";
import softwareData from "../../data/softwareData";
import check from "/icons/check.svg";
import LineaDecorativa from "../atoms/LineaDecorativa";
import DescripcionSection from "../atoms/DescripcionSection";

export default function Skills() {

  const skills = iconData.map(skill => {
    return (
      <div className="flex flex-col justify-center items-center" key={skill.text}>
        <img src={skill.icon} alt={skill.text} className="md:h-[30px] lg:h-[40px] mb-4 mt-5 md:mt-0" />
        <p>{skill.text}</p>
      </div>
    )
  })

  const softwares = softwareData.map(software => {
    return (
      <div className="flex flex-col justify-center items-center" key={software.text}>
        <img src={software.icon} alt={software.text} className="md:h-[30px] lg:h-[40px] mb-4 mt-5 md:mt-0" />
        <p>{software.text}</p>
      </div>
    )
  })

  return (

    <section id="Skills" name="section2" className="mx-auto py-32">

      <div className="px-6 sm:px-16 xl:px-24">

        {/* linea divisoria decorativa */}
        <LineaDecorativa />
        {/* linea divisoria decorativa */}

        {/* descripcion */}
        <DescripcionSection
          titulo="Skills"
          descripcion="Durante mi trayectoria estudiantil y profesional, he tenido la oportunidad de desarrollar diferentes proyectos que me han permitido ampliar mis conocimientos y habilidades en el mundo del desarrollo web. Te cuento algunas de ellas."
        />
        {/* descripcion */}

        {/* contenedor de skills */}
        <div className="w-full flex flex-wrap justify-between items-center gap-6 my-10 p-7 border-2 xl:border-[3px] border-black rounded-[30px]">
          <h4 className="sm:inline-block text-[20px]">Tecnologías</h4>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 md:gap-[14.7px] lg:gap-5 xl:gap-12">
            {skills}
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-between items-center gap-6 my-10 p-7 border-2 xl:border-[3px] border-black rounded-[30px]">
          <h4 className="sm:inline-block text-[20px]">Softwares</h4>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 md:gap-[14.7px] lg:gap-5 xl:gap-12">
            {softwares}
          </div>
        </div>

        <div className="w-full h-fit flex flex-wrap gap-10 my-10">
          <div className=" lg:w-5/12 p-7 border-2 xl:border-[3px] border-black rounded-[30px] bg-[#F8D44C]">
            <h4 className="text-[20px]">Idiomas</h4>
            <p className="mt-5 text-sm md:text-md xl:text-lg leading-tight">Actualmente estoy dedicando parte de mi tiempo al estudio del idioma <strong>inglés</strong>. He alcanzado un <strong>nivel B1</strong> y actualmente estoy trabajando para mejorar mis habilidades en el <strong>nivel B2</strong>.</p>
          </div>

          <div className=" flex-grow p-7 border-2 xl:border-[3px] border-black rounded-[30px]">
            <h4 className="text-[20px]">Habilidades Blandas</h4>
            <ul className="grid md:grid-cols-2 mt-5">
              <li className="grid-row-1 flex items-center gap-2 text-sm md:text-md xl:text-lg leading-tight mt-2"><img src={check} className="block" /> Colaboración</li>
              <li className="grid-row-1 flex items-center gap-2 text-sm md:text-md xl:text-lg leading-tight mt-2"><img src={check} className="block" /> Creatividad</li>
              <li className="grid-row-1 flex items-center gap-2 text-sm md:text-md xl:text-lg leading-tight mt-2"><img src={check} className="block" /> Adaptabilidad</li>
              <li className="grid-row-1 flex items-center gap-2 text-sm md:text-md xl:text-lg leading-tight mt-2"><img src={check} className="block" /> Comunicación</li>
              <li className="grid-row-1 flex items-center gap-2 text-sm md:text-md xl:text-lg leading-tight mt-2"><img src={check} className="block" /> Pensamiento analítico</li>
              <li className="grid-row-1 flex items-center gap-2 text-sm md:text-md xl:text-lg leading-tight mt-2"><img src={check} className="block" /> Orientación al detalle</li>
            </ul>
          </div>
        </div>
        {/* contenedor de skills */}
      </div>
    </section>
  )
}
