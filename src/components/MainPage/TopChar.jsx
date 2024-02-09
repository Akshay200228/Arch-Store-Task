import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../style';
import { Link } from 'react-router-dom';
import { CharacterCard } from '../Charactes';
import { Loader } from '../SkeltonLoading';

const TopChar = () => {
    const [randomCharacters, setRandomCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRandomCharacters = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('https://rickandmortyapi.com/api/character/');
                const characters = response.data.results;
                const randomIndices = generateRandomIndices(characters.length, 6);
                const randomChars = randomIndices.map(index => characters[index]);
                setRandomCharacters(randomChars);
            } catch (error) {
                console.error('Error fetching random characters:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRandomCharacters();
    }, []);

    // Function to generate random indices
    const generateRandomIndices = (max, count) => {
        const indices = [];
        while (indices.length < count) {
            const randomIndex = Math.floor(Math.random() * max);
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }
        return indices;
    };

    return (
        <div className={`${styles.marginX} ${styles.padding}`}>
            <p className="mb-8 text-4xl font-bold text-center text-gray-200 lg:text-6xl">Discover Popular Characters</p>
            {isLoading ? (
                <Loader count={8} />
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {randomCharacters.map(character => (
                            <CharacterCard key={character.id} character={character} />
                        ))}
                    </div>
                    <div className={`flex justify-center ${styles.marginY}`}>
                        <Link to="/characters" className="inline-block px-6 py-3 text-lg font-bold text-white transition duration-300 ease-in-out bg-orange-500 rounded-full shadow-lg hover:bg-orange-700">
                            View More Characters
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default TopChar;
