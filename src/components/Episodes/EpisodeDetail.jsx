import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../style";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { CharacterCardSkeleton } from "../SkeltonLoading";

const EpisodeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [episode, setEpisode] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchEpisodeDetails = async () => {
            try {
                setIsLoading(true);
                const episodeResponse = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
                setEpisode(episodeResponse.data);

                // Fetch character details for each character in the episode
                const characterResponses = await Promise.all(
                    episodeResponse.data.characters.map(url => axios.get(url))
                );
                const charactersData = characterResponses.map(response => response.data);
                setCharacters(charactersData);
            } catch (error) {
                console.error('Error fetching episode details:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEpisodeDetails();
    }, [id]);

    return (
        <div className={`mx-auto mt-8 ${styles.paddingX}`}>
            <div className="mt-6 text-start">
                <button onClick={() => navigate(-1)} className="flex items-center px-4 py-2 text-lg font-bold text-white bg-gray-600 rounded-full shadow-lg hover:bg-gray-800">
                    <FaArrowLeft className="mr-2" /> Go Back
                </button>
            </div>
            {isLoading ? (
                <CharacterCardSkeleton count={12} />
            ) : episode ? (
                <div className={`${styles.paddingY}`}>
                    <h2 className="mb-4 text-3xl font-bold">{episode.name}</h2>
                    <p><strong>Episode:</strong> {episode.episode}</p>
                    <p><strong>Air Date:</strong> {episode.air_date}</p>
                    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
                        {characters.map(character => (
                            <div key={character.id} className="p-4 rounded-lg shadow-md bg-slate-700">
                                <Link to={`/characters/${character.id}`}>
                                    <img src={character.image} alt={character.name} className="w-32 h-32 mx-auto mb-4 rounded-full" />
                                    <div className="text-center">
                                        <strong>{character.name}</strong> - {character.status}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>Episode not found.</div>
            )}
        </div>
    );
};

export default EpisodeDetail;
