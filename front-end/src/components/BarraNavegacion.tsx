import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export function BarraNavegacion() {
    return (
      <Navbar fluid rounded>
        <NavbarBrand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Mi Proyecto
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    );
  }
  