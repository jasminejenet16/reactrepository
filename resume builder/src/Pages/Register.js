import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){
     const navigate=useNavigate()
    const[registerDetails,setRegisterDetails]=useState({
     
       request :"create_candidate",
       name :"",
       email :'',
       password :'',
       aadhar : '',
       address :'',
       phone:'',
       city:'',
       area:'',
       pin:''

    })
    const TestRegister = async() => {
        const {data}=await axios.post('http://karka.academy/api/action.php',JSON.stringify(registerDetails))
        console.log(data)
        if(data.status=='success'){
            navigate('/')
        }
    }

    return(
       <>
         <form className="container">
            <h1 className="text-center bg-dark text-white p-3">REGISTRATION FORM</h1>
        <div className="form-group row mt-2">
            <label className="col-sm-2 col-form-label col-form-label-lg">name</label>
            <div className="col-sm-10">
            <input type="text" onChange={(e)=>setRegisterDetails({...registerDetails,name:e.target.value})} className="form-control form-control-lg" id="colFormLabelLg" />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label className="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <div className="col-sm-10">
            <input type="email" onChange={(e)=>setRegisterDetails({...registerDetails,email:e.target.value})} className="form-control form-control-lg" id="colFormLabelLg" />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label className="col-sm-2 col-form-label col-form-label-lg">password</label>
            <div className="col-sm-10">
            <input type="password"  onChange={(e)=>setRegisterDetails({...registerDetails,password:e.target.value})} className="form-control form-control-lg" id="colFormLabelLg" />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label className="col-sm-2 col-form-label col-form-label-lg">aadhar</label>
            <div className="col-sm-10">
            <input type="text"  onChange={(e)=>setRegisterDetails({...registerDetails,aadhar:e.target.value})} className="form-control form-control-lg" id="colFormLabelLg" />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label className="col-sm-2 col-form-label col-form-label-lg">address</label>
            <div className="col-sm-10">
            <input type="text"  onChange={(e)=>setRegisterDetails({...registerDetails,address:e.target.value})} className="form-control form-control-lg" id="colFormLabelLg" />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label className="col-sm-2 col-form-label col-form-label-lg">phone</label>
            <div className="col-sm-10">
            <input type="number"  onChange={(e)=>setRegisterDetails({...registerDetails,phone:e.target.value})} className="form-control form-control-lg" id="colFormLabelLg" />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label className="col-sm-2 col-form-label col-form-label-lg">city</label>
            <div className="col-sm-10">
            <input type="text"  onChange={(e)=>setRegisterDetails({...registerDetails,city:e.target.value})} className="form-control form-control-lg" id="colFormLabelLg" />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label className="col-sm-2 col-form-label col-form-label-lg">area</label>
            <div className="col-sm-10">
            <input type="text"  onChange={(e)=>setRegisterDetails({...registerDetails,area:e.target.value})} className="form-control form-control-lg" id="colFormLabelLg" />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label className="col-sm-2 col-form-label col-form-label-lg">pin</label>
            <div className="col-sm-10">
            <input type="text"  onChange={(e)=>setRegisterDetails({...registerDetails,pin:e.target.value})} className="form-control form-control-lg" id="colFormLabelLg" />
            </div>
        </div>
        <div className="text-center m-4 mt-2">
        <button type="button" onClick={TestRegister} className="btn btn-success btn-lg"> Submit</button>
        </div>
        </form>

       </>
    )
}
export default Register