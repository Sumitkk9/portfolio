import React from "react";
import ProfileImg from "../imgs/profileimg.jpg"
import ColorFullButton from "./button";
import { yourName,role } from "../constants";

const Profile = () =>{
    return <div className="ProfileDiv">
        <div>
            <img style={{
                width:"80%",
                borderRadius:"120px"
            }} 
            src={ProfileImg} 
            alt="Profile Img"
            />
        </div>

        <div>
            <h1 style={{
                color:"#e2e2e2",
                fontSize:"1.5rem",
               
            }}>{yourName}</h1>
            <h2 style={{
                color:"#e2e2e2",
                 fontSize:"4rem",
                  lineHeight:"1px"
            }}>{role}</h2>
            <div style={{display:"flex"}}>
                <div style={{marginRight:"2rem"}}>
                <ColorFullButton
                title="Resume"
                clr="#00ffa3"
                textclr="black"
                border={true}
                />
                </div>
               
                 <div>
                 <ColorFullButton
                 title="My Github"
                 clr="transparent"
                 textclr="white"
                 border={true}/>
                    </div>
               
            </div>
        </div>
    </div>
}
export default Profile