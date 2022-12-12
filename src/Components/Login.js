import "./CSS/UserStyle.css";
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login=()=>{

    const[c_mail,setMail] = useState("");
    const[c_pass,setPass] = useState("");
    const navigate = useNavigate();

    const loginSubmit= ()=>{
        var obj = {c_mail: c_mail, c_pass: c_pass};

        axios.post("http://127.0.0.1:8000/api/Login", obj)
        .then(resp=>{
            console.log(resp.data);
            localStorage.setItem("c_id", resp.data.c_id);
            navigate("/Dashboard");

        });


    }
    

    return(
        <div>
            <div class="containerab">
               <div class="forms">
                   <div class="form login">
                       <span class="title">Log In</span>

       
                           <div class="input-field">
                               <input type="text" value={c_mail} onChange={(e)=>setMail(e.target.value)}  placeholder="ENTER YOUR EMAIL" />
                           </div>
       
                           <div class="input-field">
                               <input type="password" value={c_pass} onChange={(e)=>setPass(e.target.value)} placeholder="ENTER YOUR PASSWORD" />
                           </div>
       
       
                           <div>
                               <button onClick={loginSubmit}>Log In</button>
                           </div>
       
       
       

                       <div class="signup">
                           <span class="txt">I HAVE NOT ANY ACCOUNT?</span>
                           <a href={"/Regestration"} class="nxtpage">REGESTRATION</a>
                       </div>
                   </div>
               </div>
            </div>

        </div>

    )
}
export default Login;