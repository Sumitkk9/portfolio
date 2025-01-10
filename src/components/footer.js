import react from "react"
import ColorFullButton from "./button"
const Footer = ({mailid,phoneno,linkedin,whatsappChat})=>{
   return <div className="footerMainDiv">
    <div className="footerInfo">
        <h3>Open To Work</h3>
        <p>email id - {mailid}</p>
        <p>phone no - {phoneno}</p>
        <div style={{display:"flex",gap:10}}>
            
                <ColorFullButton
                title="linkedin"
                border={true}
                textclr="#e2e2e2"
                hvrclr="#00ffa3"
                url={linkedin}
                />
            
           
                <ColorFullButton
                title="Chat With Me"
                border={true}
                textclr="#e2e2e2"
                hvrclr="#00ffa3"
                url={whatsappChat}
                />
          
        </div>
    </div>
    <div>

        {/* <form>
            <label for="fullname">Full Name</label> <br/>
            <input type="text" id="fullname" placeholder="Full Name" required/>
            <label for="email">Email</label> 
            <input type="email" id="email" placeholder="Email Id" required/>
            <label for="phone">Phone</label>
            <input type="number" id="phone" placeholder="Phone" />
            <label for="message">Message</label>
            <textarea id="message" rows={4} placeholder="Message"/>
            <input type="submit" name="Submit"/>



        </form> */}
    </div>
   </div>
}
export default Footer