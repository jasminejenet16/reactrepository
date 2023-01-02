import axios from "axios"
import React, { useEffect, useState ,useContext} from "react"
import {useParams} from 'react-router';
import UserContext from "../components/context";
import {useNavigate} from 'react-router-dom'



function View(){

  const value = useContext(UserContext);
  const{isLogged,setIsLogged}=value;
  const navigate = useNavigate();
    const params = useParams();

     const[Resume,setResume]=useState('')

    const getResumebyid = async () => {
       
        let {data}= await axios.get(`http://karka.academy/api/action.php?request=get_react_resume_by_id&user=jasmine&id=${params.id}` )
        let resume=data.data
        let fullresume=JSON.parse(resume.data)
        setResume({...fullresume})

      
    }
     useEffect(()=>{
        getResumebyid()
     })

    return(
       
        <>
           <div className="row bg-dark text-white text-center p-2">
                <div className="col-11">
                <h1 >Resume </h1>
                </div>
                <div className="col-1">
                <button className="btn btn-lg btn-danger"  onClick={()=>{setIsLogged(false);navigate('/')}}>Logout</button>
                </div>
            </div>

        <section class="container ">
        <div class="row mt-2 ">
            <div class="col-5 index bg-light">
              <h3 >{Resume.name}</h3>
               <p >{Resume.email}</p>
               <p >{Resume.phone_number}</p>
               <p >{Resume.role}</p>
               
               <h5>objective</h5>
               <p id="objective">{Resume.objective}</p>
             
               <h5>education</h5>
               <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Qualification</th>
                    <th scope="col">year</th>
                    <th scope="col">institute</th>
                    <th scope="col">percentage</th>
                  </tr>
                </thead>
                <tbody>
                    {Resume.education &&Resume.education.map((data,index)=>{
                        return(
                       <tr key={index}>
                       <td >{data.course}</td>
                       <td >{data.year}</td>
                       <td >{data.institute}</td>
                       <td >{data.percentage}</td>
                       </tr>
                        )

                    })}
                
                
                </tbody>
              </table>
    
               <h5>skill</h5>
               {Resume.skills&& Resume.skills.map((item)=>{
                return(
                  <ul>
                    <li>{item}</li>
                  </ul>
                )
               })}
               <h5>hobbies:</h5>
               {Resume.hobbies&& Resume.hobbies.map((item)=>{
                return(
                  <ul>
                    <li>{item}</li>
                  </ul>
                )
               })}
    
            </div>
            <div class="col-7">
                <h5>certification</h5>
            <table class="table">
                <thead>
                    <tr>
                      <th scope="col">course_name</th>
                      <th scope="col">duration_of_course</th>
                      <th scope="col">Institution</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {Resume.courses &&Resume.courses.map((data,index)=>{
                        return(
                       <tr key={index}>
                       <td >{data.course}</td>
                       <td >{data.duration}</td>
                       <td >{data.institutes}</td>
                       
                       </tr>
                        )
                    })}
                  </tbody>
            </table>
                <h5>project</h5>
              
                <table class="table">
                    <thead>
                        <tr>
                          <th scope="col">title</th>
                          <th scope="col">abstract</th>
                          <th scope="col">year</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                      {Resume.project &&Resume.project.map((data,index)=>{
                        return(
                       <tr key={index}>
                       <td >{data.title}</td>
                       <td >{data.abstract}</td>
                       <td >{data.year}</td>
                       
                       </tr>
                        )
                    })}
                          
                      </tbody>
                </table>
                <h5>working_experience:</h5>
                <p >{Resume.working_experience}</p>
                <h5 >personal_details</h5>
                <div className="row">
                  <div className="col-4">
                  <b><label>fathers_name:</label></b><br/>
                  <b><label>mothers_name:</label></b><br/>
                  <b><label>Dateofbirth:</label></b><br/>
                  <b><label>gender:</label></b><br/>
                  <b><label>maritial_status:</label></b><br/>
                  <b><label>Nationality:</label></b><br/>
                  <b><label>languages:</label></b>
                  </div>
                  <div className="col-7">
                  <i>{Resume.fathers_name}</i><br/>
                  <i>{Resume.mothers_name}</i><br/>
                  <i >{Resume.date_of_birth}</i><br/>
                 <i>{Resume.gender}</i><br/>
                 <i>{Resume.maritial_status}</i><br/>
                 <i>{Resume.nationality}</i><br/>
                 <i>{Resume.languages}</i><br/>

                  </div>

                </div>
              
                
    
    
    
            </div>
    
        </div>
        </section>
          
        </>
       
    )
}

export default View