import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CharacterCard = ({ character }) => {
    const [isVisible, setIsVisible] = useState(false);

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 1, y: 20 },
    };

    return (
        <div>
            <motion.div
                className="overflow-hidden bg-gray-900 rounded-lg shadow-lg"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <img
                    src={character.image}
                    alt={character.name}
                    className="object-cover w-full h-auto"
                />
                <div className="flex flex-col justify-between h-full p-4">
                    <h2 className="mb-2 text-2xl font-extrabold text-white hover:text-orange-500">{character.name}</h2>
                    <div className="flex items-center gap-2 mb-2 font-semibold">
                        <div className={`w-3 h-3 rounded-full ${character.status === 'Alive' ? 'bg-green-500' : character.status === 'unknown' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                        <p className="text-gray-200">{character.status}</p> -
                        <p className="text-gray-200 ">{character.species}</p>
                    </div>
                    <p className="mb-2 text-gray-400">Origin: <span className='text-gray-200'>{character.origin.name}</span></p>
                    <p className="mb-4 text-gray-400">Last known location: <span className='text-gray-200'>{character.location.name}</span></p>
                    <div className="flex justify-center">
                        <Link to={`/characters/${character.id}`} className='w-full'>
                            <button className="w-full px-4 py-2 text-lg font-bold text-center text-white transition duration-300 ease-in-out bg-green-500 rounded-full shadow-lg hover:bg-green-700">
                                Explore
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CharacterCard;
