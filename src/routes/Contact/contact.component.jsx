import React, { useState } from 'react';
import {Outlet} from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Here, you could send the form data to a backend API or email service
    alert('Message sent!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <div style={{ marginBottom: '1rem' }}>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', height: '150px' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.75rem 1.5rem' }}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
