import "./CSS/Style.css";
import Leftbar from "./Bars/Leftbar";
import Topbar from "./Bars/Topbar";
import { QRCodeCanvas } from "qrcode.react";

import {useState} from 'react';
// import axios from "axios";

const Payments=()=>{
    const [url, setUrl] = useState("");


  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#fff"}
      level={"H"}
    />
  );   
      
    return(
        <div>
            
            <Leftbar />
            <Topbar />
            <div class="container">
                <div class="content">
                    <div class="QR">
                       {qrcode}
      
                    </div>
                    <a href={"/CreateTran"} class="btn">Create Manually</a>
                </div>
            </div>
           
            
            
                        
        </div>

    )
}
export default Payments;