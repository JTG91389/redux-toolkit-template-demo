import React, { useState } from 'react';
import { useGetPokemonListQuery } from '../../services/pokemon';
import { Details } from './Details';
/** import styles from './Counter.module.css';
 * You'll see the original styles object usage commented out below
 */
import '../../Pokemon.module.css';
// stackblitz component style render workaround;

export const Pokemon = () => {
  const [page, setPage] = useState(0);
  const [targetPokemon, setTargetPokemon] = useState('bulbasaur');
  const { data: pokemon, isLoading, isFetching } = useGetPokemonListQuery(page);

  if (isLoading) {
    return (
      <div className="pokemon-container">
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  if (!pokemon?.results) {
    return <div className="pokemon-container">No Pokemon</div>;
  }

  return (
    <div className="pokemon-container">
      <div className="row">
        <Details name={targetPokemon} />
      </div>
      <div className="row">
        <div className="pokemon-list">
          {pokemon.results.map(({ name }) => (
            <div
              className="pokemon-item"
              key={name}
              onClick={() => setTargetPokemon(name)}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <button
          className="button"
          aria-label="Previous Page"
          onClick={() => setPage(page > 0 ? page - 1 : 0)}
        >
          Previous
        </button>

        <button
          className="button"
          aria-label="Next Page"
          onClick={() => setPage(page + 1)}
          isLoading={isFetching}
        >
          Next
        </button>
      </div>
    </div>
  );
};
