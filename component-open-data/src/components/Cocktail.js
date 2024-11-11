import React from 'react';

const Cocktail = ({ cocktail }) => {
    return (
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '200px', borderRadius: '8px' }} />
            <h3>Instructions</h3>
            <p>{cocktail.strInstructions}</p>
            <h3>Ingredients</h3>
            <ul>
                {Array.from({ length: 15 }, (_, i) => i + 1)
                    .map(i => ({
                        ingredient: cocktail[`strIngredient${i}`],
                        measure: cocktail[`strMeasure${i}`]
                    }))
                    .filter(item => item.ingredient)
                    .map((item, index) => (
                        <li key={index}>
                            {item.measure ? `${item.measure} of ` : ''}{item.ingredient}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Cocktail;
