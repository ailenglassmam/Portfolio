import React from "react";

export default function SobreMi() {

  return (
    <section id="SobreMi" name="section1" className="mx-auto py-16 lg:py-32 h-fit px-6 sm:px-16 xl:px-24">

      <div className="flex flex-col xl:flex-row justify-center items-center gap-4 md:gap-10 xl:gap-20 md:mt-16">

        {/* contenedor de titulos */}
        <div className="w-full xl:w-1/2">
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-normal lg:leading-none mt-4">Si estás acá...</h2>
          <h3 className="text-xl md:text-2xl text-[#EA7A54] mb-10 md:mb-9 xl:mb-20 mt-2 leading-tight">Es porque te interesa conocer un poco más sobre mi</h3>
          <p className="text-sm md:text-sm xl:text-lg leading-tight">Seguramente te preguntarás, <strong>¿Qué hace una diseñadora Industrial haciendo proyectos de diseño gráfico y estudiando programación?</strong> Bueno... quédate un ratito más que te cuento mi proceso.</p>
        </div>
        {/* contenedor de titulos */}

        {/* contenedor de texto */}
        <div className="w-full xl:w-1/2 p-7 bg-[#F8D44C] border-2 xl:border-[3px] border-black rounded-[30px] shadow-[7px_7px_0px_rgba(0,0,0,0.25)] gap-4">
          <p className="text-sm md:text-sm xl:text-lg leading-tight">La historia de mi carrera no es convencional<strong>, hoy me encuentro en un camino diferente al que había imaginado</strong>.</p>
          <br />
          <p className="text-sm md:text-sm xl:text-lg leading-tight">Durante mis años universitarios, descubrí una verdadera <strong>pasión por la parte proyectual del diseño</strong>. Me encantaba crear, diagramar, jugar con los colores y llevar dibujos a la vida. Pero después de graduarme, me encontré en la búsqueda de un trabajo que se ajustara a mis habilidades y pasiones. Después de un año de búsqueda, me di cuenta de que <strong>no estaba en el camino correcto.</strong></p>
          <br />
          <p className="text-sm md:text-sm xl:text-lg leading-tight">Así que, <strong>decidí dar un giro a mi carrera y migrar hacia el mundo del desarrollo web</strong>. Comencé desde cero con videos de YouTube, investigando capacitaciones gratuitas y pagas para adquirir la base teórica necesaria. Fue un proceso de aprendizaje constante, pero con esfuerzo, adquirí la base teórica necesaria para comenzar mi carrera como <strong>Desarrolladora Front End</strong>. La idea de llevar un diseño a algo funcional por medio de líneas de código es un desafío que me motiva día a día.</p>
          <br />
          <p className="text-sm md:text-sm xl:text-lg leading-tight">Y acá estoy, buscando oportunidades para comenzar mi carrera profesional en el mundo IT. Me considero una persona <strong>apasionada, comprometida y curiosa, siempre buscando aprender y mejorar</strong>.</p>
        </div>
        {/* contenedor de texto */}

      </div>

    </section>
  )
}
