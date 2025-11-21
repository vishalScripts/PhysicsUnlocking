import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Videos from '../components/Videos';
import About from '../components/About';
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <div className="min-h-screen w-full bg-bg relative">
				{/* Bottom Fade Grid Background */}
				<motion.div
					initial={{opacity:0, scale:1.1}}
					animate={{opacity: 1, scale:1}}
					transition={{duration: 0.6}}
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `
							linear-gradient(to right, #A8E6CF 1px, transparent 1px),
							linear-gradient(to bottom, #A8E6CF 1px, transparent 1px)
						`,
						backgroundSize: "20px 30px",
						WebkitMaskImage:
							"radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
						maskImage:
							"radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
					}}
				/>
					<Hero />
			</div>

			
				<Videos />
				<About />
    </div>
  )
}

export default Home