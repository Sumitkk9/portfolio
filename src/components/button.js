import react,{useState} from 'react'
import '../components/Style.css'

import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';
const ColorFullButton = ({clr,title,hvrclr,url,textclr,txthoverclr,border})=>{
    const [hover,setHover] = useState(false)
    return <button className='btnHover' style={{
        fontFamily: 'Azeret Mono',
        padding:"7px",
        paddingLeft:"20px",
        paddingRight:"20px",
        fontWeight:"400",
        border: !border? "none": "1px solid white",
        backgroundColor: hover? hvrclr? hvrclr :  "#e2e2e2" : clr ,
        cursor:"pointer",
        color: hover? txthoverclr? txthoverclr: "Black" : textclr,
        fontSize:"0.9rem"
    }}
    onMouseEnter={()=> setHover(true)}
    onMouseLeave={()=> setHover(false)}
    onClick={()=> window.open(url, '_blank')}
    >
    {title} <span style={{marginLeft:"5px",
       backgroundColor:"transparent",
     
    }}>{hover? <SouthEastIcon style={{fontSize:"1rem", backgroundColor:"transparent"}}/>:<NorthEastIcon style={{fontSize:"1rem",backgroundColor:"transparent"}}/>}</span>
    </button>
}
export default ColorFullButton

// "#00ffa3"
// "#e2e2e2"