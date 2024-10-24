import { PROFILE_DATA  } from "../utils/data";
import { IoMdMail, IoMdCall } from "react-icons/io";
import axiosInstance from "../utils/axiosInstance";
import { useState } from "react";


const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/submit", {
        fullName,
        email,
        message,
      });

      // Handle successful response
      if (response.data && response.data.message) {
        setFullName("");
        setEmail("");
        setMessage("");
        setResponseMessage("Message sent successfully");
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section className='max-w-screen-xl mx-auto px-6 pb-20' id='contact'>
      <h5 className='text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14'>
        Contact Me
      </h5>

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16'>
        <div>
          <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA.email} />
          <ContactInfoCard icon={<IoMdCall />} text={PROFILE_DATA.phone} />
        </div>
        <div>
          <h5 className="md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5">Contact Form</h5>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={fullName}
              id="fullname"
              onChange={(e) => setFullName(e.target.value)}
              className="input-box"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-box"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
              className="input-box"
              autoComplete="off"
              required
              >
            </textarea>

            <button className="primary-btn">SUBMIT</button>
            {responseMessage && <p className="mt-4 text-cyan-300">{responseMessage}</p>}
          </form>

        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex itemx-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-cyan-600/40 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700">{icon}</div>

      <p className="text-cyan-100 text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default Contact;