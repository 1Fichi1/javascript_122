import React from 'react';
import './SongCard.css';

const SongCard = ({ song }) => (
    <div className="song-card">
        <img src={song.album.images[0].url} alt={song.name} />
        <h3>{song.name}</h3>
        <p>Artist: {song.artists[0].name}</p>
        {song.preview_url && (
            <audio controls>
                <source src={song.preview_url} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        )}
    </div>
);

export default SongCard;
