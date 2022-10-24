import React from "react";
import styled from "styled-components";
import { PrimaryLink } from "../elementsUI/Buttons";

const ProjectCard = ({ className, article }) => {
  return (
    <article className={`${className} project`} key={article.id}>
      <div className="project-card project-card-shadow">
        <div className="project-card-content">
          
            <div className="project-card-img center-img">
              <img
                src={article.imgProject}
                alt="discounts city project"
                className=""
              />
            </div>
          
          <h3 className="project-tile">{article.title}</h3>
          <ul>
              {article.stack.map((element)=>{
                
                return(<li key={element.name}>  
                <i className={`bx bx-md ${element.icon}`}></i>{element.name} 
                </li>)
              })
              }
          </ul>

        </div>
        <div className="project-card-footer">
          <p>
            <b> {article.lenguage} </b>
          </p>
          <PrimaryLink
            href={article.url}
           
            target="_blank"
            id="profile-link"
          >
            Read more...
          </PrimaryLink>
        </div>
      </div>
    </article>
  );
};

export default styled(ProjectCard)`


    width: 100%;
    margin: 0.5rem 0;
  

  .project-card {
    background: white;
    padding: 1rem;
    border: 2px solid rgba(0, 0, 0, 0.514);
    border-radius: 1rem;
    /* height: 100%; */
  }

  .project-card-img {
    height: 250px;
    overflow: hidden;
    cursor: pointer;
  }

  .center-img {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .project-card-img > img {
    align-items: center;
    width: 100%;
  }

  .project-card h3 {
    font-size: 30px;
    font-weight: 200;
    
    margin:20px 0;
  }

  .project p {
    margin: 20px 0;
    color: #494949;
    font-size: 1rem;
  }

  .project-card ul {
    display: flex;
    font-weight: 600;
    font-size: 1rem;
    justify-content: space-around;
  }

  .project-card li {
    padding: 0.25rem;
    display: flex;
    align-items: center;
    width: 22%;
    justify-content: space-evenly;
  }

  .project-card i {
    font-size: 1rem;
  }

  .project-card-footer {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .project-card-footer p {
    margin: 0;
    font-size: 12pxrem;
  }
 

  .project-card.project-card-shadow {
    border: none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
