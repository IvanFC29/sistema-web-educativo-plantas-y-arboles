import { Navbar, NavbarCollapse, NavbarToggle, Dropdown } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { Indicador } from './Indicador';
import { LogOut, User } from 'lucide-react';

export function BarraNavegacion() {
    const location = useLocation();
    return (
      <Navbar className='bg-white border-gray-200 dark:bg-gray-200 p-4' fluid rounded>
        <span className="self-rigth whitespace-nowrap text-xl font-semibold dark:text-black">
          <Indicador />
        </span>
        <NavbarToggle className='bg-white md:hover:bg-white'/>
        <NavbarCollapse>
          <Link
            to="/inicio"
            className={`font-semibold block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0 dark:text-black ${
              location.pathname === '/inicio' || location.pathname === '/huella-ecologica' || location.pathname === '/puzzle-plantar' || location.pathname === '/recomendaciones'
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
          <Dropdown
            label={
              <span className="pl-1 pr-1 flex items-center gap-2 font-semibold text-gray-900 rounded-sm md:bg-transparent dark:text-black hover:bg-lime-100 md:hover:text-lime-700 md:dark:hover:text-lime-500 dark:hover:bg-lime-200 dark:hover:text-black md:dark:hover:bg-transparent">
                  <User size={18} /> Usuario </span>
            } inline
          >
            <div className='bg-gray-200 text-center hover:bg-lime-200 p-1'>
              <Link to="/index" className='flex items-center gap-2 text-black font-semibold'>
                <LogOut size={18} />Salir
              </Link>
            </div>
          </Dropdown>
        </NavbarCollapse>
      </Navbar>
    );
}
  