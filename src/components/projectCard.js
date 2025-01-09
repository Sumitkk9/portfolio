import React from "react";



const ProjectCard = ({viewMoreClicked,img,title, dis,year,released,actors,imdbrating,mtype})=>{
   
   return<div className="mainCardDev">
       
        <div className="cardHead">
        <div className="tag">
                {mtype}
            </div>
            <img src={img} alt="poster"/>
           
        </div>
        <div className="contentDiv">
            <div  className="contentDiv1">
                <h3>{title}</h3>
                <p>{"hello"}</p>
                <p>Rating: {imdbrating}</p>
            </div>
            <div className="contentDiv2"></div>
            <div  className="contentDiv3">
                <h3>Year</h3>
                <p>{year}</p>
                <h3>Actors</h3>
                <p>hello</p>
                <h3>Runtime</h3>
                <p>{released}</p>
            </div>
        </div>
        <div className="actionCardDiv">
            <button onClick={viewMoreClicked}>View More</button>
        </div>
    </div>
}
export default ProjectCard