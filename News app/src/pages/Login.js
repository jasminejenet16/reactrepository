import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{setLogin,Testlogin} from '../Redux/Slices/loginslice'
import { useNavigate } from 'react-router-dom'

function Login(){
     
    const {Logindata,isLogged}=useSelector((state)=>state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(Testlogin())
     
    },[])
     
    useEffect(()=>{
      if(isLogged){
        navigate('/home')
      }
     },[isLogged])
    

    return(
        <>
        <h1 className="text-center bg-dark text-white p-3">LOGIN FORM</h1>
        <form className="container bg-light p-5 mt-3">
  
          <div className="form-group">
            <h6><label className="text-dark mb-3"  >Email address</label></h6>
            <input type="email" onChange={(e)=>dispatch(setLogin({...Logindata,'email':e.target.value}))} className="form-control" placeholder="type your mail here"  />
            <small id="emailHelp" className="form-text text-muted mt-3">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <h6><label className="text-dark mb-3" >Password</label></h6>
            <input type="password"  onChange={(e)=>dispatch(setLogin({...Logindata,'password':e.target.value}))} className="form-control" id="exampleInputPassword1"  />
          </div>
          <div className="text-center mt-3">
            <button type="button" onClick={()=>dispatch(Testlogin(Logindata))}  className="btn btn-success btn-lg">Submit</button>
          </div>
          <div className="text-center mt-3">
            <button type="button" onClick={()=>{navigate('/register')}}  className="btn btn-success btn-lg">TO REGISTER</button>
          </div>

        </form>
      </>
    )
}
export default Login