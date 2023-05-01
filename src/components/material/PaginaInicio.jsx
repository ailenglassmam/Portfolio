import React from "react";
import Navbar from "../molecule/Navbar";
import Inicio from "../molecule/Inicio";
import Skills from "../molecule/Skills";
import Proyectos from "../molecule/Proyectos";
import Contacto from "../molecule/Contacto";
import Footer from "../molecule/Footer";

export default function PaginaInicio() {
  return (
    <>
      <Navbar
      text1 = "Inicio"
      text2 = "Skills"
      text3 = "Proyectos"
      text4 = "Contacto"
      ></Navbar>
      <Inicio></Inicio>
      <Skills></Skills>
      <Proyectos></Proyectos>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}
