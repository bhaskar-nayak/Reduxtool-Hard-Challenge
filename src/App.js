import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Home/Home';
import Navbar from './Navbar';
import Footer from './Footer';
import ChallengeListComponent from './ChallengeComponent/ChallengeList.component';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/challenges' element={<ChallengeListComponent/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
