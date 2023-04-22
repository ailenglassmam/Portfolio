import React from 'react'

export default function DescripcionSection(props) {
  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <h3 className='text-xl md:text-2xl xl:text-4xl text-black'>{props.titulo}</h3>
      <p dangerouslySetInnerHTML={{ __html: props.descripcion }} className='md:w-[70%] text-sm md:text-md xl:text-lg leading-tight'></p>
    </div>
  )
}
