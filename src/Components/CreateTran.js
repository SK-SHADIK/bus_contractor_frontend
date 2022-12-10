import "./CSS/Style.css";
import Leftbar from "./Bars/Leftbar";
import Topbar from "./Bars/Topbar";
import {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreateTran=()=>{
    const[t_pname,setName] = useState("");
    const[t_amount,setAmount] = useState("");
    const[t_method,setMethod] = useState("");
    const navigate = useNavigate();

    const handleForm = (event) =>{
        event.preventDefault();
        setName('');
        setAmount('');
        setMethod('');
        var data = {t_pname:t_pname, t_amount:t_amount, t_method:t_method};
        axios.post("http://127.0.0.1:8000/api/AddTransaction", data).then((rsp)=>{
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
                        <form action="" method="POST" onSubmit={handleForm}>
                            <label>Passenger NAME: </label> 
                            <input type="text" name="t_pname" id="t_pname" value={t_pname} onChange={(e)=>{setName(e.target.value)}} /><br />
                            <label>Payment Amount: </label>
                            <input type="text" name="t_amount" id="t_amount" value={t_amount} onChange={(e)=>{setAmount(e.target.value)}} /><br />
                            <label>Payment Method: </label>
                            <select name="t_method" id="t_method" value={t_method} onChange={(e)=>{setMethod(e.target.value)}}>
                                <option value="Bkash">Bkash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="Cash">Cash</option>
                            </select><br />
                            <button class="btn">Save</button>
                        </form>
                    </div>
                
                 </div>
            
            
            </div>
            
        </div>

    )
}
export default CreateTran;