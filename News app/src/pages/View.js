
import { useParams } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import Header from '../components/Header';
import Footer from "../components/Footer";
import { setBookmark } from "../Redux/Slices/homeSlice";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";



function View(){
    
    const params = useParams();
    const navigate = useNavigate();
    const {data}=useSelector((state)=>state.home)
    const dispatch = useDispatch()
    const log =localStorage.getItem('login')
    const {isLogged}=useSelector((state)=>state.login)
    useEffect(()=>{
        if(!isLogged && log=='false'){
            navigate('/login')
        }
      },[isLogged])
    return(
        <>
        <Header/>
         {
            data && data.map((data)=>{
                if(data.newsId==params.id ){
                    return(
                        <div className="card mb-3 mt-3 container" >
            
                        <div className="text-center mt-3">
                            <img src={data.newsImage} id="bigimage" alt="..." width="600px"/>
                        </div>
                        
                         <div className="card-body viewtext">
                            <h5 className="card-title" id="cardtitle">{data.newsTitle}</h5>
                            <span className="card-text" id="state">{data.state}</span>|
                            <span className="card-text" id="district">{data.district}</span>|
                            <span className="card-text" id="country">{data.country}</span>
                            <p className="card-text" id="newstype">{data.newsType}</p>
                            <p className="card-text" id="category">{data.category}</p>
                            <p className="card-text" id="content">{data.content}</p>
                            <p className="card-text"><small className="text-muted" id="author">{data.author}</small></p>
                            <p className="card-text text-muted" id="date">{data.date}</p>
                            <button className="btn btn-primary"  onClick={()=>{dispatch(setBookmark(data))}}>BOOKMARK</button>
                                
                        </div>
                        
                    
                    </div>
                    )
                    }
            })
         }
         <Footer/>
           

        </>
    )
}

export default View;