import React from 'react'
import logo from "../assets/logoFinal3.png"

function Footer() {
  return (
    <div>
      <footer className="w-full bg-[#212121] text-[#CDEFFF] py-8 mt-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo / Title */}
          <div className=' w-[40%] h-[25vh] flex items-center justify-start'>
            <div className=' cursor-pointer  '>
                                    <img className='h-[25vh] aspect-square object-center object-contain' src={logo} alt="logo" />
                                </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">⚡ Physics Unlocking</h1>
              <p className="text-sm opacity-70">Learn. Apply. Master.</p>
            </div>
          </div>
      
          {/* Quick Links */}
          <div className="flex flex-col gap-2 text-sm">
            <a href="/lectures" className="hover:opacity-80">Lectures</a>
            <a href="/tests" className="hover:opacity-80">Tests & Practice</a>
            <a href="/about" className="hover:opacity-80">About</a>
            <a href="/contact" className="hover:opacity-80">Contact</a>
          </div>
      
          {/* Socials */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:scale-110 transition">📘</a>
            <a href="#" className="hover:scale-110 transition">📷</a>
            <a href="#" className="hover:scale-110 transition">▶️</a>
          </div>
      </div>
      
        {/* Divider */}
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-xs opacity-60">
        <p>© {new Date().getFullYear()} Physics Unlocking. All rights reserved.</p>
        <p>Crafted with dedication by <span className="font-semibold text-blue-400">Vishal Kumar</span> 🧠🔥</p>
      </div>
    </footer>
  </div>
  )
}

export default Footer