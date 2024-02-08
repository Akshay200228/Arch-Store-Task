import React from "react";
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode }) => {
    return (
        <div className="p-4 rounded-lg shadow-md bg-slate-700">
            <h4 className="mb-2 text-lg font-semibold">{episode.name}</h4>
            <p>
                <strong>Episode:</strong> {episode.episode}
            </p>
            <p>
                <strong>Air Date:</strong> {episode.air_date}
            </p>
            <div className="mt-4">
                <Link
                    to={`/episode/${episode.id}`}
                    className="px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700"
                >
                    View Characters
                </Link>
            </div>
        </div>
    );
};

export default EpisodeCard;
