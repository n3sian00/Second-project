import React, { useState, useEffect } from 'react';
import Cocktail from './components/Cocktail';
import SearchForm from './components/SearchForm';

function App() {
    const [cocktail, setCocktail] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchRandomCocktail();
    }, []);

    const fetchRandomCocktail = async () => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        setCocktail(data.drinks[0]);
    };

    const searchCocktail = async (term) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`);
        const data = await response.json();
        setCocktail(data.drinks ? data.drinks[0] : null);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term) {
            searchCocktail(term);
        } else {
            fetchRandomCocktail();
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Cocktail Of The Day</h1>
            <SearchForm onSearch={handleSearch} />
            {cocktail ? (
                <Cocktail cocktail={cocktail} />
            ) : (
                <p>No cocktail found.</p>
            )}
        </div>
    );
}

export default App;
