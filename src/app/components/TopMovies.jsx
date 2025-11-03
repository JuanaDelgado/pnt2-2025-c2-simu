'use client';

import React, { useState, useEffect } from 'react';

export default function Top10Peliculas() {
    const [top, setTop] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1`);
                const data = await response.json();
                const top10 = data.sort((a, b) => b.imdb.rating - a.imdb.rating).slice(0, 10)
                setTop(top10);
                setLoading(false);
            } catch {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        }
        fetchMovies();

    }, []);
   
    return (
        <div>
            <h2>Top 10 Películas</h2>
            <ul> {top.map((movie) => (
                <li>
                    {movie.title}
                </li>
            ))}
            </ul>
        </div>
    );
}