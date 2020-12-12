import React, { useState } from 'react';
import styles from './SearchBox.module.css';

const api = 'https://www.omdbapi.com/?';

export default function SearchBox(props) {
  const [ text, setText ] = useState('');
  const [ apiKey, setApikey ] = useState('');

  const { handleResult } = props;

  const handleForm = (event) => {
    const {name, value} = event.target;

    switch (name) {
      case 'text':
        setText(value);
        break;
        case 'apikey':
        setApikey(value);
        break;
      default:
        getSearch();
        break;
    }
  }

  const getSearch = () => {
    const url = `${api}apikey=${apiKey}&s=${text}`
    try {
      fetch(url, {
        method: 'GET',
        'Content-Type': 'application/json'
      }).then(async response => {
        handleResult(await response.json())
      }).catch(error =>  console.log(error));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <div className={`${styles.item} align-start`}>
        <label htmlFor="apikey">OMDB API Key</label>
        <input type="text" name="apikey" value={apiKey}
          onChange={handleForm}
        />
      </div>
      <div className={`${styles.item} align-stretch`}>
        <input type="text" name="text" value={text}
          onChange={handleForm}
          className="w100"
        />
      </div>
      <div className={styles.item}>
        <button value='Search' name="search" onClick={handleForm}>Search</button>
      </div>
    </React.Fragment>
  );
}
