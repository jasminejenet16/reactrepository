
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const loginState={

register:{
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
},
   
Logindata:{
    request: "candidate_login",
    email: "",
    password: ""
},

isLogged:false,

isRegistered:false
   
}

export const loginSlice=createSlice({
    name:'login',
    initialState:loginState,
    reducers:{
     setRegister:(state,action)=>{
        state.register=action.payload
     },
     setLogin:(state,action)=>{
        state.Logindata=action.payload
     },
     setIslogged:(state,action)=>{
        state.isLogged=action.payload
     },

     setisRegistered:(state,action)=>{
      state.isRegistered=action.payload
     }
    }
})

// api for register
 export const TestRegister =(register)=> async(dispatch) => {
    const {data}=await axios.post('http://karka.academy/api/action.php?request=create_candidate',JSON.stringify(register))
    console.log(data)
    if(data.status=='success'){
      dispatch(setisRegistered(true))
    }

}

// api for login

 export const Testlogin =(Logindata) =>async (dispatch) => {
    const { data } = await axios.post('http://karka.academy/api/action.php', JSON.stringify(Logindata))
    
    console.log(data)
    if(data.status=='success'){
       dispatch(setIslogged(true))
       localStorage.setItem('login',true)
    }

  }

export default loginSlice.reducer
export const { setRegister,setLogin,setIslogged,setisRegistered } = loginSlice.actions