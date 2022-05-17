import {useParams} from 'react-router-dom'

const FilmPage = (props)=>{
    console.log(props)
    let {id} = useParams()
    let film = props.film[id]
    return(
        <h1>{film.title}</h1>
    )
}
export default FilmPage