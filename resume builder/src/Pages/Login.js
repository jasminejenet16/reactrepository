import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import UserContext from "../components/context";

function Login() {

  const value = useContext(UserContext);
  const { isLogged, setIsLogged } = value;

  const navigate = useNavigate();


  const [requestdata, setData] = useState({

    request: "candidate_login",
    email: "",
    password: ""

  })

  useEffect(
    () => {
      // localStorage.setItem('login', JSON.stringify(requestdata))
      if (isLogged) {  
        navigate('/form')
      }
    }, [isLogged]
  )


  const TestAPI = async () => {
    const { data } = await axios.post('http://karka.academy/api/action.php', JSON.stringify(requestdata))
    console.log(data)
    if (data.status == 'success') {
      setIsLogged(true)
      localStorage.setItem('login',true)
      navigate('/form')
    } else { setIsLogged(false) }

  }



  return (
    <>
      <h1 className="text-center bg-dark text-white p-3">LOGIN FORM</h1>
      <form className="container bg-light p-5 mt-3">

        <div className="form-group">
          <h6><label className="text-dark mb-3" >Email address</label></h6>
          <input type="email" className="form-control" placeholder="type your mail here" onChange={(e) => setData({ ...requestdata, email: e.target.value })} />
          <small id="emailHelp" className="form-text text-muted mt-3">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <h6><label className="text-dark mb-3" >Password</label></h6>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setData({ ...requestdata, password: e.target.value })} />
        </div>
        <div className="text-center mt-3">
          <button type="button" onClick={TestAPI} className="btn btn-success btn-lg">Submit</button>
        </div>
      </form>

    </>
  )
}

export default Login