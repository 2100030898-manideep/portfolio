import React from "react";
import styled from "styled-components";

const Certifications = () => {
  const myCertifications = [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      description: "Foundational level certification in cloud computing by Amazon Web Services.",
      image: "/images/aws-cert.png",
      link: "https://www.credly.com/badges/e14b75ad-8b8c-4152-b12e-b7f8719fe3e1",
    },
    {
      id: 2,
      name: "Red Hat Certified Enterprise Application Developer (EX183)",
      description: "Credential validating skills in enterprise Java application development.",
      image: "/images/redhat-cert.png",
      link: "https://www.credly.com/badges/d4c7bc5e-7a8a-470e-888b-545bac7fab02",
    },
  ];

  return (
    <Wrapper>
      <div className="card-inner p-section">
        <div className="card-wrap">
          <div className="content work">
            <div className="title" data-aos="fade-up">
              <span className="first-word">My </span> Certifications
            </div>
          </div>

          <div className="grid-items">
            {myCertifications.map((cert) => (
              <div className="grid-item" key={cert.id}>
                <div className="box-item">
                  <div className="image">
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      <img src={cert.image} alt={cert.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      <strong>{cert.name}</strong>
                    </a>
                    <p>{cert.description}</p>
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

export default Certifications;

const Wrapper = styled.section`
  max-height: 100vh;
  overflow-y: auto;
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
