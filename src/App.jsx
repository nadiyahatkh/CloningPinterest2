import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
// import Profile from './Page/Profil';
import './App.css';
import BuatPin from './page/BuatPin';
import Profile from './page/Profil';
import Jelajahi from './page/Jelajahi';
// import BuatPin from './Page/BuatPin';


function App(){

  return(
    <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/BuatPin' Component={BuatPin}></Route>
        <Route path='/Profil' Component={Profile}></Route>
        <Route path='/Jelajahi' Component={Jelajahi}></Route>
    </Routes>
  )
}

export default App;