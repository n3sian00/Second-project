import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(term);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Search cocktail..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                style={{ padding: '10px', fontSize: '16px' }}
            />
            <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Search</button>
        </form>
    );
};

export default SearchForm;
