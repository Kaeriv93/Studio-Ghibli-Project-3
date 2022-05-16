import '../styles/home.css'
import { useEffect, useState } from "react";

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
    return film.map((film, idx) => ( 
      <div className='showpg' key={idx}>
           <div className='eachMov'> 
              <h1>{film.title}</h1>
          <img className="gImage" src={film.image} alt={film.name} />
        </div>
        </div>
    ));
  };

  return film ? loaded() : <h1>Loading.......</h1>;
}
