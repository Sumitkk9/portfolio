import React from "react";
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
const Info = ({indexValue,title,info,subtitle,list})=>{
    return <div className="infoDiv" style={{zIndex:indexValue}}>
        <div>
            <h3 style={{
                color:"#e2e2e2",
                fontSize:"2rem",
                lineHeight:"0px",
                marginTop:"15px"
            }}>
                {title}
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
               
            }}>{subtitle}</h4>

            {list? <ul style={{
                 color:"#e2e2e2",
                 fontSize:"1rem",
                 width:"70%"  
            }}>
                {list.map(li =>   <li>{li}</li>)}
              
            </ul> : 
            <p style={{
                 color:"#e2e2e2",
                 fontSize:"1rem",
                 width:"70%"  
            }}>{info}</p>
        }
            
        </div>
    </div>
}
export default Info