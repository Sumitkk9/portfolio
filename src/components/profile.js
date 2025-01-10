import React from "react";
import ProfileImg from "../imgs/profileimg.jpg"
import ColorFullButton from "./button";
import { yourName,role } from "../constants";
import { resumeUrl,linkedIn,github } from "../constants";

const Profile = () =>{

    const smallScreenSize = ()=> window.innerWidth<=900
    return <div className="ProfileDiv">
        <div>
            <img style={{
                width:  smallScreenSize()? "40%": "80%",
                borderRadius: smallScreenSize()? "200px": "120px"
            }} 
            src={ProfileImg} 
            alt="Profile Img"
            />
        </div>

        <div>
            <h1 style={{
                color:"#e2e2e2",
                fontSize: smallScreenSize()? "1rem":"1.5rem",
               
            }}>{yourName}</h1>
            <h2 style={{
                color:"#e2e2e2",
                 fontSize: smallScreenSize()? "2rem":"4rem",
                  lineHeight:"1px"
            }}>{role}</h2>
            <div style={{display: smallScreenSize()? "grid" :"flex" ,
                gridTemplateColumns: smallScreenSize()? " 25% 33% 30%" : " 15% 20% 17%",
                gap:smallScreenSize&& "5px"
            }}>
                <div style={{marginRight: smallScreenSize()? "0rem":"2rem"}}>
                <ColorFullButton
                title="Resume"
                clr="#00ffa3"
                textclr="black"
                url={resumeUrl}
                border={true}
                />
                </div>
               
               <div style={{marginRight:smallScreenSize()? "1rem":"2rem"}}>
               <ColorFullButton
                title= "linkedin"
                clr="transparent"
                textclr="#e2e2e2"
                hvrclr="#00ffa3"
                url={linkedIn}
                border={true}
                />
               </div>
                 <div>
                 <ColorFullButton
                 title="My Github"
                 clr="transparent"
                 textclr="white"
                 url={github}
                 border={true}/>
                    </div>
               
            </div>
        </div>
    </div>
}
export default Profile