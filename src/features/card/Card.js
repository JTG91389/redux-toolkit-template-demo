import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { show, clear, selectCard, _idle, _loading } from './cardReducer';
/** import styles from './Counter.module.css';
 * You'll see the original styles object usage commented out below
 */
import '../../Card.module.css';
// stackblitz component style render workaround

export const Card = () => {
  const card = useSelector(selectCard);
  const dispatch = useDispatch();

  const showAnimalFact = () => {
    return card.title ? (
      <div className="card">
        <span className="title">{card.title}</span>
        <p className="message">{card.message}</p>
      </div>
    ) : (
      <div className="card">
        <span className="title">No animal facts to display</span>
      </div>
    );
  };

  return (
    <div className="animal-cards">
      <div className="row top">
        {card.status === _idle && showAnimalFact()}
        {card.status === _loading && (
          <div className="card">
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          </div>
        )}
      </div>

      <div className="row">
        <button
          className="button"
          aria-label="Load Animal Card"
          onClick={() => dispatch(show())}
        >
          Load Animal Card
        </button>
        <button
          className="button"
          aria-label="Clear Animal Card"
          onClick={() => dispatch(clear())}
        >
          Clear Animal Card
        </button>
      </div>
    </div>
  );
};
