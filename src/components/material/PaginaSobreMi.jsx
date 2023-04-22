import React from 'react'
import Navbar from '../molecule/Navbar';
import SobreMi from '../molecule/SobreMi';
import Formacion from '../molecule/Formacion';
import Footer from '../molecule/Footer'
import Cursos from '../molecule/Cursos';
import Experiencia from '../molecule/Experiencia';
import Volver from '../atoms/Volver';

export default function PaginaSobreMi() {
  return (
    <>
      <Navbar
        link1="#SobreMi"
        link2="#Formación"
        link3="#Experiencia"
        link4="https://drive.google.com/drive/folders/1iY5cOkoJQKMhQm9zEOkkvCo4tdAV2Xhu"
        text1="Sobre Mi"
        text2="Formación"
        text3="Experiencia"
        text4="Mi CV"
      ></Navbar>
      <SobreMi></SobreMi>
      <Formacion></Formacion>
      <Cursos></Cursos>
      <Experiencia></Experiencia>
      <Volver></Volver>
      <Footer></Footer>
    </>
  )
}
