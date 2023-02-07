import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
let history= useHistory

function handleClick(){
  history.pushState("/")
}

  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to="/">
      <div className="home-button" onClick={handleClick}>Anasayfa</div>
      </Link>
    </div>
  );
}
