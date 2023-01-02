import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './Redux/Slices/homeSlice'
import loginReducer from './Redux/Slices/loginslice'




export const store= configureStore({
    reducer:{
       home:homeReducer,
       login:loginReducer
    }
})