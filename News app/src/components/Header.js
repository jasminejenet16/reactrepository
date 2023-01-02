
import { useSelector ,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import{setIslogged,} from '../Redux/Slices/loginslice'




function Header(){

    const navigate = useNavigate();
     
    const dispatch=useDispatch()
     
    const {data}=useSelector((state)=>state.home)
    
     let headercategories=data.map(data=>data.category)
     let category= headercategories.filter((data,index)=>
     headercategories.indexOf(data)===index
     )


      const log=()=>{
       
       dispatch(setIslogged(false))
       navigate('/')
     }
    
    
       
    

    return(
        <>
                <nav className="navbar navbar-expand-lg nav bg-dark text-white  ">
            <a className="navbar-brand" width="70%"><img src="https://www.freeiconspng.com/thumbs/news-icon/news-icon-24.png" width="50%" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto -mt2 mt-lg-0" id="navcategory">
                <li className="nav-item  p-3 " ><Link to={'/home'}><span className='navli'>home</span> </Link> </li>
                    {category.map((item)=>{
                        return(
                            <>
                           
                            <li className="nav-item  p-3 ">
                            <Link to={`/category/${item}`}><span className='navli'>{item}</span></Link>
                           </li>
                           </>
                        )
                    })}
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <a> <button type="button" className="btn btn-outline-warning"><Link to={'/bookmark'}><span className='bookmark'>BOOK MARK</span> </Link></button> </a>
                </form>

                <form className="form-inline my-2 p-4 my-lg-0">
                    <a> <button type="button" onClick={()=>log()} className="btn btn-outline-warning">LOGOUT</button> </a>
                </form>

            </div>
        </nav>
        <div className="banner text-center pt-3 pb-3 ">
          <a href="https://www.foxsports.com/stories/college-football/big-noon-kickoff-everything-you-need-to-know-for-penn-state-at-michigan" target="_blank"> <img src="https://tpc.googlesyndication.com/simgad/18230054165012439425"/> </a>
        </div>
    
        </>
    )

}

export default Header

