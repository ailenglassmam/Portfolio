import React from "react";
import Navbar from "../molecule/Navbar";
import SobreMi from "../molecule/SobreMi";
import Formacion from "../molecule/Formacion";
import Footer from "../molecule/Footer";
import Cursos from "../molecule/Cursos";
import Experiencia from "../molecule/Experiencia";
import Volver from "../atoms/Volver";
import MiCV from "../molecule/MiCV";


export default function PaginaSobreMi() {
  return (
    <>
      <Navbar
        text1="Sobre Mi"
        text2="Formación"
        text3="Experiencia"
        text4="Contacto"
      ></Navbar>
      <SobreMi></SobreMi>
      <Formacion></Formacion>
      <Cursos></Cursos>
      <Experiencia></Experiencia>
      <MiCV></MiCV>
      <Volver></Volver>
      <Footer></Footer>
    </>
  )
}
