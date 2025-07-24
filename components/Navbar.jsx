"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Logo from "../public/assets/Logo.jpg"
import Image from 'next/image'
// bg-[#1A237E]
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 text-amber-900 border-b border-white/5 
    backdrop-blur-xl z-50 bg-white"> 
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex h-16 items-center justify-between">

    
     <div className="flex items-center space-x-3">
                    <Link href={'/'} className="flex items-center space-x-3">
                    <div className="w-[50px] h-9 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                   <Image src={Logo} alt="logo" className='bg-none'/>
                  
                    </div>
                    <span className="text-sm font-semibold text-wrap">Charity Organization</span>
                    </Link>
                    
                  </div>

                  <div className="hidden md:flex items-center px-6 space-x-6">
                    <Link href="/" className="text-sm text-amber-900 
                    hover:text-amber-900 transition-colors">
                      Home
                    </Link>
                    <Link href="#about" className="text-sm text-zinc-400 hover:text-amber-900 
                    transition-colors">
                      About Us
                    </Link>
                    <Link href="#story" className="text-sm text-zinc-400 hover:text-amber-900 transition-colors">
                      Our Story
                    </Link>
                    <Link href='#partner' className="text-sm text-zinc-400 hover:text-amber-900 transition-colors">
                      Our Partner
                    </Link>
                     <Link href='#contact' className="text-sm text-zinc-400 hover:text-amber-900 transition-colors">
                      Contact Us
                    </Link>
                     <Link href='#donate' className="text-sm text-zinc-400 hover:text-amber-900 transition-colors">
                      Donate
                    </Link>
                  </div>   
                    {/* Mobile Menu */}
                   <button className="md:hidden p-2 text-ambe-900 hover-text-white "
                    onClick={() => setIsMobileMenuOpen(true)}>
                  <svg className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    className='cursor-pointer'
                  />
                </svg>
                   </button>   
    </div>
   
      </div>
       
    </nav>
    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}/>
    </>
  )
}

export default Navbar