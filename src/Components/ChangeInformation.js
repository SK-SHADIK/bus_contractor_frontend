import "./CSS/Style.css";
import Leftbar from "./Bars/Leftbar";
import Topbar from "./Bars/Topbar";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const ChangeInformation=()=>{
    document.title = "Edit Profile";
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Profile/${id}`).then((res)=>{
            setInputs({
                c_id:res.data.c_id,
                c_name:res.data.c_name,
                c_mail:res.data.c_mail,
                c_pass:res.data.c_pass,
                c_add:res.data.c_add,
                
            });
        });
    },[id]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const submitForm = (e) =>{
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";

        const fData = new FormData();
        fData.append("c_id", inputs.c_id);
        fData.append("c_name", inputs.c_name);
        fData.append("c_mail", inputs.c_mail);
        fData.append("c_pass", inputs.c_pass);
        fData.append("c_add", inputs.c_add);

       
        
        axios.post("http://127.0.0.1:8000/api/ProfileUpdate",fData)
        .then((rsp)=>{
                console.log(rsp.data)
                    
                navigate('/Profile');          
                thisClicked.innerText = "Update";
            }
        )};
                  
    

    return(
        <div>
            <Leftbar />
            <Topbar />
            <div class="container">
                <div class="content">
                    <div class="editabletables">
                        <form action="#">
                             <label>NAME: </label> 
                             <input type="text" name="c_name" value={inputs.c_name ||'' } onChange={handleChange} /><br />
                             <label>EMAIL: </label>
                             <input type="text" name="c_mail" value={inputs.c_mail ||'' } onChange={handleChange} /><br />
                             <label>ADDRESS: </label>
                             <input type="text" name="c_add" value={inputs.c_add ||'' } onChange={handleChange} /><br />
                             <label>PASSWORD: </label>
                             <input type="text" name="c_pass" value={inputs.c_pass ||'' } onChange={handleChange} /><br />
                             <button class="btn" onClick={submitForm}>Save</button>
                        </form>
                
                    </div>

                 </div>
            </div>
            
        </div>

    )
}
export default ChangeInformation;