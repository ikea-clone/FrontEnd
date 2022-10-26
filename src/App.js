import './App.css';
import Header from '../src/component/header';
import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import Signup from '../src/pages/Signup';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
