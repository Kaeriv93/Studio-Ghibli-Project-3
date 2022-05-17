import {useParams} from 'react-router-dom'
import './Pages.css'

const FilmPage = (props)=>{
    console.log(props)
    let {id} = useParams()
    let film = props.film[id]
    return(
        <div className="showpage">
            <div className="moviebanner">
                <img className="backdrop" src={film.movie_banner} alt={film.title}/>
                <h1 className="title">{film.title}</h1>
            </div>
            <h2>Original Title</h2>
            <h2>{film.original_title}</h2>
            <h3>Description</h3>
            <p>{film.description}</p>
            <h3>Rating:{film.rt_score}</h3>

        </div>
    )
}
export default FilmPage