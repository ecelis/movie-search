import React from 'react';
import styles from './Movie.module.css';

export default function Movie(props) {
  const { Title, Year, imdbID, Poster, Type } = props.info;

  return (
    <article>
      <h3>{Title}</h3>
      <h6>{`${Type} ${Year} IMDB: ${imdbID}`}</h6>
      <img alt={`${Movie}'s poster`} src={Poster} />
    </article>
  );
}


