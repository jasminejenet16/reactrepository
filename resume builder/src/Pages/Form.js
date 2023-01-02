import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

import UserContext from "../components/context";


function Form() {
     
    const value = useContext(UserContext);
    const{isLogged,setIsLogged}=value;
    const log =localStorage.getItem('login')
    const navigate = useNavigate();

    // useEffect(
    //     ()=>{
    //         if
    //     },[isLogged]
    // )

    useEffect(
        ()=>{
       
          if(!isLogged && log=='false'){
            navigate('/')
          }
        },[isLogged]
      )


    const [formInput, setFormInput] = useState({

        skills: [],
        education: [],
        courses: [],
        project: [],
        languages: [],
        hobbies: [],
        name: '',
        email: '',
        phone_number: '',
        role: '',
        objective: '',
        working_experience: '',
        fathers_name: '',
        mothers_name: '',
        date_of_birth: '',
        gender: '',
        maritial_status: '',
        nationality: '',
    })

    const TestAPI = async () => {

        const api = {
            request: 'create_react_resume',
            user: 'jasmine',
            resume: formInput

        }
        const data = await axios.post('http://karka.academy/api/action.php', JSON.stringify(api))
        console.log(data)
    }

    const [updateSkill, setUpdateSkill] = useState('')
    const [updateEducation, setUpdateEducation] = useState({
        course: '',
        year: '',
        institute: '',
        percentage: ''
    })
    const [updateCourse, setUpdateCourse] = useState({
        course: '',
        duration: '',
        institutes: ''
    })
    const [updateProject, setUpdateProject] = useState({
        title: '',
        abstract: '',
        year: '',
    })
    const [updateLanguages, setUpdateLanguages] = useState('')
    const [updateHobbies, setUpdateHobbies] = useState('')
    const [getuserresume, setGetResume] = useState('')


    // for adding skills and single values

    const getValue = (key, value,) => {
        if (key == 'skills' || 'education' || 'courses' || 'project' || 'languages' || 'hobbies') {
            let newInput = { ...formInput, [key]: [...formInput[key], value] }
            setFormInput(newInput);
        }
        // } else {
        //     let newInput = { ...formInput, [key]: value }
        //     setFormInput(newInput);
        // }
    }

    const deleteSkill = (index, value) => {

        let delete_item = formInput[value].filter((item, id) => { return (id !== index) })
        setFormInput({ ...formInput, [value]: delete_item })

    }

  
    // for adding education


    const addEducation = (key, value) => {
        let newedu = { ...updateEducation, [key]: value, }
        setUpdateEducation(newedu);
    }

    const addCourse = (key, value) => {
        let newcourse = { ...updateCourse, [key]: value, }
        setUpdateCourse(newcourse);
    }

    const addProject = (key, value) => {
        let newproject = { ...updateProject, [key]: value, }
        setUpdateProject(newproject);
    }

    //  api for get resume

    useEffect(() => {
        getResume()
        // deleteResume()

    } ,[])

    


    const getResume = async () => {
        let { data } = await axios.get(`http://karka.academy/api/action.php?request=get_user_react_resume&&user=jasmine`)
        
        setGetResume(data.data)
    }
    // console.log(getResume())

    // api for delete resume

    const deleteResume = async (id) => {
       
        let {data} = await axios.get(`http://karka.academy/api/action.php?request=delete_react_user_resume&user=jasmine&id=${id}` )
       
        setGetResume(data.data)

    }
    

    return (
        <>
            <div className="row bg-dark text-white text-center p-3">
                <div className="col-11">
                <h1 >Resume </h1>
                </div>
                <div className="col-1">
                <button className="btn btn-lg btn-danger"  onClick={()=>{setIsLogged(false);navigate('/')}}>Logout</button>
                </div>

            </div>
             
              <form className="container">
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault01">name</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'name': e.target.value })} class="form-control" id="validationDefault01"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Email</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'email': e.target.value })} class="form-control" id="validationDefault02"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault01">phone_number</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'phone_number': e.target.value })} class="form-control" id="validationDefault01"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Role</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'role': e.target.value })} class="form-control" id="validationDefault02"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault02">objective</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'objective': e.target.value })} class="form-control" id="validationDefault02"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Skill</label>
                    <input type="text" value={updateSkill} onChange={(e) => setUpdateSkill(e.target.value)}  class="form-control" id="validationDefault02"  required/>  
                    </div>
                    <button class="btn btn-primary" type="button" onClick={() => { getValue('skills', updateSkill); setUpdateSkill('') }}>Add skill</button>
                    {formInput.skills.map((data, index) => {
                    return (
                        <>
                            <ul>
                                <li>{data} <button onClick={() => deleteSkill(index, 'skills')}>DELETE</button></li>
                            </ul>
                        </>
                    )
                   })}
                   
                   <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">COURSE</th>
                        <th scope="col">YEAR</th>
                        <th scope="col">INSTITUTE</th>
                        <th scope="col">PERCENTAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><input type="text" value={updateEducation.course} onChange={(e) => addEducation('course', e.target.value)} /></td>
                            <td scope="row"><input type="text" value={updateEducation.year} onChange={(e) => addEducation('year', e.target.value)} /></td>
                            <td><input type="text" value={updateEducation.institute} onChange={(e) => addEducation('institute', e.target.value)} /></td>
                            <td><input type="text" value={updateEducation.percentage} onChange={(e) => addEducation('percentage', e.target.value)} /></td>
                            <td><button class="btn btn-primary" type="button" onClick={() => { getValue('education', updateEducation); setUpdateEducation({ ...updateEducation, course: '', year: '', institute: '', percentage: '' }) }}>Add Education</button></td>
                        </tr>
                    </tbody>
                    </table>
                    {formInput.education.map((data, index) => {
                    return (
                        <>
                            <table>
                                <tr>
                                    <td>{data.course}</td>
                                    <td>{data.year}</td>
                                    <td>{data.institute}</td>
                                    <td>{data.percentage}</td>
                                    <td> <button onClick={() => deleteSkill(index, 'education')}>DELETE</button></td>
                                </tr>
                            </table>
                        </>
                    )
                   })}

                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">COURSE</th>
                        <th scope="col">DURATION</th>
                        <th scope="col">INSTITUTE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row"><input type="text" value={updateCourse.course} onChange={(e) => addCourse('course', e.target.value)} /></td>
                        <td><input type="text" value={updateCourse.duration} onChange={(e) => addCourse('duration', e.target.value)} /></td>
                        <td><input type="text" value={updateCourse.institutes} onChange={(e) => addCourse('institutes', e.target.value)} /></td>
                        <td> <button class="btn btn-primary" type="button"onClick={() => { getValue('courses', updateCourse); setUpdateCourse({ ...updateCourse, course: '', duration: '', institutes: '' }) }} >Add Course</button></td>
                        </tr>
                    </tbody>
                    </table>
                    
                       
                {formInput.courses.map((data, index) => {
                        return (
                            <>
                                <table>
                                    <tr>
                                        <td>{data.course}</td>
                                        <td>{data.duration}</td>
                                        <td>{data.institutes}</td>
                                        <td> <button onClick={() => deleteSkill(index, 'courses')}>DELETE</button></td>
                                    </tr>
                                </table>
                            </>
                        )
                    })}

                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">TITLE</th>
                        <th scope="col">ABSTRACT</th>
                        <th scope="col">YEAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row"><input type="text" value={updateProject.title} onChange={(e) => addProject('title', e.target.value)} /></td>
                        <td><input type="text" value={updateProject.abstract} onChange={(e) => addProject('abstract', e.target.value)} /></td>
                        <td><input type="text" value={updateProject.year} onChange={(e) => addProject('year', e.target.value)} /></td>
                        <td> <button class="btn btn-primary" type="button" onClick={() => { getValue('project', updateProject); setUpdateProject({ ...updateProject, title: '', abstract: '', year: '' }) }}>Add Project</button></td>
                        </tr>
                    </tbody>
                    </table>
                    {formInput.project.map((data, index) => {
                    return (
                        <>
                            <table>
                                <tr>
                                    <td>{data.title}</td>
                                    <td>{data.abstract}</td>
                                    <td>{data.year}</td>
                                    <td> <button onClick={() => deleteSkill(index, 'project')}>DELETE</button></td>
                                </tr>
                            </table>
                        </>
                    )
                    })}
                     <div class="col-md-6 mb-3">
                    <label for="validationDefault01">working experience</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'working_experience': e.target.value })} class="form-control" id="validationDefault01"  required/>
                    </div>  
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Hobbies</label>
                    <input type="text" value={updateHobbies} onChange={(e) => setUpdateHobbies(e.target.value)} class="form-control" id="validationDefault02"  required/>  
                    </div>
                    <button class="btn btn-primary" type="button" onClick={() => { getValue('hobbies', updateHobbies); setUpdateHobbies('') }}>Add Hobbies</button>
                    
                    {formInput.hobbies.map((data, index) => {
                        return (
                            <>
                                <ul>
                                    <li>{data} <button onClick={() => deleteSkill(index, 'hobbies')}>DELETE</button></li>
                                </ul>

                            </>

                        )
                    })}   
                    <p>personal_details</p>  

                    <div class="col-md-6 mb-3">
                    <label for="validationDefault01">fathers_name</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'fathers_name': e.target.value })} class="form-control" id="validationDefault01"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault01">mothers_name</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'mothers_name': e.target.value })} class="form-control" id="validationDefault01"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault01">date_of_birth</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'date_of_birth': e.target.value })} class="form-control" id="validationDefault01"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault01">Gender</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'gender': e.target.value })} class="form-control" id="validationDefault01"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault01">maritial_status</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'maritial_status': e.target.value })} class="form-control" id="validationDefault01"  required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault01">nationality</label>
                    <input type="text" onChange={(e) => setFormInput({ ...formInput, 'nationality': e.target.value })} class="form-control" id="validationDefault01"  required/>
                    </div>    
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Hobbies</label>
                    <input type="text" value={updateLanguages} onChange={(e) => setUpdateLanguages(e.target.value)}  class="form-control" id="validationDefault02"  required/>  
                    </div>
                    <button class="btn btn-primary" type="button" onClick={() => { getValue('languages', updateLanguages); setUpdateLanguages('') }} >Add Languages</button>
                    {formInput.languages.map((data, index) => {
                    return (
                        <>
                            <ul>
                                <li>{data} <button onClick={() => deleteSkill(index, 'languages')}>DELETE</button></li>
                            </ul>

                        </>

                    )
                  })}
                    
                </div>

                
                </form>

                <button class="btn btn-primary container m-5" type="button" onClick={TestAPI} >Submit form</button>

        
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">index</th>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">view</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>

                    {getuserresume && getuserresume.map((item, index) => {
                        return(
                            <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.id}</td>
                            <td> {JSON.parse (item.data).name} </td>

                            <td><button><Link to={`/view/${item.id}`}>VIEW</Link></button></td>
                            <td><button onClick={()=>deleteResume(item.id)}>DELETE</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>

        </>


    )
}

export default Form;