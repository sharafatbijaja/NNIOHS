"use client"
import { NavLinks } from "@/Constant/Constant"
import Link from "next/link"
import React, { useEffect } from 'react'
import MobileNav from './MobileNav'
import Logo from '@/components/Helper/Logo'
import { Download, MenuIcon } from "lucide-react"
import ThemeToggler from "@/components/Helper/ThemeToggler"


type props = {
  openNav: () => void
}


const Nav = ({ openNav }: props) => {

const [navBg, setNavBg] = React.useState(false);

useEffect(() => {

  const handler = () => {

    if (window.scrollY >= 80) { setNavBg (true) } 
    if (window.scrollY < 80) { setNavBg (false) } 
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    }

}, [])

  return (
      
    <div
      className={`transition-all py-3 ${navBg ? 'dark:bg-gray-800 bg-white shadow-md' : 'fixed'}
      
      duration-300 w-full z-50 fixed top-0 left-0`}
    >
      <div className='flex justify-between ms-auto items-center h-full w-full px-4 lg:px-20'>
        
        <Logo />

        {/* Navlinks */}

        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => {

            return <Link key={index} href={link.href} className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all">
              {link.name}
            </Link>
          })}
        </div>

        {/* Button */}
        <div className="flex items-center space-x-4">
          {/* ThemeToggler */}
          <ThemeToggler />
          <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">

            <span className="relative z-20 flex space-x-2 text-sm">
              <span>Button</span>
              <Download className="w-4 h-4" />
            </span>

          </a>

          {/* Menu Icon */}
          <MenuIcon onClick={openNav} className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden" />
        
        </div>

      </div>
    </div>
  )
}

export default Nav
