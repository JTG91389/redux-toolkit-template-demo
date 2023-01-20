import React from 'react';
import { useGetPokemonByNameQuery } from '../../services/pokemon';
/** import styles from './Counter.module.css';
 * You'll see the original styles object usage commented out below
 */
import '../../Details.module.css';
// stackblitz component style render workaround;

export const Details = (props) => {
  const { name } = props;

  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <div className="pokemon-detail">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <span>Loading</span>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};
