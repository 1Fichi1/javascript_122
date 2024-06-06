import React from 'react';
import SongCard from './SongCard';
import './SongList.css';

const SongList = ({ songs }) => (
    <div className="song-list">
        {songs.map(song => (
            <SongCard key={song.id} song={song} />
        ))}
    </div>
);

export default SongList;
