import './App.css';

import Header from './components/header';
import Profile from './components/profile';
import Info from './components/info';

import { about,skills,experience } from './constants';

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
   
    
    {/* <div className="App">
    </div> */}
    </>
  );
}

export default App;
