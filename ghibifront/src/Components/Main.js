import {useEffect,useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import FilmPage from "../Pages/FilmPage";
import Login from '../Login/login'
import Signup from '../Signup/signup'
import List from './Test'

function Main(props){
    const [film, setFilm] = useState(null);

    const URL = "https://ghibliapi.herokuapp.com/films";

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setFilm(data);
            console.log(data)
        };
        getData();
    }, []);

    return(
        <main>
            <Routes>
                <Route path ='/' 
                element={<List
                film ={film}
                />}/>
                <Route path='/:id' element={<FilmPage film={film}/>}/>
                <Route exact path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </main>

    )
}

export default Main