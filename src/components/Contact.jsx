import React from "react";
import Swal from "sweetalert2";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "3d2938a1-adc5-4667-8996-d0c2fbe8fddc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <>
      <h1>CONTACT ME</h1>
      <div className="container contact">
        <div
          className="contact_form"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <form onSubmit={onSubmit}>
            <div className="input-box">
              <input
                type="text"
                id="user_name"
                className="field"
                name="name"
                placeholder="Enter your fullname"
                required
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                id="email"
                className="field"
                name="Email"
                placeholder="enter your email"
                required
              />
            </div>

            <div className="input-box">
              <textarea
                id="message"
                className="field message"
                name="message"
                placeholder="enter your message"
                required
              ></textarea>
            </div>

            <button type="submit">Send message</button>
          </form>
        </div>
        <div className="contact_me" data-aos="flip-up" data-aos-duration="1000">
          <a
            href="https://www.instagram.com/jainsaab624/"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/prateek.jn624/"
            target="_blank"
            className="items"
          >
            <FaFacebookSquare className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/prateekjn624/"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/prateekjain624"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:prateek.jn624@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};
