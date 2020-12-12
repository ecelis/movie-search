import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

const Movie = function(props) {
  const { Title, Year, imdbID, Poster, Type } = props.info;

  return (
    <article>
      <h3>{Title}</h3>
      <h6>{`${Type} ${Year} IMDB: ${imdbID}`}</h6>
      <img alt={`${Movie}'s poster`} src={Poster} />
    </article>
  );
}

const ResultSet = function(props) {
  const { Search, Response } = props.items;

  return (
    Response === 'True' ?
    Search.map(info => {
      return <Movie info={info} />
    })
    :
    <h3>No movies :'(</h3>
  );
}

function App() {
  const [movie, setMovie] = useState();

  const handleResult = function(result) {
    setMovie(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBox handleResult={handleResult} />
      </header>
      <main className="container">
        {movie ? <ResultSet items={movie} /> : null}
      </main>
    </div>
  );
}

export default App;
