import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m74c32m",
        "template_gavwz3h",
        form.current,
        "ks5MNwGxMPi14RjjS"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        />

        <button
          type="submit"
          className="btn"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;