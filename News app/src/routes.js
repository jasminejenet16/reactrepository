
import Header from './components/Header';
import Home from './pages/Home';
import View from './pages/View';
import Category from './pages/category';
import Bookmark from './pages/Bookmark';
import Login from './pages/Login';
import Register from './pages/Register';     

import { useSelector } from "react-redux";

import {

  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'


function MainRoute(){



    return(

        <>
      
       <Router>
       
          <Routes>
          <Route path='/register'element={<Register />}/> 
          <Route path='/' exact element={<Login />}/> 
          <Route path='/home' exact element={<Home />}/> 
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/category/:category' element={<Category/>}/>
          <Route path='/bookmark' element={<Bookmark/>}/>   

       </Routes>
       </Router>
      
        </>
    )
}

export default MainRoute