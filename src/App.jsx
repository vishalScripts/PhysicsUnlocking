import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from 'react-router-dom';

function App() {
	return(
		<>
			<div className=' '>
				<Navbar />
				
				<AnimatePresence mode="wait">
					<motion.div
						key={location.pathname}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 1, ease: "easeInOut" }}
					>
						<Outlet />
					</motion.div>
				</AnimatePresence>

				<Footer />
			</div>
		</>
	)
}

export default App
