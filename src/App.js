import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import searchMusic from './api';

const App = () => {
    const [songs, setSongs] = useState([]);

    const handleSearch = async (query) => {
        const results = await searchMusic(query, 'track');
        setSongs(results.tracks.items);
    };

    return (
        <div className="app-container">
            <h1 className="title">Яблоко</h1>
            <SearchBar onSearch={handleSearch} />
            {songs.length > 0 && <SongList songs={songs} />}
        </div>
    );
};

export default App;
