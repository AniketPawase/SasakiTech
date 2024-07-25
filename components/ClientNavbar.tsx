"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar'; 

const ClientNavbar: React.FC = () => {
  const pathname = usePathname();

  const showNavbar = pathname === '/settings' || pathname === '/dashboard';

  return showNavbar ? <Navbar /> : null;
};

export default ClientNavbar;
