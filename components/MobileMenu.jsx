import React from "react";
import Link from "next/link";
const MobileMenu = ({isOpen, onClose}) => {
    if(!isOpen) return null;
     return (
    <div className='fixed inset-0 z-50 md:hidden '>
    {/* Bxkdrop */}
    <div className='fixed inset-0 bg-black/60 backdrop-blur-sm'  onClick={ onClose }
    />
        {/* Menu contents */}
        <div className="fixed right-0 top-0 h-full bg-amber-900 w-45 p-6 shadow-xl">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 text-white hover:text-white cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-4 ">
            <Link href="/" onClick={ onClose } className="text-sm text-white hover:text-white transition-colors">
                                 Home
     </Link>
     <Link href="#about" onClick={ onClose } className="text-sm text-white hover:text-white transition-colors">
                                 About Us
     </Link>
        <Link href="#story" onClick={ onClose } className="text-sm text-white hover:text-white transition-colors">
                                 Our Story
       </Link>
        <Link href='#partner' onClick={ onClose } className="text-sm text-white hover:text-white transition-colors">
                                 Our Partner
    </Link>
   <Link href='#contact' onClick={ onClose } className="text-sm text-white hover:text-white transition-colors">
                                 Contact Us
    </Link>
 <Link href='#donate' onClick={ onClose } className="text-sm text-white hover:text-white transition-colors">
                                 Donate
      </Link>
            
          </nav>
        </div>
      </div>

    </div>
  )
}

export default MobileMenu