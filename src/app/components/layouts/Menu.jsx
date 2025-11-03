'use client';

import React from 'react';
import Link from 'next/link';
import { FaTasks, FaUserPlus, FaClipboardList, FaBeer } from 'react-icons/fa';
//1. Icono peli
import { BiCameraMovie } from "react-icons/bi";
import { usePathname } from 'next/navigation';

const Menu = () => {
  const navLinks = [
    { name: 'Usuarios', path: '/users', icon: <FaUserPlus className="navIcon" /> },
    { name: 'Beers', path: '/beers', icon: <FaBeer className="navIcon" /> },
    { name: 'Administración', path: '/admin', icon: <FaClipboardList className="navIcon" /> },
    { name: 'Tareas', path: '/tasks', icon: <FaTasks className="navIcon" /> },
    { name: 'Peliculas', path: '/peliculas', icon: <BiCameraMovie className="navIcon" /> },
  ];

  const pathname = usePathname();

  return (
    <div className="desktopNavLinks">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`navLink ${pathname === link.path ? 'activeLink' : 'inactiveLink'}`}
        >
          {link.icon}   
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;