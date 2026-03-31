import { X } from 'lucide-react'
import { NavLinks } from '@/Constant/Constant'
import Link from 'next/dist/client/link'
import React from 'react'

type props = {  showNav: boolean,
  closeNav: () => void
}

const MobileNav = ( { showNav, closeNav }: props ) => {

const sidebarOpenClose = showNav ? 'translate-x-0' : '-translate-x-full';

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${sidebarOpenClose} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-95 w-full h-screen`}>
        {/* Mobile Menu */}
        <div className={`text-white ${sidebarOpenClose} fixed justify-center flex flex-col h-full transofrm transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gray-900 space-y-6 z-1050`}>

       {NavLinks.map((link, index) => {
        
        return <Link key={index} href={link.href}>
          
          <p className='text-white w-fit text[20px] ml-12 border-b-[1.5px] pb-1 border-gray sm:text[30px]'>
            {link.name}
          </p>
      
       </Link>
      
        })}

        {/* Close Icon */}
        <X onClick={closeNav} className='absolute top-7 right-7 sm:w-8 sm-h-8 h-6' />

        </div>



      </div>
    </div>
  )
}

export default MobileNav
