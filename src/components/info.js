import React from "react";
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
const Info = ({indexValue,title,info,subtitle,list,eduinfo})=>{
   
    const smallScreenSize = ()=> window.innerWidth<=900

   return <div className="infoDiv" style={{zIndex:indexValue}}>
        <div>
            <h3 style={{
                color:"#e2e2e2",
                fontSize: smallScreenSize()? "1.5rem" : "2rem",
                lineHeight:"0px",
                marginTop:"15px",
                fontFamily:"Wix Madefor Text",
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
                fontFamily:'Azeret Mono',
                 color:"#e2e2e2",
                fontSize: smallScreenSize()? "1rem" :"1rem",
                
               
            }}>{subtitle}</h4>

            {list? <ul style={{
                 color:"#e2e2e2",
                 fontSize:"1rem",
                 fontFamily:"Wix Madefor Text",
                 width: smallScreenSize()? "100%":"70%"  
            }}>
                {list.map(li =>   <li>{li}</li>)}
              
            </ul> : 
            <p style={{
                 color:"#e2e2e2",
                 fontSize:"1rem",
                 fontFamily:"Wix Madefor Text",
                 width:smallScreenSize()? "100%":"70%" 
            }}>{info}</p>
        }
           {eduinfo&& eduinfo.map((edu,index)=>(
            <>

            {index>0 && <SettingsEthernetIcon style={{
                 color:"#e2e2e2",
                fontSize:"2rem"
            }}/>}
             
             <h4 style={{
                color:"#e2e2e2",
               fontSize:"1rem",
              
              
              
           }}>{edu.education || edu.Achievements}</h4>
           <h4 style={{
                color:"#e2e2e2",
                fontFamily:"Wix Madefor Text",
               fontSize:"0.8rem",
             
              
           }}>{edu.educationInfo}</h4>
             
           </>
           ))} 
        </div>
    </div>
}
export default Info