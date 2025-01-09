import './App.css';

import Header from './components/header';
import Profile from './components/profile';
import Info from './components/info';
import Certcard from './components/certcard';
import ProjectCard from './components/projectCard';
import { about,skills,experience,education,handson,certificates } from './constants';

function App() {
  return (
    <>
    <Header/>
    <Profile/>
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

          <div className='certMainDiv' >
          <h3  style={{
                color:"#e2e2e2",
                fontSize:"2rem",
                lineHeight:"0px",
                marginTop:"15px"
            }}>Certifications</h3>
         
          <div className='certDiv'>
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


         




          
   
    
    {/* <div className="App">
    </div> */}
    </>
  );
}

export default App;
