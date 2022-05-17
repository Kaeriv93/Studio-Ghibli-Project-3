import {useParams} from 'react-router-dom'

const FilmPage = (props)=>{
    console.log(props)
    let {id} = useParams()
    let film = props.film[id]
    return(
        <div className="showpage">
            <h1>{film.title}</h1>
            <img src={film.image} alt={film.title}/>
            <h2>Original Title</h2>
            <h2>{film.original_title}</h2>
            <h3>Description</h3>
            <p>{film.description}</p>
            <h3>Rating:{film.rt_score}</h3>

        </div>
    )
}
export default FilmPage