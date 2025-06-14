import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // You'll need to replace these with your EmailJS service details
    // Get these from https://www.emailjs.com/
    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_template_id';
    const PUBLIC_KEY = 'your_public_key';

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'transparent',
      padding: '120px 20px 40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #646cff, #747bff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}>
            Let's Work Together
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#cccccc',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Have a project in mind? Want to collaborate on cutting-edge AI research? 
            Drop me a message and let's create something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}>
          <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {/* Name Input */}
            <div>
              <label style={{
                display: 'block',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.border = '1px solid #646cff';
                  e.target.style.background = 'rgba(100, 108, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label style={{
                display: 'block',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.border = '1px solid #646cff';
                  e.target.style.background = 'rgba(100, 108, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                placeholder="john@example.com"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label style={{
                display: 'block',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.border = '1px solid #646cff';
                  e.target.style.background = 'rgba(100, 108, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                placeholder="Collaboration Opportunity"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label style={{
                display: 'block',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'vertical',
                  minHeight: '120px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.border = '1px solid #646cff';
                  e.target.style.background = 'rgba(100, 108, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                placeholder="Tell me about your project or idea..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '15px 30px',
                background: isSubmitting ? 'rgba(100, 108, 255, 0.5)' : 'linear-gradient(45deg, #646cff, #747bff)',
                border: 'none',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '10px'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(100, 108, 255, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message 📧'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div style={{
                padding: '15px',
                background: 'rgba(76, 175, 80, 0.2)',
                border: '1px solid rgba(76, 175, 80, 0.5)',
                borderRadius: '10px',
                color: '#4caf50',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                padding: '15px',
                background: 'rgba(244, 67, 54, 0.2)',
                border: '1px solid rgba(244, 67, 54, 0.5)',
                borderRadius: '10px',
                color: '#f44336',
                fontSize: '1rem',
                textAlign: 'center'
              }}>
                ❌ Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>

        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px',
          color: '#999999'
        }}>
          <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>
            📍 Based in India | 🌍 Available for remote work worldwide
          </p>
          <p style={{ fontSize: '0.8rem' }}>
            Or email me directly at: <a href="mailto:raghav@contineu.ai" style={{ color: '#646cff', textDecoration: 'none' }}>raghav@contineu.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact; 