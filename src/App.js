import React, { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import ResultSet from './components/ResultSet';
import SearchBox from './components/SearchBox';

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
        {movie
          ?
            parseInt(movie.totalResults) > 1
            ?
              <ResultSet items={movie} />
            : parseInt(movie.totalResults) == 1 ?
              <Movie info={movie.Search[0]} /> : null
          :
          null
        }
      </main>
    </div>
  );
}

export default App;
