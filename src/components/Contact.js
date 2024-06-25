import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Make sure to install emailjs-com package
import './Contact.css'; // Import the CSS file

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await emailjs.send(
        'service_70htq8d',
        'template_45h9yjr',
        formData,
        'CvV9MWCNZaSzdcRmu'
      );
      console.log('Email sent!', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form-page">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-row">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            </div>
            <div className="input-row">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-row">
            <textarea
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="input-row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
