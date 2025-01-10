import React from "react";
import ColorFullButton from "./button";
import { resumeUrl } from "../constants";
import "../components/Style.css"
import { yourName } from "../constants";


const Header = ()=>{
    const smallScreenSize = ()=> window.innerWidth<=900

    return <div className="headerMainDiv">
        <div style={{
            display:"flex",
            alignItems:"center"
            }}>
            <h1 style={{
                color:"white",
                marginRight:"5%",
                fontSize:"1.3rem",
                cursor:"pointer",
                display:"inline"
            }}
            onClick={()=> window.open("/","_self")}
            >{yourName}</h1>

            <div style={{display:smallScreenSize()&& "none"}}>
            <ColorFullButton 
            clr="transparent"
            textclr="white"
            hvrclr="#00ffa3"
            title= "My Resume"
            url={resumeUrl}
            border={true}
            />
            </div>
           
        </div>
        <div style={{
           alignItems:"center",
           
        }}>
            <button style={{
                border:"none",
                 color:"white",
                 cursor:"pointer",
                padding:"5px",
                fontSize:"0.8rem"
            }}>Contact Us</button>
        </div>
       
    </div>
}
export default Header




