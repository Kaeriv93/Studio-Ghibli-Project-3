import '../styles/home.css'
import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom'
import '../styles/App.css'

export default function List() {
  const [film, setFilm] = useState(null);
  const URL = "https://ghibliapi.herokuapp.com/films";
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setFilm(data);
    };
    getData();
  }, []);

  const loaded = () => {
    return film.map((film) => ( 


      <div className='homepg' key={film._id}>

        <div className='child'> 
          <Link to={`/${film._id}`}>
            <div className='eachMov'> 
                <h1>{film.title}</h1>
                <img className="gImage" src={film.image} alt={film.name} />
            </div>
          </Link>

        </div>


      </div>
    ));
  };
  return film ? loaded() : <h1>Loading.......</h1>;
}