import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";
import emailjs from 'emailjs-com';

function Contact() {

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  // connect with firebase
  const submitData = (event) => {
  event.preventDefault();

  const { firstName, lastName, email, address, message } = userData;

  if (firstName && lastName && email && address && message) {
    emailjs.send(
      'service_f0hejec',      // Replace with your EmailJS service ID
      'template_5c81d9g',     // Replace with your EmailJS template ID
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        message: message,
      },
      'M6MJ6atxf9wmPScPP'       // Replace with your EmailJS public key (NOT private key)
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Thanks, your message is sent successfully!");
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        message: "",
      });
    })
    .catch((err) => {
      console.error("FAILED...", err);
      alert("Oops! Something went wrong.");
    });
  } else {
    alert("Please fill all the fields.");
  }
};
  return (
    <Wrapper>
      <section className="card-inner contacts" id="contacts-card">
        <div className="card-wrap">
          <div className="content contacts">
            <div className="title" data-aos="fade-up">
              <span className="first-word">Get </span>
              in Touch
            </div>
            <div className="row">
              <div className="col col-12 border-line-v ">
               
                    <div className="map">
  <div style={{ width: "100%" }}>
    <iframe
      title="map"
      width="100%"
      height="300"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30503.718065546225!2d81.26986670659586!3d17.12321830803047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36f634bca6f9cb%3A0xe45790a9dbf53be0!2sJangareddigudem%2C%20Andhra%20Pradesh%20534447!5e0!3m2!1sen!2sin!4v1748246691868!5m2!1sen!2sin"
    ></iframe>
  </div>
</div>

                  
              </div>
            </div>
            <div className="content contacts">
              <div className="title">
                <span className="first-word">Contact </span>
                Form
              </div>
              <div className="row">
                <div className="col col-12 border-line-v">
                  <div className="contact_form">
                    <form id="cform" method="post" noValidate="novalidate">
                      <div className="row">
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={userData.firstName}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6 ">
                          <div className="group-val">
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={userData.lastName}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email Address"
                              value={userData.email}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="address"
                              placeholder="Address"
                              value={userData.address}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-12">
                          <div className="group-val">
                            <textarea
                              name="message"
                              placeholder="Your Message"
                              value={userData.message}
                              onChange={postUserData}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="align-left">
                        <button className="button" onClick={submitData}>
                          <span className="text">Send Message</span>
                          <span className="icon">
                            <FaTelegramPlane />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.section`
  .content {
    position: relative;
    margin: 0 0 40px 0;

    &:last-child {
      margin-bottom: 30px;
    }
    input,
    textarea,
    button {
      transition: all 0.3s ease 0s;
      box-shadow: 5px 5px 10px rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
    }
    .title {
      color:  rgb(${({ theme }) => theme.title.primary});

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        left: -30px;
        right: 0;
        bottom: 0;
        width: auto;
        background:  ${({ theme }) => theme.border.gradient2};
      }
    }

    .alert-success {
      display: none;
    }

    .contacts .row {
      .col {
        flex: none;

        textarea {
          padding: 15px;
          height: 94px;
        }
      }
        .icon {
          font-size: 1.2rem;
          margin: 0 6px;
        }

        button {
          
          box-shadow: 5px 5px 10px rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
          &:hover {
            background: ${({ theme }) => theme.highlight.primary};
            border: none;
            .icon {
              margin-left: 10px;
            }
          }
        }
      
    }
  }
`;
