import React from 'react'

export default function Navbar(props) {
  return (
    <>
      <header>
        <nav className='w-full bg-[#F3F3F3] flex flex-wrap items-center mx-auto p-4 justify-end md:justify-center px-6 sm:px-16 xl:px-24 fixed'>

          {/* boton de menu desplegable */}
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-[#D6D5D3] focus:outline-none focus:ring-2 focus:ring-black" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          {/* boton de menu desplegable */}

          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='font-medium flex flex-col items-center md:p-0 mt-4 md:flex-row gap-8 md:mt-0'>
              <li className='text-[12px] sm:text-[15px] md:text-[15px] xl:text-[18px] transition hover:text-[#EA7A54] cursor-pointer duration-150'><a href={props.link1}>{props.text1}</a></li>
              <li className='text-[12px] sm:text-[15px] md:text-[15px] xl:text-[18px] hover:text-[#EA7A54] cursor-pointer duration-150'><a href={props.link2}>{props.text2}</a></li>
              <li className='text-[12px] sm:text-[15px] md:text-[15px] xl:text-[18px] hover:text-[#EA7A54] cursor-pointer duration-150'><a href={props.link3}>{props.text3}</a></li>
              <li className='text-[12px] sm:text-[15px] md:text-[15px] xl:text-[18px] md:cursor-pointer px-4 py-1 border-2 border-black transition md:hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] md:hover:bg-[#D6D5D3] duration-150 rounded-md'><a href={props.link4}>{props.text4}</a></li>
            </ul>
          </div>

        </nav>    
      </header>
    </>
  )
}