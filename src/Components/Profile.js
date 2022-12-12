import "./CSS/Style.css";
import Leftbar from "./Bars/Leftbar";
import Topbar from "./Bars/Topbar";
import {useState, useEffect} from 'react';
import axios from "axios";

const Profile=()=>{
    document.title = "Profile";
    const [profile ,setProfile] = useState({});
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Profile/${localStorage.getItem("c_id")}`).then((res)=>{
            setProfile(res.data);
        });
    },[]);
    return(
        <div>
            <Leftbar />
            <Topbar />
            <div class="container">
                <div class="content">
                    <div class="tables">
                        <label>NAME: </label> 
                        <input type="text" name="c_name" value={profile.c_name} readonly /><br/>
                        <label>EMAIL: </label>
                        <input type="text" name="c_mail" value= {profile.c_mail} readonly /><br/>
                        <label>ADDRESS: </label>
                        <input type="text" name="c_add" value={profile.c_add} readonly /><br/>
                        <label>PASSWORD: </label>
                        <input type="text" name="c_pass" value={profile.c_pass} readonly /><br/>
                        <a href={"/ChangeInformation"} class="btn">Change Information</a>
                    </div>
                </div>

            </div>
            
        </div>

    )
}
export default Profile;