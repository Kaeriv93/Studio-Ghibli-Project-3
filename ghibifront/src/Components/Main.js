import {useEffect,useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import FilmPage from "../Pages/FilmPage";
import Login from '../Login/login'
import Signup from '../Signup/signup'
import List from './Test'

function Main(props){
    const [film, setFilm] = useState(null);
    const [review,setReview] = useState({
        reviews:[{review:'Wow I really loved this film a lot!'}]
    })



    const URL = "https://ghibliapi.herokuapp.com/films";

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setFilm(data);
            console.log(data);
        };
        getData();
    }, []);

    useEffect(()=>{
        const reviewData = async() =>{
            const response = await fetch('https://backend-studioghibli-app.herokuapp.com/reviews');
            const data = await response.json();
            setReview(data);
            console.log(data);
        }
        reviewData();
    },[]);

    const createReview = async(review) =>{
        await fetch ('https://backend-studioghibli-app.herokuapp.com/reviews',{
            method:'post',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review)
        })
    }

    return(
        <main>
            <Routes>
                <Route path ='/' 
                element={<List
                film ={film}
                />}/>
                <Route path='/:id' element={<FilmPage film={film} review={review} createReview={createReview}/>}/>
                <Route exact path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </main>

    )
}

export default Main