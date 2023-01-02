
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Footer(){

    const {data}=useSelector((state)=>state.home)
    let headercategories=data.map(data=>data.category)

     let category= headercategories.filter((data,index)=>
     headercategories.indexOf(data)===index
     )

    return(

        <div className="row m-0 p-0 bg-dark text-white">
            <div className="col-6 text-center">
                <a className="navbar-brand"><img src="https://www.freeiconspng.com/thumbs/news-icon/news-icon-24.png" width="50%" /></a>
                <h2>News Letter</h2>
                <p>Want to know what we,re upto sign-up for the newsletter and join our tribe</p>


            </div>
            <div className="col-3">
                <h5 >categories</h5>
                <ul>
                {category.map((item)=>{
                        return(
                            <li >
                            <Link to={`/category/${item}`}>{item}</Link>
                           </li>
                        )
                    })}
                    
                </ul>
                <h5>Address</h5>
                <p>4/78,near MNB complex
                    new delhi,</p>
                <p>postal code:688 988</p>
                
            </div>
            <div class="col-3">
                 <h5 >Follow us</h5>
                  <ul>
                    <li><a href="https://www.facebook.com/ " target="_blank">facebook</a></li>
                    <li><a href="https://www.Instagram.com/" target="_blank">Instagram</a></li>
                    <li><a href="https://www.Twitter.com/ " target="_blank">Twitter</a></li>
                  </ul>
                  <h5>contact</h5>
                  <p>phone:1289304789</p>
                  <p>Email:newsletter@gmail.com</p>

            </div>

        </div>

    )
}

export default Footer;