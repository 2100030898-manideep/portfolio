import React from "react";
import styled from "styled-components";

const Portfolio = () => {
  const myProjects = [
    {
      id: 1,
      name: "Student Course Management System",
      description: "A Spring Boot project to manage students and their courses with role-based access.",
      image: "/images/spring-boot-project.png", // Make sure this image exists in public/images
      link: "https://github.com/2100030898-manideep?tab=repositories", // Your GitHub repo or demo link
    },
    {
      id: 2,
      name: "Event Management System",
      description: "A Django-based web app that handles events, user registrations, and admin controls.",
      image: "/images/django-event-project.png",
      link: "https://github.com/2100030898-manideep/Event-management-system-using-django",
    },
  ];

  return (
    <Wrapper>
      <div className="card-inner p-section">
        <div className="card-wrap">
          <div className="content work">
            <div className="title" data-aos="fade-up">
              <span className="first-word">My </span> Projects
            </div>
          </div>

          <div className="grid-items">
            {myProjects.map((project) => (
              <div className="grid-item" key={project.id}>
                <div className="box-item">
                  <div className="image">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={project.image} alt={project.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <strong>{project.name}</strong>
                    </a>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.section`

   max-height: 100vh; /* Makes it fit within the viewport */
  overflow-y: auto;  /* Enables vertical scroll */
  padding: 1rem;

  .card-wrap {
    overflow: hidden;
    padding-bottom: 30px;
  }

  .grid-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }

  .grid-item .box-item {
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    padding: 1rem;
    transition: transform 0.3s;
  }

  .box-item:hover {
    transform: translateY(-5px);
  }

  .box-item img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .desc {
    margin-top: 1rem;
  }

  .desc p {
    font-size: 0.9rem;
    color: #555;
  }

  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .first-word {
    color: #00b894;
  }
`;
