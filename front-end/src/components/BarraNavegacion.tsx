import { Navbar, NavbarCollapse, NavbarToggle } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

export function BarraNavegacion() {
    const location = useLocation();
    return (
      <Navbar className='bg-white border-gray-200 dark:bg-gray-200 p-4' fluid rounded>
        <span className="self-rigth whitespace-nowrap text-xl font-semibold dark:text-black">
          Hola !! 👏
        </span>
        <NavbarToggle className='bg-white md:hover:bg-white'/>
        <NavbarCollapse>
          <Link
            to="/inicio"
            className={`font-semibold block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0 dark:text-black ${
              location.pathname === '/inicio' || location.pathname === '/calculadora-ecologica'
                ? 'bg-lime-300 md:text-lime-700 md:dark:text-lime-500'
                : 'hover:bg-lime-100 md:hover:text-lime-700 md:dark:hover:text-lime-500 dark:hover:bg-lime-200 dark:hover:text-black md:dark:hover:bg-transparent'
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/mis-plantas"
            className={`font-semibold block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0 dark:text-black ${
              location.pathname === '/mis-plantas' 
                ? 'bg-lime-300 md:text-lime-700 md:dark:text-lime-500'
                : 'hover:bg-lime-100 md:hover:text-lime-700 md:dark:hover:text-lime-500 dark:hover:bg-lime-200 dark:hover:text-black md:dark:hover:bg-transparent'
            }`}
          >
            Mis Plantas
            </Link>
          <Link to='/index' className='font-semibold block py-2 px-3 text-gray-900 rounded-sm hover:bg-lime-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0 dark:text-black md:dark:hover:text-lime-500 dark:hover:bg-lime-200 dark:hover:text-black md:dark:hover:bg-transparent'>
            Salir
          </Link>
        </NavbarCollapse>
      </Navbar>

    );
}
  