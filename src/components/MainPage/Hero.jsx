import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import styles from '../../style';
import { useNavigate } from 'react-router-dom';
import { statistics } from '../../constant/index';
import CountUp from "react-countup";
import axios from 'axios';
import Ricky from "../../assets/ricky2.png";
import { Link } from 'react-router-dom';
import { DropDownLoader } from '../SkeltonLoading';

const Hero = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [firstThreeCharacters, setFirstThreeCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    const fadeInRightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            const fetchCharacters = async () => {
                setIsLoading(true);
                try {
                    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
                    setSearchResults(response.data.results);
                } catch (error) {
                    console.error('Error fetching characters:', error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchCharacters();
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    useEffect(() => {
        const fetchFirstThreeCharacters = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                const characters = response.data.results;
                setFirstThreeCharacters(characters.slice(0, 3));
            } catch (error) {
                console.error('Error fetching first three characters:', error);
            }
        };
        fetchFirstThreeCharacters();
    }, []);

    const handleSearch = (value) => {
        setSearchTerm(value);
        setShowDropdown(!!value);
    };

    return (
        <motion.section
            className={`${styles.paddingX} lg:h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-16 text-white bg-gradient-to-b from-gray-900 to-gray-800`} variants={containerVariants} initial="hidden" animate="visible"
        >
            <motion.div className="w-full lg:w-1/2 md:pr-8" variants={itemVariants}>
                <motion.h1 className="mb-8 text-4xl font-bold leading-tight text-center md:text-6xl md:text-left text-coral-red" variants={fadeInUpVariants}>Welcome to the <br /> <span className="text-green-500">Rick and Morty</span> <br /> Universe</motion.h1>
                <motion.p className="mb-8 text-lg text-center md:text-xl md:text-left" variants={fadeInUpVariants}>Embark on an extraordinary journey through space and time with Rick Sanchez and Morty Smith!</motion.p>

                <div className="flex-row items-center justify-center gap-4 md:justify-start md:flex">
                    <motion.button
                        className="block w-full px-8 py-3 mx-auto font-bold text-white transition-colors duration-300 bg-green-500 rounded-full shadow-lg md:w-auto md:px-10 md:py-4 hover:bg-green-600 md:mx-0"
                        onClick={() => navigate('/characters')}
                        variants={fadeInUpVariants}
                    >
                        Start Exploring
                    </motion.button>
                    {/* Search input */}
                    <motion.div
                        className="relative mt-4 text-center md:mt-0"
                        variants={fadeInUpVariants}
                    >
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-900">
                            <FaSearch />
                        </div>
                        <input
                            type="text"
                            className="w-full px-4 py-3 pl-10 bg-gray-200 border border-gray-700 rounded-full text-slate-700 md:w-80 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Search by character name"
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </motion.div>
                    {/* Display the first three characters */}
                    <motion.div
                        className="flex items-center justify-start mt-4 md:mt-0 md:justify-center"
                        variants={fadeInUpVariants}
                    >
                        {firstThreeCharacters.map((character, index) => (
                            <Link
                                key={character.id}
                                to={`/characters/${character.id}`}
                                className={`relative ${index !== 0 ? '-ml-6' : ''}`} // Add a negative left margin to all images except the first one
                            >
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className="w-12 h-12 border-2 border-white rounded-full shadow-lg"
                                    style={{ zIndex: firstThreeCharacters.length - index }}
                                />
                            </Link>
                        ))}
                    </motion.div>

                </div>

                {/* End of search input */}
                {showDropdown && (
                    <div className="absolute z-10 mt-8 overflow-x-auto overflow-y-auto shadow-md bg-slate-500 rounded-2xl w-72 h-96 text-slate-300 scrollbar-thin scrollbar-thumb-slate-500">
                        {/* Render search results */}
                        {isLoading ? (
                            <DropDownLoader count={5} />
                        ) : searchResults.length === 0 ? (
                            <div className="p-4 text-center text-red-500">Not found</div>
                        ) : (
                            searchResults.map((character) => (
                                <div
                                    key={character.id}
                                    className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-200 hover:text-slate-800"
                                    onClick={() => {
                                        navigate(`/characters/${character.id}`);
                                        setShowDropdown(false);
                                    }}
                                >
                                    <img src={character.image} alt={character.name} className="object-cover w-12 h-12 rounded-full" />
                                    {character.name}
                                </div>
                            )))}
                    </div>
                )}
                {/* End of search dropdown */}
                {/* Countup */}
                <motion.div className='flex flex-wrap items-start justify-start w-full gap-16 mt-20' variants={fadeInUpVariants}>
                    {statistics.map(({ label, value }, index) => (
                        <motion.div
                            key={label}
                            initial="hidden"
                            animate="visible"
                            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 1, ease: "easeOut" } } }}
                        >
                            {/* Value */}
                            <CountUp
                                start={0} end={value} duration={4}
                                className={`text-4xl font-bold font-palanquin text-coral-red`}
                            /> <span className='text-[38px] font-semibold font-palanquin text-gray-400'>+</span>
                            {/* Label */}
                            <p className={`leading-7 font-montserrat text-slate-gray`}>{label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div className="hidden w-full md:block lg:w-1/2 lg:pl-8" variants={itemVariants}>
                <motion.img
                    src={Ricky}
                    alt="Rick and Morty"
                    className="object-cover w-full h-auto"
                    variants={fadeInRightVariants}
                />
            </motion.div>
        </motion.section>
    );
};

export default Hero;