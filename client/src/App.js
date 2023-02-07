import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Film from './Filmler/Film';
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import { BrowserRouter,Route,Switch, useParams } from 'react-router-dom';
import FilmListesi from './Filmler/FilmListesi';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') // Burayı Postman'le çalışın
        .then(response => {console.log('geldiii mi'+response.data);
          setMovieList(response.data)
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = id => {
    console.log("oldu oldu");
    setSaved([...saved,id]);
  };

  return (
    
    <div>
      <KaydedilenlerListesi list={[]}/>
      <Switch>
      <Route path="/FilmListesi"><FilmListesi movies={movieList} /></Route>

      <Route path="/filmler/:id">
        <Film saveButton={KaydedilenlerListesineEkle}/>
      </Route>
      </Switch>
    </div>
    
  );
}
