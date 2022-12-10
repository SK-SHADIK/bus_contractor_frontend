import "./CSS/Style.css";
import Leftbar from "./Bars/Leftbar";
import Topbar from "./Bars/Topbar";
import {useState, useEffect} from 'react';
import axios from "axios";

const Dashboard=()=>{
    const [tranHis,setTranHis] = useState([]);
    let x=0;
    useEffect(()=>{
        axios.get("http://localhost:8000/api/Dashboard")
        .then((rsp)=>{
            setTranHis(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    tranHis.forEach(element => {
        x += parseInt(element.t_amount);        
    });
    return(
        <div>
            <Leftbar />
            <Topbar />
            <div class="container">
                <div class="content">
                   <div class="cards">
                        <div class="card">
                            <div class="box">
                               <h1>{tranHis.length}</h1>
                               <h3>Total Transactions</h3>
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <h1>{x}</h1>
                                <h3>Total Earn</h3>
                             </div>
                        </div>
                    </div> 
                    <div class="main">
                        <div class="buttons">
                            <a href={"/Payments"} >Make A Payment</a>
                        </div> 
                        <div class="buttons">
                            <a href={"/CreateTran"} >Add A Payment Manually</a>
                        </div> 
                    </div>
            
                </div>
            
            </div>
        </div>

    )
}
export default Dashboard;