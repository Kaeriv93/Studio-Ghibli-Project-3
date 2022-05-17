import '../styles/home.css'
import {Link} from 'react-router-dom'
import '../styles/App.css'

function List(props) {


  const loaded = () => {
    return props.film.map((film,idx) => ( 
      <div className='homepg' key={idx}>
        <div className='child'> 
          <Link to={`/${idx}`}>
            <div className='eachMov'> 
                <h1>{film.title}</h1>
                <img className="gImage" src={film.image} alt={film.name} />
            </div>
          </Link>
        </div>
      </div>
    ));
  };
  return props.film ? loaded() : <h1>Loading.......</h1>;
}

export default List