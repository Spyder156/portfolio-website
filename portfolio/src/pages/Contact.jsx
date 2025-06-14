import React, { useState, useRef, useEffect } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts - made faster
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

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
      padding: '120px 20px 40px 280px', // Added left padding for sidebar
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Space Grotesk, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          transform: isLoaded ? 'translateY(0)' : 'translateY(-50px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: '20px',
            fontFamily: 'Space Grotesk, sans-serif'
          }}>
            Let's Work Together
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#cccccc',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '700',
            fontFamily: 'Space Grotesk, sans-serif'
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
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
        }}>
          <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {/* Name Input */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: '#cccccc', 
                fontWeight: '800',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'Space Grotesk, sans-serif'
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
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.border = '1px solid rgba(136, 136, 136, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: '#cccccc', 
                fontWeight: '800',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'Space Grotesk, sans-serif'
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
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.border = '1px solid rgba(136, 136, 136, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                placeholder="john@example.com"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                color: '#cccccc', 
                fontWeight: '800',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'Space Grotesk, sans-serif'
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
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.border = '1px solid rgba(136, 136, 136, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                placeholder="Collaboration Opportunity"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '8px', 
                color: '#cccccc', 
                fontWeight: '800',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'Space Grotesk, sans-serif'
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
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'vertical',
                  minHeight: '120px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.border = '1px solid rgba(136, 136, 136, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
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
                background: isSubmitting ? 'rgba(136, 136, 136, 0.5)' : 'linear-gradient(45deg, #666666, #777777)',
                border: 'none',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '800',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '10px',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(136, 136, 136, 0.4)';
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
                textAlign: 'center',
                fontWeight: '700',
                fontFamily: 'Space Grotesk, sans-serif'
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
                textAlign: 'center',
                fontWeight: '700',
                fontFamily: 'Space Grotesk, sans-serif'
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
          color: '#999999',
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
        }}>
          <p style={{ fontSize: '0.9rem', marginBottom: '15px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>
            📍 Based in India | 🌍 Available for remote work worldwide
          </p>
          <p style={{ fontSize: '0.8rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600' }}>
            Or email me directly at: <a href="mailto:raghav@contineu.ai" style={{ color: '#888888', textDecoration: 'none' }}>raghav@contineu.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact; 