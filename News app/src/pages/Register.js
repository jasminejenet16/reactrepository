import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{setRegister,TestRegister} from '../Redux/Slices/loginslice'
import { useNavigate } from 'react-router-dom'


function Register(){

    const {register,isRegistered}=useSelector((state)=>state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate();


    useEffect(()=>{
      if(isRegistered){
        navigate('/')
      }
    },[isRegistered])


    return(
        <>
        <form className="container">
           <h1 className="text-center bg-dark text-white p-3">REGISTRATION FORM</h1>
       <div className="form-group row mt-2">
           <label className="col-sm-2 col-form-label col-form-label-lg">name</label>
           <div className="col-sm-10">
           <input type="text" onChange={(e)=>dispatch(setRegister({...register,'name':e.target.value}))} className="form-control form-control-lg" id="colFormLabelLg" />
           </div>
       </div>
       <div className="form-group row mt-2">
           <label className="col-sm-2 col-form-label col-form-label-lg">Email</label>
           <div className="col-sm-10">
           <input type="email"onChange={(e)=>dispatch(setRegister({...register,'email':e.target.value}))} className="form-control form-control-lg" id="colFormLabelLg" />
           </div>
       </div>
       <div className="form-group row mt-2">
           <label className="col-sm-2 col-form-label col-form-label-lg">password</label>
           <div className="col-sm-10">
           <input type="password"onChange={(e)=>dispatch(setRegister({...register,'password':e.target.value}))}   className="form-control form-control-lg" id="colFormLabelLg" />
           </div>
       </div>
       <div className="form-group row mt-2">
           <label className="col-sm-2 col-form-label col-form-label-lg">aadhar</label>
           <div className="col-sm-10">
           <input type="text" onChange={(e)=>dispatch(setRegister({...register,'aadhar':e.target.value}))}   className="form-control form-control-lg" id="colFormLabelLg" />
           </div>
       </div>
       <div className="form-group row mt-2">
           <label className="col-sm-2 col-form-label col-form-label-lg">address</label>
           <div className="col-sm-10">
           <input type="text" onChange={(e)=>dispatch(setRegister({...register,'address':e.target.value}))}  className="form-control form-control-lg" id="colFormLabelLg" />
           </div>
       </div>
       <div className="form-group row mt-2">
           <label className="col-sm-2 col-form-label col-form-label-lg">phone</label>
           <div className="col-sm-10">
           <input type="number" onChange={(e)=>dispatch(setRegister({...register,'phone':e.target.value}))} className="form-control form-control-lg" id="colFormLabelLg" />
           </div>
       </div>
       <div className="form-group row mt-2">
           <label className="col-sm-2 col-form-label col-form-label-lg">city</label>
           <div className="col-sm-10">
           <input type="text" onChange={(e)=>dispatch(setRegister({...register,'name':e.target.value}))}  className="form-control form-control-lg" id="colFormLabelLg" />
           </div>
       </div>
       <div className="form-group row mt-2">
           <label className="col-sm-2 col-form-label col-form-label-lg">area</label>
           <div className="col-sm-10">
           <input type="text" onChange={(e)=>dispatch(setRegister({...register,'area':e.target.value}))}  className="form-control form-control-lg" id="colFormLabelLg" />
           </div>
       </div>
       <div className="form-group row mt-2">
           <label className="col-sm-2 col-form-label col-form-label-lg">pin</label>
           <div className="col-sm-10">
           <input type="text" onChange={(e)=>dispatch(setRegister({...register,'name':e.target.value}))}  className="form-control form-control-lg" id="colFormLabelLg" />
           </div>
       </div>
       <div className="text-center m-4 mt-2">
       <button type="button"  className="btn btn-success btn-lg" onClick={()=>{dispatch(TestRegister(register))}}  > Submit</button>
       </div>
        
       <div className="text-center m-4 mt-2">
       <button type="button" onClick={()=>{navigate('/')}}  className="btn btn-success btn-lg"   > Already registered <br/> click here!</button>
       </div>

       </form>

      </>
    )
}
export default Register



