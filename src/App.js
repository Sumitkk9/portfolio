import './App.css';

import Header from './components/header';
import Profile from './components/profile';
import Info from './components/info';
import Certcard from './components/certcard';
import Footer from './components/footer';
import BgBlack from "./imgs/bgblack.jpg"
import {whatsappUrl, mailId,phoneNO, about,skills,experience,education,handson,certificates,projects, linkedIn } from './constants';
import {motion} from "framer-motion"
function App() {
  const smallScreenSize = ()=> window.innerWidth<=900

  return (
    <>
    <Header/>
    <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}  // Animate when visible
            viewport={{ once: true, amount: 0.4 }} // Trigger when 40% is in view
            transition={{ duration: 1 }}
            className="p-5 bg-green-500 text-white text-center rounded-lg"
        >
         <Profile/>
        </motion.div>
  
       
        <Info
          title="About"
          subtitle="Brief introduction"
          info={about} />
    <Info
    title="SKILLS"
    subtitle="Technical Skills"
    list={skills} />

    {experience.map((exp)=>(
          <Info
          title="Professional Experience"
          subtitle={exp.subtitle}
          info={exp.exp}
          />
    ))}



          <Info
          title="Education"
          eduinfo={education}
          />
          <Info
          title="Hands-On Achievements"
          eduinfo={handson}
          />
          
         

       <div style={{position:"relative"}}>

       <div className='certMainDiv'  >
          <h3  style={{
                color:"#e2e2e2",
                fontSize: smallScreenSize()? "1.5rem":"2rem",
                lineHeight:"0px",
                marginTop:"15px",
                marginBottom:"30px"
            }}>Certifications</h3>
         
          <div className='certDiv'  style={{backgroundImage: `url(${BgBlack})`}}>
      {certificates.map((cert,index)=>(
        <Certcard
        key={index+3}
        certName={cert.courseName}
        certFrom={cert.certFrom}
        imgurl={cert.certIcon}
        certUrl={cert.certUrl}
        issueD={cert.issueDate}
        
        />
      ))}
    </div>
    </div>

    <div className='certMainDiv' >
          <h3  style={{
                color:"#e2e2e2",
                fontSize: smallScreenSize()? "1.5rem":"2rem",
                lineHeight:"0px",
                marginTop:"15px",
                marginBottom:"30px",
                zIndex:10
            }}>Personal Projects</h3>
         
          <div className='certDiv'  style={{backgroundImage: `url(${BgBlack})`}}>
      {projects.map((pjt,index)=>(
        <Certcard
        key={index+3}
        certName={pjt.courseName}
        certFrom={pjt.certFrom}
        imgurl={pjt.certIcon}
        certUrl={pjt.certUrl}
        
        />
      ))}
    </div>
    </div>

    <Footer
    mailid={mailId}
    phoneno={phoneNO}
    linkedin={linkedIn}
    whatsappChat={whatsappUrl}
    />
       </div>

     
         




          
   
    
    {/* <div className="App">
    </div> */}
    </>
  );
}

export default App;
