import "./CSS/UserStyle.css";
import {useState} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const Regestration=()=>{
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Account Creating...";
        
        axios.post("http://127.0.0.1:8000/api/Regestration",inputs)
        .then((rsp)=>{
            if (rsp.data.status === 200) {
                navigate('/Login');
            }
        })
                
    }

    return(
        <div>
            <div class="containerab">
               <div class="forms">
                   <div class="form login">
                       <span class="title">CREATE ACCOUNT</span>
                       <form action="#">
                           <div class="input-field">
                               <input type="text" name="c_name" value={inputs.c_name || '' } onChange={handleChange} placeholder="ENTER USER NAME" />
                           </div>
       
                           <div class="input-field">
                               <input type="text" name="c_mail" value={inputs.c_mail ||'' } onChange={handleChange} placeholder="ENTER YOUR EMAIL" />
                           </div>
       
                           <div class="input-field">
                               <input type="text" name="c_add" value={inputs.c_add ||'' } onChange={handleChange} placeholder="ENTER YOUR ADDRESS" />
                           </div>
       
                           <div class="input-field">
                               <input type="password" name="c_pass" value={inputs.c_pass ||'' } onChange={handleChange} placeholder="ENTER YOUR PASSWORD" />
                           </div>
       
       
                           <div>
                               <button onClick={submitForm}>CREATE ACCOUNT</button>
                           </div>
       
       
       
                       </form>
                       <div class="signup">
                           <span class="txt">I ALREADY HAVE AN ACCOUNT?</span>
                           <a href={"/Login"} class="nxtpage">LOGIN</a>
                       </div>
                   </div>
               </div>
        </div>

    </div>

    )
}
export default Regestration;