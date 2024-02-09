import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from '../../style';
import { FaArrowLeft } from 'react-icons/fa';
import { CharacterDetailsSkeleton } from '../SkeltonLoading';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [relatedCharacters, setRelatedCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                setIsLoading(true);
                // Fetch character data
                const characterResponse = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                setCharacter(characterResponse.data);

                // Fetch related character data
                const relatedCharacterIds = characterResponse.data.episode.map(url => url.split('/').pop());
                const relatedCharacterResponses = await Promise.all(
                    relatedCharacterIds.map(relatedId => axios.get(`https://rickandmortyapi.com/api/character/${relatedId}`))
                );
                const relatedCharactersData = relatedCharacterResponses.map(response => response.data);

                // Filter related characters to show only 8 characters of the same species
                const sameSpeciesCharacters = relatedCharactersData.filter(char => char.status === characterResponse.data.status).slice(0, 8);
                setRelatedCharacters(sameSpeciesCharacters);
            } catch (error) {
                console.error('Error fetching character details:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    return (
        <div className={`mx-auto  ${styles.paddingX} ${styles.paddingY}`}>
            <div className="mt-6 text-start">
                <button onClick={() => navigate(-1)} className="flex items-center px-4 py-2 text-lg font-bold text-white bg-gray-600 rounded-full shadow-lg hover:bg-gray-800">
                    <FaArrowLeft className="mr-2" /> Go Back
                </button>
            </div>

            {isLoading ? (
                <CharacterDetailsSkeleton />
            ) : character ? (
                <div className={`${styles.marginY}`}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex justify-center">
                            <img src={character.image} alt={character.name} className="object-cover w-64 h-64 rounded-lg" />
                        </div>
                        <div>
                            <h2 className="mb-4 text-3xl font-bold">{character.name}</h2>
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                            <p>Gender: {character.gender}</p>
                            <p>Origin: {character.origin.name}</p>
                            <p>Last known location: {character.location.name}</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="mb-4 text-2xl font-bold">Related Characters of the Same Species</h3>
                        {relatedCharacters.length > 0 ? (
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                {relatedCharacters.map(relatedCharacter => (
                                    <div key={relatedCharacter.id} className="p-4 bg-gray-800 rounded-lg shadow-md">
                                        <Link to={`/characters/${relatedCharacter.id}`}>
                                            <img src={relatedCharacter.image} alt={relatedCharacter.name} className="object-cover w-32 h-32 mx-auto mb-4 rounded-full" />
                                            <div className="text-center">
                                                <strong>{relatedCharacter.name}</strong>
                                                <p>Status: {relatedCharacter.status}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="mt-4 text-center">
                                <div className="flex items-center justify-center p-4 border-2 border-gray-400 border-dashed rounded-lg h-96">
                                    <p className="text-2xl italic text-gray-500">No related characters found.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-200">Character not found.</div>
            )}
        </div>
    );
};

export default CharacterDetail;
