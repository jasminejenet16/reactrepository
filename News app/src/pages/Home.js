
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";


function Home() {

    const { isLogged } = useSelector((state) => state.login)
    const { data } = useSelector((state) => state.home)
    const navigate = useNavigate();
    const log = localStorage.getItem('login')
    
    useEffect(() => {
        if (!isLogged && log == 'false') {

            navigate('/')
        }
    }, [isLogged])

    return (
        <>
          <Header/>
            <div className="row ">

                {data && data.map((item) => {
                    return (
                        <div className="card col-4 "  >
                            <img src={item.newsImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title"><Link to={`/view/${item.newsId}`}>{item.newsTitle}</Link></h3>
                            </div>
                        </div>


                    )

                })
                }
            </div>
            <Footer />

        </>
    )

}

export default Home;