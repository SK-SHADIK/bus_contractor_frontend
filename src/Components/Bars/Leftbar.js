import "../CSS/Style.css";
// import {useState, useEffect} from 'react';
// import axios from "axios";

const Leftbar=()=>{
    return(
        <div>
            <div class="side-menu">
                <div class="brand-name">
                    <h1>BUS CONTACTOR</h1>
                </div>
                <ul>
                    <li><span><a href={"/Dashboard"}>Dashboard</a></span> </li>
                    <li><span><a href={"/TransactionHistory"}>Transaction History</a></span> </li>
                    <li><span><a href={"/Profile"}>Account</a></span> </li>
                    <li><span><a href="#">Help</a></span></li>
                    <li><span><a href="#">Settings</a></span> </li>
                    <li><span><a href="#">Log Out</a></span> </li>
                </ul>
            </div>
        </div>

    )
}
export default Leftbar;