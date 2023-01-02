
import React,{useState} from 'react';
import {

    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom'

import Login from './Pages/Login'
import Form from './Pages/Form';
import UserContext from './components/context';
import Register from './Pages/Register';
import View from './Pages/View';

function Mainroute(){
      const[isLogged, setIsLogged]=useState(false);

    return(
        <>
        <UserContext.Provider value={{isLogged,setIsLogged}}>
        <Router>
            <Routes>
                <Route>
                  <Route path="/"  element={<Login/>}/>
                  <Route path="/form"  element={<Form/>}/>
                  <Route path="/register"  element={<Register/>}/>
                  <Route path='/view/:id' element={<View/>}/>
                </Route>
            </Routes>
        </Router>
        </UserContext.Provider>
    
        </>
    )
}

export default Mainroute;