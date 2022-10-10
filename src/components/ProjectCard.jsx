import React from "react";
import styled from "styled-components";

const ProjectCard = ({ className, article }) => {
  return (
    <article className={`${className} project`} key={article.id}>
      <div className="project-card project-card-shadow">
        <div className="project-card-content">
          <a href={article.url} className="" target="_blank" id="profile-link">
            <div className="project-card-img center-img">
              <img
                src={article.imgProject}
                alt="discounts city project"
                className=""
              />
            </div>
          </a>
          <h3 className="project-tile">{article.title}</h3>
          <ul>
            <li>
              <i className="bx bxl-html5"></i> HTML
            </li>
            <li>
              <i className="bx bxl-css3"></i> CSS
            </li>
            <li>
              <i className="bx bxl-javascript"></i> JS
            </li>
            <li>
              <i className="bx bxl-react"></i> React
            </li>
          </ul>
        </div>
        <div className="project-card-footer">
          <p>
            <b> {article.lenguage} </b>
          </p>
          <a
            href={article.url}
            className="project-card-btn"
            target="_blank"
            id="profile-link"
          >
            View Live
          </a>
        </div>
      </div>
    </article>
  );
};

export default styled(ProjectCard)`

.project {
    width: 30%;
    margin: 0.5rem 0;
  }

  .project-card {
    background: white;
    padding: 1rem;
    border: 2px solid rgba(0, 0, 0, 0.514);
    border-radius: 1rem;
    /* height: 100%; */
  }

  .project-card-img {
    height: 100px;
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
    font-size: 1.2rem;
    font-weight: 200;
    padding: 10px 0;
  }

  .project p {
    margin: 20px 0;
    color: #494949;
    font-size: 1rem;
  }

  .project-card ul {
    display: flex;
    font-weight: 600;
    font-size: 0.75rem;
    justify-content: space-around;
  }

  .project-card li {
    padding: 0.25rem;
    display: flex;
    width: 20%;
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
    font-size: 0.6rem;
  }

  .project-card-btn {
    background: #4e66f8;
    color: #fff;
    border: none;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }

  .project-card-btn:hover,
  .project-card-btn:focus {
    background: #505ebb;
  }

  .project-card.project-card-shadow {
    border: none;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  }
`;
