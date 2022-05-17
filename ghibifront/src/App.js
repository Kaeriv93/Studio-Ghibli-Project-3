import Header from "./Components/Header";
import Main from "./Components/Main";
import './App.css';
import {Routes,Route} from 'react-router-dom'
import './styles/App.css';
import List from "./Components/Test";
// import SearchContainer from "./Components/searchContainer";
import FilmPage from "./Pages/FilmPage";
import Login from "./Login/login";
import Signup from "./Signup/signup";
import { BrowserRouter as Router } from "react-router-dom";





function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          {/* <SearchContainer/> */}
        <Routes>
          <Route path ='/' element={<List/>}>
            <Route path='/:id' element={<FilmPage/>}/>
          </Route>
          <Route exact path='/login' element={<Login />}/>
          <Route path='/' element ={<Main/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>



    </div>
  );
}
export default App; 