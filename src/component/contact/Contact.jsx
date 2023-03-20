import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aovkve9",
        "template_h1jjay6",
        form.current,
        "RcVGLBx0oapbBIScm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="contact__container" id="contact">
      <div className="container">
        <div className="judul">
          <h2>CONTACT</h2>
          <div className="border__color"></div>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <article className="contact__input">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Your Name" />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Your Email" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows="7"
              placeholder="Enter Your Message"
            ></textarea>
            <button type="submit" className="btn__input">
              SUBMIT
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Contact;
