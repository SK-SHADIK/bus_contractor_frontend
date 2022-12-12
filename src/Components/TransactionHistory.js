import "./CSS/Style.css";
import Leftbar from "./Bars/Leftbar";
import Topbar from "./Bars/Topbar";
import {useState, useEffect} from 'react';
import axios from "axios";
import { CSVLink } from "react-csv";

const TransactionHistory=()=>{
    const [trans,setTrans] = useState([]);
    let x=0;
    useEffect(()=>{
        axios.get("http://localhost:8000/api/TransactionView")
        .then((rsp)=>{
            setTrans(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

    const deleteTrans = (e, id)=>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get(`http://localhost:8000/api/DeleteTransaction/${id}`).then((rsp)=>{
            thisClicked.closest("tr").remove();
        });
    }


    trans.forEach(element => {
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
                                <h1>{trans.length}</h1>
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
                        <h3>Transaction History</h3>
                        <div class="btns"><CSVLink data={trans} filename="Transection List">EXPORT List</CSVLink></div>
                        <a href={"/CreateTran"} class="btns">Create A Transaction</a>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Passenger Name</th>
                                <th>Payment Amount</th>
                                <th>Payment Method</th>
                                <th colspan="2">Options</th>
                            </tr>
                                {
                                     trans.map((t)=>(
                                        <tr>
                                            <td>{t.t_id}</td>
                                            <td>{t.t_pname}</td>
                                            <td>{t.t_amount}</td>
                                            <td>{t.t_method}</td>
                                            <td><div class="btn"><a href={`/UpdateTransaction/${t.t_id}`}>Edit</a></div></td>
                                            <td><button class="btn" onClick={ (e) => deleteTrans(e, t.t_id) }>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            
                           
                        </table>
                    </div>
                </div>
            
            </div>
            
        </div>

    )
}
export default TransactionHistory;