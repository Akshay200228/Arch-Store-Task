import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import styles from '../../style'

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setIsLoading(true);
        // Fetch episode data for the current page
        const episodeResponse = await axios.get(
          `https://rickandmortyapi.com/api/episode?page=${currentPage}`
        );
        setEpisodes(episodeResponse.data.results);
        setTotalPages(episodeResponse.data.info.pages);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEpisodes();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={`${styles.paddingX} ${styles.marginY}`}>
        <h3 className="mb-4 text-2xl font-bold text-center">All Episodes</h3>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center py-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 text-lg font-bold text-white bg-gray-800 rounded-full shadow-lg hover:bg-gray-700"
        >
          Previous
        </button>
        <div className="flex justify-center">
          <ul className="flex">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`px-4 py-2 mx-1 cursor-pointer text-lg font-bold text-white rounded-full shadow-lg hover:bg-gray-700 ${currentPage === index + 1 ? "bg-green-500" : "bg-gray-800"
                  }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-lg font-bold text-white bg-gray-800 rounded-full shadow-lg hover:bg-gray-700"
        >
          Next
        </button>
      </div>

    </>
  );
};

export default EpisodeList;
