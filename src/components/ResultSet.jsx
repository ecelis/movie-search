import React from 'react';
import Movie from './Movie';
import styles from './ResultSet.module.css';

export default function ResultSet(props) {
  const { Search, Response } = props.items;

  return (
    Response === 'True' ?
    Search.map(info => {
      return <Movie info={info} key={info.imdbID} />
    })
    :
    <h3>No movies :'(</h3>
  );
}


