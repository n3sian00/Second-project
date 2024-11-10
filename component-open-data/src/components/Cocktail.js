import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cocktail = () => {
  const [cocktail, setCocktail] = useState(null);

  const fetchRandomCocktail = async () => {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      setCocktail(response.data.drinks[0]);
    } catch (error) {
      console.error("Error fetching cocktail:", error);
    }
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  if (!cocktail) return <p>Loading...</p>;

  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '200px' }} />
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default Cocktail;
