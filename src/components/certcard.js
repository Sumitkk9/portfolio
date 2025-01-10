import react from "react"
import AdsClickIcon from '@mui/icons-material/AdsClick';

const Certcard = ({imgurl,certUrl,certName,certFrom,issueD})=>{
    return <div className="CertcardDiv">
       
        <div className="mediaCard">
        <span style={{
            background:"transparent",
            fontSize:"0.3rem",
            position:"absolute",
            marginLeft:"100px"
        }}>{issueD}</span>
            <img src={imgurl} alt="cert icons"/>
        </div>
        <div className="infodiv">
            <h3 style={{
                fontFamily:'Azeret Mono',
                }}>{certName}</h3>
            <h4>{certFrom}</h4>           
        </div>
        <div className="actionDiv">
        <button onClick={() => window.open(certUrl, '_blank')}> <span ><AdsClickIcon style={{background: "transparent", fontSize:"0.7rem"}}/></span> Click Here To View</button>    
        </div>
    </div>
}
export default Certcard