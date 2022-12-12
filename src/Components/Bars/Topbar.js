import "../CSS/Style.css";
// import {useState, useEffect} from 'react';
// import axios from "axios";

const Topbar=()=>{
    return(
        <div>
            <div class="container">
                <div class="header">
                    <div class="nav">
                        <div class="search">
                            <input type="text" placeholder="Search.." />
                            <button type="submit" class="btn">Search</button>
                        </div>
                        <div class="user">
                            <a href={"/Profile"} class="btn">PROFILE</a>
                            <a href={"/Login"} class="btn">Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Topbar;