import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../style';
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';

const Navbar = () => {
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className="bg-gray-800">
            <div className={`${styles.paddingX} w-full px-4 mx-auto`}>
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <span className="text-xl font-bold text-white">Rick & Morty</span>
                        </Link>
                    </div>
                    <div className="items-center hidden gap-4 md:flex">
                        <Link
                            to="/"
                            className={`px-3 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:text-white  ${location.pathname === '/' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/characters"
                            className={`px-3 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:text-white  ${location.pathname === '/characters' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
                        >
                            characters
                        </Link>
                        <Link
                            to="/episodeList"
                            className={`px-3 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:text-white  ${location.pathname === '/episodeList' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
                        >
                            Episodes
                        </Link>
                    </div>
                    {/* Mobile Navbar */}
                    <div className="flex items-center justify-end flex-1 md:hidden">
                        <button onClick={handleToggle} className="text-white focus:outline-none">
                            {toggle ? <img src={close} alt="Close Icon" className="w-6 h-6" /> : <img src={menu} alt="Menu Icon" className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Navbar Content with Framer Motion */}
            <AnimatePresence>
                {toggle && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden"
                    >
                        <div className="flex flex-col items-center py-4 space-y-2">
                            <Link
                                to="/"
                                className={`px-3 py-2 text-md font-medium text-white rounded-md focus:outline-none focus:text-white  ${location.pathname === '/' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/characters"
                                className={`px-3 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:text-white  ${location.pathname === '/characters' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
                            >
                                characters
                            </Link>
                            <Link
                                to="/episodeList"
                                className={`px-3 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:text-white  ${location.pathname === '/episodeList' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
                            >
                                Episodes
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
