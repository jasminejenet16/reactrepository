
import{useParams ,Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";


function Category(){
     const params=useParams()
     const navigate = useNavigate();
     const {data}=useSelector((state)=>state.home)
    const {isLogged}=useSelector((state)=>state.login)
    const log =localStorage.getItem('login')
     useEffect(()=>{
      if(!isLogged && log=='false'){
          navigate('/')
      }
    },[isLogged])
    return(
       <>
     <Header/>
  <div className="row ">
   
    {data && data.map((item)=>{
           
                
                if(params.category==item.category){
                   return(
                    <div className="card col-4 "  >
                    <img src={item.newsImage} className="card-img-top"  alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title"><Link to={`/view/${item.newsId}`}>{item.newsTitle}</Link></h3>   
                    </div>
                    </div>
                   )
                }
               
    
            
        })
       }


       </div>
       <Footer/>
       </>
    )
}
export default Category;
