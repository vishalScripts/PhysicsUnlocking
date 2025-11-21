import React from 'react'
import logo from "../assets/logoFinal3.png"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full absolute top-2  flex items-center justify-center '>
            <div className='w-full h-full container bg-[#A6ECA89d] rounded-md m-auto px-0.5 border-2 border-[#A6ECA8] z-50'>
                <div className='flex items-center justify-between'>
                    <div className=' h-full cursor-pointer w-12 aspect-square'>
                        <img className='w-full h-full object-center object-contain' src={logo} alt="logo" />
                    </div>
                    <ul className="flex items-center gap-6 px-4">
                        {["Home", "Lectures",  "Tests", "Practicals"].map((item, index) => (
                            <Link to={item === "Home"  ? "/" : `/${item.toLowerCase()}`}
                            key={index}
                            className="relative text-lg font-medium text-text cursor-pointer transition-all duration-300 ease-out
                                        hover:text-primary"
                            >
                            {item}
                            <span className="absolute left-0 bottom-[-2px] h-[3px] w-0 bg-secondary rounded-full transition-all duration-300 ease-out hover:w-full"></span>
                            </Link>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Navbar