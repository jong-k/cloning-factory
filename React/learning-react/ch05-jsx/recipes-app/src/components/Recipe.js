import React from 'react';
import IngredientList from './IngredientList';
import Instructions from './Instructions';

const Recipe = ({ name = 'untitled', ingredients = [], steps = [], }) => {
  return (
    <section id={name.toLowerCase().replace(/ /g, '-')}>
      <h1>{name}</h1>
      <IngredientList list={ingredients} />
      <Instructions title="Cooking Insructions" steps={steps} />
    </section>
  );
};

export default Recipe;