import React from "react";
import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "325fd208-f622-4fa4-862b-4f29f6fa6e14");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <h1>Get In Touch</h1>

      <div className="contact">
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <br />
            <label>Your Phone Number</label>
            <br />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <br />
            <label>Write your message</label>
            <br />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message here"
              required
            ></textarea>
            <br />
            <button className="btn dark-btn">Submit Answers</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
