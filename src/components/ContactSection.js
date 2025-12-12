'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-section" id="contact-section">
      <div className="container">
        <div className="row align-items-start g-5">
          {/* Left column: Contact Info */}
          <div className="col-lg-6 d-flex flex-column left-column">
            <h3 className="fw-bold">SEND US A MESSAGE</h3>
            <p className="text-muted">
              Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
            </p>
            <div className="contact-info">
              <p><i className="fas fa-location-dot"></i> Plot 4 HouseHold of God Street, Off Kudirat Abiola Way, Clay Bus–Stop, Ikeja, Lagos – Nigeria</p>
              <p><i className="fas fa-envelope"></i> info@householdofgodchurch.org</p>
              <p><i className="fas fa-phone"></i> +234 813 6633 494, +234 702 6828 318</p>
            </div>
          </div>

          {/* Right column: Form */}
          <div className="col-lg-6">
            <div className="contact-box">
              <form onSubmit={handleSubmit}>
                <h4>CONTACT FORM</h4>
                <p>Kindly fill the form below to reach out to us</p>
                <div className="form-group">
                  <i className="fas fa-user"></i>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Full Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email Address" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <i className="fas fa-tag"></i>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <i className="fas fa-comment-dots"></i>
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    placeholder="Write your message here..." 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-custom">
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}