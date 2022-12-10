import "./CSS/Style.css";
import Leftbar from "./Bars/Leftbar";
import Topbar from "./Bars/Topbar";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const UpdateTransaction=(props)=> {
    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/UpdateTransaction/${id}`).then((res)=>{
            setInputs({
                t_id:res.data.t_id,
                t_pname:res.data.t_pname,
                t_amount:res.data.t_amount,
                t_method:res.data.t_method,
                
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
        console.log(inputs);
        axios.post(`http://localhost:8000/api/UpdateTransaction`, inputs).then((rsp)=>{
            navigate('/TransactionHistory');
        });
    }
    


    
    return(
        <div>
            <Leftbar />
            <Topbar />
            <div class="container">
                <div class="content">
                    <div class="editabletables">
                        <form>
                            <label>Transaction ID: </label>
                            <input readOnly name="t_id" id="id" value={inputs.t_id || '' } onChange={handleChange} /><br/>
                            <label>Passenger NAME: </label> 
                            <input type="text" name="t_pname" id="pname" value={inputs.t_pname || '' } onChange={handleChange}/><br />
                            <label>Payment Amount: </label>
                            <input type="text" name="t_amount" id="amount" value={inputs.t_amount || '' } onChange={handleChange} /><br />
                            <label>Payment Method: </label>
                            <select name="t_method" id="method" value={inputs.t_method || '' } onChange={handleChange}>
                                <option value="Bkash">Bkash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="Cash">Cash</option>
                            </select><br />
                            <button class="btn" onClick={submitForm}>Save</button>
                        </form>
                    </div>
                
                 </div>
            
            
            </div>
            
        </div>

    )
}
export default UpdateTransaction;