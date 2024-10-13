
import { useState } from 'react';
import './index.css';
import axios from 'axios';
import {  Navigate, useNavigate } from 'react-router-dom';
import image1 from './assets/image/image.png'

function App() {
  const navigate = useNavigate()
  const [username,setusername] = useState("")
  const [Password,setpassword] = useState("")

   const Handlename = (event) => {
     return setusername(event.target.value)
   }
   const Handlepassword = (event) => {
     return setpassword(event.target.value)
   }
   function check()
   {
    var logindetails = axios.get(`http://localhost:5000/login?username=${username}&password=${Password}`)
    logindetails.then(function(data){
      if(data.data === true){
         navigate('/sucess')
      }
      else{
         navigate('/fail')
      }
    })
   }
  return (
      <>
      <div className="container">
       <div className='form_login'>
        <img src={image1} alt="" />
        <input type='' placeholder='Usernmae' onChange={Handlename} name='Username'></input>
        <input type='' placeholder='Password' onChange={Handlepassword} name='password'></input>
        <button onClick={check}>Login</button>
       </div>
       </div>
      </>
  );
}

export default App;
