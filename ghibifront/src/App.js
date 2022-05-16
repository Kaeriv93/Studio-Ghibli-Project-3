import Header from "./Components/Header";
import Main from "./Components/Main";
import './App.css';
import List from "./Components/Test";
import SearchContainer from "./Components/searchContainer";
import Login from "./Login/login";
import Signup from "./Signup/signup";
function App() {
  return (
    <div className="App">
      {/* <SearchContainer/>
      <Login />
      < List/> */}
      <Signup />
    </div>
  );
}


export default App; 
