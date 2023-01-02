
import {Link} from 'react-router-dom'
import { useSelector ,useDispatch} from "react-redux";
import { setdeletebook} from "../Redux/Slices/homeSlice";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

function Bookmark(){
    const {bookmark}=useSelector((state)=>state.home)
    const dispatch = useDispatch()
    const navigate = useNavigate();
     const {isLogged}=useSelector((state)=>state.login)
     const log =localStorage.getItem('login')
    useEffect(()=>{
        if(!isLogged && log=='false'){
            navigate('/')
        }
      },[isLogged])
      
    let uniquebookmark=bookmark.filter((data,index)=>
      bookmark.indexOf(data)===index
    )
    console.log(uniquebookmark);

    
     const   deletebookmark=(id)=>{
     const  del=uniquebookmark.filter((data,index)=>index!=id)
     console.log(del);

     dispatch(setdeletebook(del))
     }
   
   
       

    return(
        <>
        <div className="row">
            <Header/>
        {uniquebookmark && uniquebookmark.map((data,index)=>{
        
                return(
                    <div className="card col-4 "  >
                    <img src={data.newsImage} className="card-img-top"  alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title"><Link to={`/view/${data.newsId}`}>{data.newsTitle}</Link></h3>   
                    </div>
                    <button className="btn btn-large btn-warning"  onClick={()=>deletebookmark(index)}   > DELETE</button>
                    </div>
                )  
            
        })
        }
        

         </div>
         <Footer/>
        </>
    )
}
export default Bookmark


