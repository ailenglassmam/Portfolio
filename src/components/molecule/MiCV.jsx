import React from "react";

export default function MiCV() {
  return (
    <section id="Contacto" name="section4" className="h-fit mx-auto pt-32 flex justify-center items-center">

      <div className="px-6 sm:px-16 xl:px-24 flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10 xl:gap-20">

        {/* contenedor llamado a la acción */}
        <div className="lg:w-[60%]">
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-normal lg:leading-none">¿Querés tener toda esta información a mano?</h2>
          <h3 className="text-xl md:text-2xl text-[#EA7A54] mb-10 md:mb-9 xl:mb-20 mt-2 leading-tight">¡Te invito a que descargues mi CV!</h3>
          <p className="text-sm md:text-sm xl:text-lg leading-tight">Si quieres saber más sobre mi perfil profesional y descubrir lo que puedo hacer por ti, no dudes en echarle un vistazo. Ahí encontrarás toda la información necesaria sobre mi <strong>formación académica, experiencia laboral y habilidades</strong>.</p>
          <br></br>
          <p>Y si te gusta lo que ves, no dudes en contactarme para trabajar juntos. ¡Estoy lista para el reto!</p>
        </div>
        {/* contenedor llamado a la acción */}

        {/* contenedor contactos */}
        <div className="lg:w-[40%] h-fit p-[30px] mt-8 md:mt-0 bg-[#99B7DD] border-2 xl:border-[3px] border-black rounded-[30px] flex flex-col justify-center items-center shadow-[10px_10px_0px_rgba(0,0,0,0.25)]">
          <h4 className="text-xl mb-4 text-center">Descarga mi CV para conocer más detalles</h4>
          <div className="w-full h-fit sm:py-10 xl:py-18 flex justify-center items-center">
            {/* redireccionamiento a una pagina inicio */}
            <a href="https://drive.google.com/drive/folders/1iY5cOkoJQKMhQm9zEOkkvCo4tdAV2Xhu" target="_blank" className="w-[60%] py-2 bg-[#ECECEC] text-center border-2 xl:border-[3px] border-black rounded-md transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] duration-150">Descargar</a>
            {/* redireccionamiento a una pagina inicio */}
          </div>
        </div>
        {/* contenedor contactos */}
      </div>
    </section>
  )
}
