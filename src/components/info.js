import React from "react";
import ColorFullButton from "./button";
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
const Info = ({indexValue})=>{
    return <div className="infoDiv" style={{zIndex:indexValue}}>
        <div>
            <h3 style={{
                color:"#e2e2e2",
                fontSize:"2rem",
                lineHeight:"0px",
                marginTop:"15px"
            }}>
                About
            </h3>
        </div>
        <div>
            <SettingsEthernetIcon style={{
                 color:"#e2e2e2",
                fontSize:"2rem"
            }}/>
            <h4 style={{
                 color:"#e2e2e2",
                fontSize:"1rem",
                lineHeight:"0px",
               
            }}>Brief introduction</h4>
            <p style={{
                 color:"#e2e2e2",
                 fontSize:"1rem",
                 width:"70%"  
            }}>Frontend Developer with proven expertise in creating dynamic and responsive websites using React.js, Material-UI (MUI), and JavaScript. Skilled in delivering user-centric designs and seamless functionality for both mobile and web platforms. Experienced in WordPress development, API integration, and state management using Redux Toolkit. Passionate about learning new technologies to stay competitive in a rapidly evolving digital landscape.</p>
            <div style={{display:"flex"}}>
                <div style={{marginRight:"20px"}}>
                <ColorFullButton
                title= "linkedin"
                clr="transparent"
                textclr="#e2e2e2"
                hvrclr="#00ffa3"
                border={true}
                />
                </div>

                <div>
                <ColorFullButton
                title= "Chat With Me"
                clr="#00ffa3"
                />
                </div>
            </div>
        </div>
    </div>
}
export default Info