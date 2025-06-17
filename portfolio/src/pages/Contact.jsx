import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef();

  useEffect(() => {
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
    setSubmitStatus('');

    try {
      await emailjs.sendForm(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        formRef.current,
        'your_public_key' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '120px 40px 40px 320px',
      color: 'white',
      fontFamily: 'Space Grotesk, sans-serif',
      pointerEvents: 'none'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ 
          marginBottom: '80px',
          transform: isLoaded ? 'translateY(0)' : 'translateY(-50px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '16px',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Contact
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#888888',
            fontWeight: '400',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.3px'
          }}>
            Let's discuss your next project or research collaboration
          </p>
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }}>
          {/* Contact Info */}
          <div style={{
            transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '32px',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.01em'
            }}>
              Let's Connect
            </h2>
            
            <p style={{
              fontSize: '1rem',
              color: '#aaaaaa',
              lineHeight: '1.7',
              marginBottom: '48px',
              fontWeight: '400',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.3px'
            }}>
              Whether you're interested in collaboration, have a project in mind, or just want to 
              discuss the latest developments in AI and computer graphics, I'd love to hear from you.
            </p>

            {/* Contact Methods */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              pointerEvents: 'auto'
            }}>
              {[
                { 
                  icon: '📧', 
                  label: 'Email', 
                  value: 'raghav@contineu.ai',
                  link: 'mailto:raghav@contineu.ai'
                },
                { 
                  icon: '💼', 
                  label: 'LinkedIn', 
                  value: 'Connect on LinkedIn',
                  link: 'https://www.linkedin.com/in/suryanraghav/'
                },
                { 
                  icon: '🐙', 
                  label: 'GitHub', 
                  value: 'Check out my repositories',
                  link: 'https://github.com/Spyder156'
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '24px',
                    background: 'rgba(255, 255, 255, 0.01)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                    opacity: isLoaded ? 1 : 0,
                    transitionDelay: `${0.4 + index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.target.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ 
                    fontSize: '1.5rem', 
                    minWidth: '24px',
                    opacity: '0.7'
                  }}>
                    {contact.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#666666',
                      fontWeight: '500',
                      marginBottom: '4px',
                      fontFamily: 'Space Grotesk, sans-serif',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase'
                    }}>
                      {contact.label}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: '#ffffff',
                      fontWeight: '500',
                      fontFamily: 'Space Grotesk, sans-serif'
                    }}>
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div style={{
              marginTop: '48px',
              padding: '32px 24px',
              background: 'rgba(34, 197, 94, 0.05)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '2px',
              transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: '#22c55e',
                  animation: 'pulse 2s infinite'
                }}></div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#22c55e',
                  fontWeight: '600',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Available for Projects
                </div>
              </div>
              <div style={{
                fontSize: '0.925rem',
                color: '#aaaaaa',
                fontWeight: '400',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '0.3px'
              }}>
                Currently accepting new projects and collaboration opportunities
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '2px',
              padding: '48px 40px',
              transition: 'all 0.2s ease',
              pointerEvents: 'auto'
            }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '32px',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '-0.01em'
              }}>
                Send a Message
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#888888',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontFamily: 'Space Grotesk, sans-serif',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      fontWeight: '400',
                      letterSpacing: '0.3px'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#888888',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontFamily: 'Space Grotesk, sans-serif',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      fontWeight: '400',
                      letterSpacing: '0.3px'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    color: '#888888',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontFamily: 'Space Grotesk, sans-serif',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      resize: 'vertical',
                      fontWeight: '400',
                      letterSpacing: '0.3px',
                      lineHeight: '1.6'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '16px 32px',
                    background: isSubmitting ? '#666666' : '#ffffff',
                    border: 'none',
                    borderRadius: '2px',
                    color: '#000000',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    alignSelf: 'flex-start'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.background = '#f0f0f0';
                      e.target.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.background = '#ffffff';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div style={{
                    padding: '16px 20px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '2px',
                    color: '#22c55e',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.3px'
                  }}>
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div style={{
                    padding: '16px 20px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '2px',
                    color: '#ef4444',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.3px'
                  }}>
                    ✗ Failed to send message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add pulse animation keyframes */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
}

export default Contact; 