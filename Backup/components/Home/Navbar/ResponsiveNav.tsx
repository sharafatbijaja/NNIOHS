"use client"
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const [showNav, setShowNav] = React.useState(false)

  const openNavHander = () => { setShowNav(true)}
  const closeNavHander = () => { setShowNav(false)}



  return (
    <div>
      <Nav openNav={openNavHander} />
      <MobileNav showNav={showNav} closeNav={closeNavHander} />
    </div>
  )
}

export default ResponsiveNav
