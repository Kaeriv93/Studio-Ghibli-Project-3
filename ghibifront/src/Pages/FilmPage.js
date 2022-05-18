import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import './Pages.css'

const FilmPage = (props)=>{
    const [review,setReview] = useState(null)

    console.log(props)
    let {id} = useParams()
    let film = props.film[id]
    return(
        <div className="showpage">
            <div className="moviebanner">
                <img className="backdrop" src={film.movie_banner} alt={film.title}/>
            </div>
            <h2>{film.original_title}</h2>
            <div className="middle-container">
                <div className="description-grid">
                    <h1 className="title">{film.title}</h1>
                    <h3 className="director">Directed by <b>{film.director}</b></h3>
                    <hr/>
                    <img className="film-image" src={film.image} alt={film.title}/>
                    <div className="film-description">
                        <h3>Description</h3>
                        <p>{film.description}</p>
                    </div>
                    <ul className="detail-description">
                        <li>Year of Production:{film.release_date}</li>
                        <li>Runtime:{film.running_time}mins</li>
                        <li>Producer:{film.producer}</li>
                    </ul>
                    <h3 className="rating">Rating:{film.rt_score}</h3>
                </div>
            </div>
            <div className="review">
                <h3>Leave a review below!</h3>
            </div>

        </div>
    )
}
export default FilmPage